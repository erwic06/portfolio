import { Redis } from "@upstash/redis";
import { createHash } from "crypto";
import type { VercelRequest, VercelResponse } from "@vercel/node";

const redis = Redis.fromEnv();
const KEY = "portfolio:visitors";

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");

  if (req.method === "POST") {
    const forwarded = req.headers["x-forwarded-for"];
    const ip = (Array.isArray(forwarded) ? forwarded[0] : forwarded?.split(",")[0]) ?? "unknown";
    const hashed = createHash("sha256").update(ip).digest("hex");
    await redis.sadd(KEY, hashed);
    const count = await redis.scard(KEY);
    return res.status(200).json({ count });
  }

  if (req.method === "GET") {
    const count = await redis.scard(KEY);
    return res.status(200).json({ count });
  }

  return res.status(405).json({ error: "Method not allowed" });
}

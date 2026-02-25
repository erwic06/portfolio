import { useParams, Link } from "react-router-dom";
import { loadInterests } from "@/utils/loadInterests";

export default function InterestPage() {
  const { id } = useParams<{ id: string }>();
  const interests = loadInterests();
  const interest = interests.find((i) => i.slug === id);

  if (!interest) {
    return (
      <div className="page">
        <Link to="/interests" className="back-link">
          ← Back to interests
        </Link>
        <p style={{ color: "var(--muted)" }}>Interest not found.</p>
      </div>
    );
  }

  return (
    <div className="page">
      <Link to="/interests" className="back-link">
        ← Back to interests
      </Link>
      <div className="post-header">
        <h1>{interest.title}</h1>
      </div>
      <div className="blog-content">
        <interest.Component />
      </div>
    </div>
  );
}

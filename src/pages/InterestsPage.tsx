import { Link } from "react-router-dom";
import { loadInterests } from "@/utils/loadInterests";

export default function InterestsPage() {
  const interests = loadInterests();

  return (
    <div className="page">
      <h2 className="section-title">Interests</h2>
      {interests.map((interest) => (
        <Link
          key={interest.slug}
          to={`/interests/${interest.slug}`}
          className="interest-item"
        >
          <h3>{interest.title}</h3>
          <p>{interest.description}</p>
        </Link>
      ))}
    </div>
  );
}

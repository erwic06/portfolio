import { personalInfo } from "@/data/portfolioData";

export default function HomePage() {
  return (
    <div className="page">
      <div className="intro">
        <p>{personalInfo.bio}</p>

        <div className="roles">
          {personalInfo.roles.map((role, i) => (
            <div key={i} className="role">
              {role.title} @ {role.org}
            </div>
          ))}
        </div>

        <div className="social-links">
          <a
            href={personalInfo.socials.github}
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href={personalInfo.socials.linkedin}
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href={personalInfo.socials.twitter}
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div>
      </div>
    </div>
  );
}

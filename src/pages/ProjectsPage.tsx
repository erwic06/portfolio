import { projects } from "@/data/portfolioData";

export default function ProjectsPage() {
  return (
    <div className="page">
      <h2 className="section-title">Projects</h2>
      {projects.map((project, i) => (
        <div key={i} className="project-item">
          <h3>{project.name}</h3>
          <div className="project-meta">
            {project.award && <span className="award">{project.award}</span>}
            <span>{project.date}</span>
          </div>
          <p>{project.description}</p>
          <div className="tech">
            {project.tech.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              View Project →
            </a>
          )}
        </div>
      ))}
    </div>
  );
}

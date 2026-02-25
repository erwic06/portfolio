import { archiveItems } from "@/data/portfolioData";

export default function ArchivePage() {
  return (
    <div className="page">
      <h2 className="section-title">Archive</h2>
      <p style={{ color: "var(--muted)", fontSize: 14, marginBottom: 24 }}>
        Previous versions of this website.
      </p>
      {archiveItems.map((item, i) => (
        <div key={i} className="archive-item">
          <h3>{item.name}</h3>
          <span>{item.year}</span>
        </div>
      ))}
    </div>
  );
}

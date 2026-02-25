import { Link } from "react-router-dom";
import { loadBlogPosts } from "@/utils/loadBlogPosts";

export default function BlogPage() {
  const posts = loadBlogPosts();

  return (
    <div className="page">
      <h2 className="section-title">Blog</h2>
      {posts.length === 0 && <p style={{ color: "var(--muted)" }}>No posts yet.</p>}
      {posts.map((post) => (
        <Link key={post.slug} to={`/blog/${post.slug}`} className="blog-item">
          <div className="blog-date">
            {post.date}
            <span className="read-time">{post.readTime}</span>
          </div>
          <div className="blog-info">
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

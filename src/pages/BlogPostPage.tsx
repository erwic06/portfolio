import { useParams, Link } from "react-router-dom";
import { loadBlogPosts } from "@/utils/loadBlogPosts";

export default function BlogPostPage() {
  const { id } = useParams<{ id: string }>();
  const posts = loadBlogPosts();
  const post = posts.find((p) => p.slug === id);

  if (!post) {
    return (
      <div className="page">
        <Link to="/blog" className="back-link">
          ← Back to blog
        </Link>
        <p style={{ color: "var(--muted)" }}>Post not found.</p>
      </div>
    );
  }

  return (
    <div className="page">
      <Link to="/blog" className="back-link">
        ← Back to blog
      </Link>
      <div className="post-header">
        <h1>{post.title}</h1>
        <div className="post-meta">
          {post.date} · {post.readTime}
        </div>
      </div>
      <div className="blog-content">
        <post.Component />
      </div>
    </div>
  );
}

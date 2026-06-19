import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { getPost } from '../api/Posts';
import '../css/PostDetail.css';

function PostDetail() {
  const { id } = useParams();
  const [post, setPost]       = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);

    getPost(id)
      .then(data => { if (!cancelled) setPost(data); })
      .catch(err  => { if (!cancelled) setError(err.message); })
      .finally(()  => { if (!cancelled) setLoading(false); });

    return () => { cancelled = true; };
  }, [id]);  // re-fetch whenever the URL id changes

  if (loading) return <p className="loading">Loading…</p>;
  if (error)   return <p className="error">Error: {error}</p>;

  return (
    <div className="post-detail-container">
      <Link to="/posts">← Back to posts</Link>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
}

export default PostDetail;
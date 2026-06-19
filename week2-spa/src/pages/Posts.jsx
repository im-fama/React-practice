import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getPosts } from '../api/Posts';
import '../css/Posts.css';

function Posts() {
  const [posts, setPosts]     = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError]     = useState(null);

  useEffect(() => {
    let cancelled = false;

    getPosts()
      .then(data => { if (!cancelled) setPosts(data); })
      .catch(err  => { if (!cancelled) setError(err.message); })
      .finally(()  => { if (!cancelled) setLoading(false); });

    return () => { cancelled = true; };
  }, []);

  if (loading) return <p className="loading">Loading…</p>;
  if (error)   return <p className="error">Error: {error}</p>;

  return (
    <div className="posts-container">
      <h1>Posts</h1>
      <ul>
        {posts.slice(0, 10).map(post => (
          <li key={post.id}>
            <Link to={`/posts/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Posts;
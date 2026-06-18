const BASE = 'https://jsonplaceholder.typicode.com';

export async function getPosts() {
  const res = await fetch(`${BASE}/posts`);
  if (!res.ok) throw new Error(`Failed to load posts: ${res.status}`);
  return res.json();
}

export async function getPost(id) {
  const res = await fetch(`${BASE}/posts/${id}`);
  if (!res.ok) throw new Error(`Failed to load post: ${res.status}`);
  return res.json();
}
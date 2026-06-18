import { NavLink } from 'react-router-dom'

export default function Navbar() {
  const linkStyle = ({ isActive }) => ({
    marginRight: '16px',
    fontWeight: isActive ? 'bold' : 'normal',
  })

  return (
    <nav style={{ padding: '16px', borderBottom: '1px solid #ddd' }}>
      <NavLink to="/" style={linkStyle}>Home</NavLink>
      <NavLink to="/posts" style={linkStyle}>Posts</NavLink>
    </nav>
  )
}
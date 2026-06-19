import { NavLink } from 'react-router-dom'
import '../css/Navbar.css'

export default function Navbar() {
  return (
    <nav>
      <NavLink to="/" className={({ isActive }) => isActive ? 'active' : ''}>Home</NavLink>
      <NavLink to="/posts" className={({ isActive }) => isActive ? 'active' : ''}>Posts</NavLink>
    </nav>
  )
}
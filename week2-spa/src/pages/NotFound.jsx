import { Link } from 'react-router-dom'
import '../css/NotFound.css'

export default function NotFound() {
  return (
    <div className="not-found-container">
      <h1>404 — Page not found</h1>
      <Link to="/">Go home</Link>
    </div>
  )
}
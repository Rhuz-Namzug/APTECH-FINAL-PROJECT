import { Link } from "react-router-dom"
import "../Styles/navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Event Registration System</h2>

      <div className="nav-links">
        <Link to="/">Feedback</Link>
        <Link to="/registration">Event Registration</Link>
        <Link to="/admin">Admin</Link>
      </div>
    </nav>
  )
}

export default Navbar
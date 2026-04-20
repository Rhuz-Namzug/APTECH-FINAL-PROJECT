import { Link } from "react-router-dom"
import "../styles/navbar.css"

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Event System</h2>

      <div className="nav-links">
        <Link to="/">Feedback</Link>
        <Link to="/registration">Registration</Link>
        <Link to="/admin">Admin</Link>
      </div>
    </nav>
  )
}

export default Navbar
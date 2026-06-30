import { Link , NavLink } from "react-router-dom";


export default function Header() {
  return (
    <div>
            <header className="header">
        <h1><Link to="/">Web Dev Roadmap</Link></h1>
        <ul className="flex">
          <li className="main-list">
            <NavLink className="main-link" to="/Basic">
              Basics
            </NavLink>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/Framework">
              Frameworks
            </NavLink>
          </li>
          <li className="main-list">
            <NavLink className="main-link" to="/Tips">
              Tips
            </NavLink>
          </li>
        </ul>
      </header>
    </div>
  )
}

export default function Header() {
  return (
    <div>
            <header className="header">
        <h1>Web Dev Roadmap</h1>
        <ul className="flex">
          <li className="main-list">
            <a className="main-link" href="/Basic">
              Basics
            </a>
          </li>
          <li className="main-list">
            <a className="main-link" href="/Framework">
              Frameworks
            </a>
          </li>
          <li className="main-list">
            <a className="main-link" href="/Tips">
              Tips
            </a>
          </li>
        </ul>
      </header>
    </div>
  )
}

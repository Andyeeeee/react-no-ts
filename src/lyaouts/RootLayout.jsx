import { NavLink, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <div className="RootLayout">
      <header>
        <nav>
          <h1>Jobarouter</h1>
          <NavLink to="/">page1</NavLink>
          <NavLink to="page2">page2</NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>

    </div>

  )
}
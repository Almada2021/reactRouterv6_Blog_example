import { Link, Outlet,useNavigate } from "react-router-dom";
import "./Header.css";
export default function Header() {
  const navigate = useNavigate()
  return (
    <header className="App__header">
      <h1 className="App__header-h1" onClick={() => navigate('/')}>Almada Blogs</h1>
      <nav className="App__header-nav">
        <Link to="/home" className="App__header-nav-link">
          Home
        </Link>
        <Link to="/blog" className="App__header-nav-link">
          Blog
        </Link>
        <Link to="/about-me" className="App__header-nav-link">
          About me
        </Link>
      </nav>
      <Outlet />
    </header>
  );
}

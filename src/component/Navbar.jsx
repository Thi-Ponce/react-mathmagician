import { Link } from 'react-router-dom';

const NavBar = () => (
  <header>
    <h1>Math Magicians</h1>
    <nav className="nav-bar">
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/calculator">Calculator</Link>
        </li>
        <li>
          <Link to="/quote">Quote</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default NavBar;

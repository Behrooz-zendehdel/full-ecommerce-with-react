import { Link } from "react-router-dom";
import "./navigation.css";
const Navigation = () => {
  return (
    <header className="mainNavigation">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
        </ul>
        <div>logo</div>
      </nav>
    </header>
  );
};

export default Navigation;

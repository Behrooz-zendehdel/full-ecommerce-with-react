import { Link } from "react-router-dom";
import { useCart } from "../../Providers/CartProvider";
import "./navigation.css";
const Navigation = () => {
  const { cart } = useCart();
  return (
    <header className="mainNavigation">
      <nav>
        <ul>
          <li>
            <Link to="/" className="activeTab">
              Home
            </Link>
          </li>
          <li className="cartLink">
            <Link to="/cart">Cart</Link>
            <span>{cart.length}</span>
          </li>
        </ul>
        <div>logo</div>
      </nav>
    </header>
  );
};

export default Navigation;

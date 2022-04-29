import "./App.css";
import HomePage from "./Pages/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CartPage from "./Pages/CartPage";
import CartProvider from "./Providers/CartProvider";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CheckoutPage from "./Pages/CheckoutPage";
import LoginPage from "./Pages/LoginPage";
import SignupPage from "./Pages/SignupPage";

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <ToastContainer />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;

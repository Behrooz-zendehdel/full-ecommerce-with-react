import Layout from "../Layout/Layout";
import { useCart } from "../Providers/CartProvider";

const CartPage = () => {
  const { cart } = useCart();
  if (!cart.length)
    return (
      <main>
        <h2>cart is empty !</h2>
      </main>
    );

  return (
    <Layout>
      <main></main>
    </Layout>
  );
};

export default CartPage;

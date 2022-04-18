import Layout from "../Layout/Layout";
import * as data from "../data/data";

const HomePage = () => {
  const addProductHandler = (product) => {
    console.log(product);
  };
  return (
    <Layout>
      <main className="container">
        <section className="productList">
          {data.products.map((product) => {
            return (
              <section className="product">
                <div className="productImg">
                  <img src={product.image} alt={product.name}></img>
                </div>
                <div className="productDesc">
                  <p>{product.name}</p>
                  <p>$ {product.price}</p>
                  <button className="btn primary" onClick={() => addProductHandler(product)}>
                    add to cart
                  </button>
                </div>
              </section>
            );
          })}
        </section>
      </main>
    </Layout>
  );
};

export default HomePage;

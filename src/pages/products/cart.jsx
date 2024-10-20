import Footer from "../../components/footer";
import Navbar from "../../components/navbar";

function Cart() {
  return (
    <>
      <Navbar />
      <section className="cart">
        <h2>Cart Items</h2>
        <div className="cart-items">
          <div className="cart-item">
            <img src="https://via.placeholder.com/80" alt="Product Image" />
            <div className="item-details">
              <p>Product 1</p>
              <p>Quantity: 1</p>
            </div>
            <div className="item-price">$25.99</div>
          </div>
          <div className="cart-item">
            <img src="https://via.placeholder.com/80" alt="Product Image" />
            <div className="item-details">
              <p>Product 2</p>
              <p>Quantity: 2</p>
            </div>
            <div className="item-price">$10.99</div>
          </div>
        </div>
        <div className="cart-summary">
          <h3>Cart Summary</h3>
          <p>Total Items: 3</p>
          <p>Total Price: $47.97</p>
          <button className="checkout-btn">Proceed to Checkout</button>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Cart;

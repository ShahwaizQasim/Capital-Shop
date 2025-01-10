import { useContext, useEffect } from "react";
import Footer from "../../components/footer";
import Navbar from "../../components/navbar";
import { CartContext } from "../../context/CartContext";
import { Button, Image } from "antd";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import Aos from "aos";
import "aos/dist/aos.css";
import { Link, useParams } from "react-router-dom";

function Cart() {

  const {
    cartItems,
    removeItemFromCart,
    AddItemToCart,
    LessItemQuantityFromCart,
  } = useContext(CartContext);

  useEffect(() => {
    Aos.init();
  }, []);

  const totalAmount = cartItems.reduce(
    (total, obj) => total + obj.quantity * obj.Product_Price,
    0
  );
  const totalQuantity = cartItems.reduce(
    (total, obj) => total + obj.quantity,
    0
  );
  console.log(cartItems);


  return (
    <>
      <Navbar />
      <div className="container-fluid mt-5 mb-5">
        <h2 className="cartItems_Head">Cart Items</h2>
        <div className="carts-container m-auto">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 pb-3">
              <div
                className="cart_dis"
                data-aos="fade-right"
                data-aos-duration="1000"
              >
                <h4
                  className="text-center pt-3"
                  style={{
                    fontFamily: "poppins",
                  }}
                >
                  Total Quantity
                </h4>
                <h4
                  className="text-center pt-1"
                  style={{
                    fontFamily: "poppins",
                  }}
                >
                  {totalQuantity}
                </h4>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 pb-3">
              <div
                className="cart_dis"
                data-aos="fade-left"
                data-aos-duration="1000"
              >
                <h4
                  className="text-center pt-3 "
                  style={{
                    fontFamily: "poppins",
                  }}
                >
                  Total Amount
                </h4>
                <h4
                  className="text-center pt-1"
                  style={{
                    fontFamily: "poppins",
                  }}
                >
                  ${Math.round(totalAmount)}
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="cart">
        <div className="cart-items">
          {cartItems.map((data) => (
            <div
              className="cart-item"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <Image
                width={200}
                src={data.Product_Picture}
              />
              {/* <img src={data?.Product_Picture} alt="Product Image" /> */}
              <div className="item-details">
                <h4
                  style={{
                    fontFamily: "poppins",
                  }}
                >{`${data?.Product_Name} (${data?.Product_Categories})`}</h4>
                <p
                  style={{
                    fontFamily: "poppins",
                  }}
                >
                  {data.Product_Description}
                </p>
                <div>
                  <Button
                    onClick={() => AddItemToCart(data)}
                    icon={<PlusOutlined />}
                  ></Button>
                  <span className="p-3">{data?.quantity}</span>{" "}
                  <Button
                    onClick={() => LessItemQuantityFromCart(data.id)}
                    icon={<MinusOutlined />}
                    disabled={data.quantity === 1}
                  ></Button>
                </div>
                <Button
                  color="danger"
                  variant="solid"
                  onClick={() => removeItemFromCart(data.id)}
                  className="mt-4"
                >
                  Remove Item
                </Button>
                <Link to={`/orderNow/${data.id}`}>
                  <Button
                    color="danger"
                    variant="solid"
                    style={{
                      fontFamily: 'poppins',
                      marginLeft: '10px'
                    }}
                    className="mt-4"
                  >
                    Order Now
                  </Button>
                </Link>
              </div>
              <div className="item-price" style={{ fontFamily: "poppins" }}>
                ${data?.Product_Price}
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Cart;

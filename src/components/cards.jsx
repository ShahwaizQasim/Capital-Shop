import { Link, Navigate, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { Button } from "antd";
import { useContext, useEffect } from "react";
import { CartContext } from "../context/CartContext";
import { AuthContext } from "../context/AuthContext";
import Aos from "aos";
import "aos/dist/aos.css";

function Cards({ data }) {
  const { cartItems, AddItemToCart, isItemAdded } = useContext(CartContext);
  const [user, setUser] = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    Product_Description,
    Product_Name,
    Product_Picture,
    Product_Categories,
    id,
  } = data;

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div
        className="col-lg-4 col-md-6 col-sm-12"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <div className="pro_dis">
          <div className="pro-img">
            <img src={Product_Picture} alt="Product Picture" />
          </div>
          <div className="pro_desc">
            <h6>{Product_Categories}</h6>
            <h3>{Product_Name}</h3>
            <p style={{
              paddingRight: '4px',
            }}>{Product_Description?.slice(0, 140)}</p>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginRight: "15px",
                marginBottom: "10px",
              }}
            >
              <Link to={`/ProductDetail/${id}`} className="productDetail_Link">
                View Detail <FontAwesomeIcon icon={faArrowRight} />
              </Link>
              <Button
                color="default"
                variant="solid"
                onClick={() => AddItemToCart(data)}
              >
                {isItemAdded(data.id)
                  ? `Added (${isItemAdded(data.id).quantity})`
                  : "Add To Cart"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;

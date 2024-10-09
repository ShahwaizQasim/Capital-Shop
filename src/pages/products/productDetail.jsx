import { message } from "antd";
import { doc, getDoc } from "firebase/firestore";
import { useContext, useEffect, useState } from "react";
import { db } from "../../utils/firebase";
import { useParams } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar, faCartShopping } from "@fortawesome/free-solid-svg-icons";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import Spinner from "../../components/loading";
import { AuthContext } from "../../context/AuthContext";

function ProductDetail() {
  const { id } = useParams();
  console.log("id", id);

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  const { user } = useContext(AuthContext);
  console.log("User", user);

  useEffect(() => {
    getProductsDetail();
  }, []);

  const getProductsDetail = async () => {
    try {
      setLoading(true);
      const docRef = doc(db, "products", id);
      const productInfo = await getDoc(docRef);
      let productFetch = productInfo.data();
      setProduct({ ...productFetch });
      console.log("product", product);
      setLoading(false);
    } catch (error) {
      message.error(error.message);
      setLoading(false);
    }

    // const currentProducts = products.find((data) => console.log(data))
    // console.log('currentProducts', currentProducts);
  };

  return (
    <>
      {loading ? (
        <Spinner />
      ) : (
        <div className="container">
          <div className="row productDetail-cont">
            <div className="col-lg-5">
              <div className="productDetail-dis1">
                <img src={product?.Product_Picture} alt="Product_Picture" />
              </div>
            </div>
            <div className="col-lg-6">
              <div className="productDetail-dis">
                <h4>{product?.Product_Categories}</h4>
                <h2>{product?.Product_Name}</h2>
                <div className="iconsReview">
                  <div className="icons">
                    <FontAwesomeIcon icon={faStar} className="icon" />
                    <FontAwesomeIcon icon={faStar} className="icon" />
                    <FontAwesomeIcon icon={faStar} className="icon" />
                    <FontAwesomeIcon icon={faStar} className="icon" />
                    <FontAwesomeIcon icon={faStar} className="icon" />
                    <span>reviews</span>
                    <p>|</p>
                  </div>
                  <div className="review">
                    <FontAwesomeIcon icon={faFacebook} className="reviewIcon" />
                    <FontAwesomeIcon icon={faTwitter} className="reviewIcon" />
                    <FontAwesomeIcon
                      icon={faInstagram}
                      className="reviewIcon"
                    />
                  </div>
                </div>
                <h5>{product?.Product_Description}</h5>
                <hr
                  style={{
                    marginTop: "30px",
                    color: "#ccc",
                  }}
                />
                <div className="price-Con">
                  <div>
                    <h5
                      style={{
                        fontWeight: "600",
                        fontSize: "1.4rem",
                        fontFamily: "poppins",
                        paddingTop: "5px",
                      }}
                    >
                      Price: ${product?.Product_Price}
                    </h5>
                  </div>
                  <div>
                    <button className="button">
                      Add to Cart <FontAwesomeIcon icon={faCartShopping} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetail;
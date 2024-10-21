import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../utils/firebase";
import Cards from "./cards";
import { message } from "antd";
import Aos from "aos";
import "aos/dist/aos.css";

function DynamicProduct() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    Aos.init();
  }, []);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const productCollection = collection(db, "products");
      const que = query(
        productCollection,
        orderBy("createdAt", "desc"),
        limit(6)
      );
      const docs = await getDocs(que);
      const arr = [];
      docs.forEach((product) => {
        return arr.push({ ...product.data(), id: product.id });
      });

      setProduct([...arr]);
    } catch (error) {
      message.error(error.message);
    }
  };

  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div
            className="col-lg-6 col-md-6 col-sm-12 mt-5 dynamicProduct1"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h2 className="hdg mt-5 fw-bold">Product Upload</h2>
          </div>
          <div
            className="col-lg-6 col-md-6 col-sm-12 mt-5"
            data-aos="fade-left"
            data-aos-duration="1000"
            style={{
              height: "100px",
              position: "relative",
            }}
          >
            <Link to="/addProduct" className="text-decoration-none text-white">
              <button
                className="button dynamicProduct2 mt-5"
                style={{
                  position: "absolute",
                  right: 0,
                }}
              >
                Add Product
              </button>
            </Link>
          </div>
        </div>
        <div className="row mt-5  allProducts">
          {product.map((productData) => {
            return <Cards key={productData.id} data={productData} />;
          })}
        </div>
      </div>
    </>
  );
}

export default DynamicProduct;

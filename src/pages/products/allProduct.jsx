import { useEffect, useState } from "react";
import { db } from "../../utils/firebase";
import {
  collection,
  getDoc,
  getDocs,
  orderBy,
  query,
} from "firebase/firestore";
import Navbar from "../../components/navbar";
import Footer from "../../components/footer";
import Cards from "../../components/cards";
import { Skeleton } from "antd";
import Spinner from "../../components/loading";

function AllProducts() {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const ProCollection = collection(db, "products");
      const q = query(ProCollection, orderBy("createdAt", "desc"));
      const arr = [];
      setLoading(true);
      const docs = await getDocs(q);
      docs.forEach((allProducts) => {
        return arr.push({ ...allProducts.data(), id: allProducts.id });
      });
      setProduct([...arr]);
      console.log("product", product);
      setLoading(false);
    } catch (error) {
      console.log("error", error);
    }
  };
  return (
    <>
      <Navbar />
      <div
        className="container-fluid"
        style={{
          borderTop: "1px solid #ccc",
        }}
      >
        <div className="container">
          <h1
            className="text-center pt-5 mb-5"
            style={{
              fontFamily: "poppins",
            }}
          >
            All Products
          </h1>

          <div className="row mt-5">
            {product.map((productData) =>
              loading ? (
                <h2 className="text-center" style={{ fontFamily: "poppins" }}>
                  Loading...
                </h2>
              ) : (
                <Cards key={productData.id} data={productData} />
              )
            )}
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default AllProducts;

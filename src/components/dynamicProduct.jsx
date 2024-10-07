import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { db } from "../utils/firebase";
import Cards from "./cards";

function DynamicProduct() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      const productCollection = collection(db, "products");
      // const que = query(
      //   productCollection,
      //   orderBy("createdAt", "desc"),
      //   limit(3)
      // );
      const docs = await getDocs(productCollection);
      const arr = [];
      docs.forEach((product) => {
        return arr.push({ ...product.data(), id: product.id });
      });
      setProduct([...arr]);
      console.log("Products", arr);
    } catch (error) {
      console.log("Error", error);
    }
  };

  return (
    <>
      <div className="container mt-5 mb-5">
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-4 mt-5">
            <h2 className="hdg mt-5 fw-bold">Product Upload</h2>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-8 mt-5">
            <Link to="/addProduct" className="text-decoration-none text-white">
              <button
                className="button mt-5"
                style={{ marginLeft: "70%", width: "170px" }}
              >
                Add Product
              </button>
            </Link>
          </div>
        </div>
        <div className="row mt-5  allProducts"> 
          {
            product.map((productData)=> {
              return <Cards key={productData.id} data={productData} />
            })
          }
          </div>
         
        </div>
    </>
  );
}

export default DynamicProduct;

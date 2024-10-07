import { message } from "antd";
import { collection, getDocs } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../utils/firebase";
import { useParams } from "react-router";

function ProductDetail() {

    const{id}= useParams();
    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProductsDetail();
      }, []);
    
      const getProductsDetail = async () => {
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
          setProducts([...arr]);
          console.log("Products", arr);
        } catch (error) {
          message.error(error.message)
        }
        console.log('products', products);
        
      };

  return (
    <>
      <div className="container">
        <div className="row productDetail-cont">
            <div className="col-lg-4">
                <div className="productDetail-dis1">
                    <img src={products?.Product_Picture} alt="" />
                </div>
            </div>
            <div className="col-lg-6">
            <div className="productDetail-dis">
  <h2></h2>
            </div>

            </div>
        </div>
      </div>
    </>
  );
}

export default ProductDetail;

import { message } from "antd";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../utils/firebase";
import { useParams } from "react-router";
import Spinner from "../../components/loading";

function ProductDetail() {
  const { id } = useParams();
  console.log("id", id);

  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProductsDetail();
  }, []);

  const getProductsDetail = async () => {
    try {
      setLoading(true);
      const docRef = doc(db, "products", id);
      const productInfo = await getDoc(docRef);
      let productFetch = productInfo.data();
      setProduct({...productFetch})
      console.log("product", product);
      setLoading(false)
    } catch (error) {
      message.error(error.message);
      setLoading(false)
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
            <div className="col-lg-4">
              <div className="productDetail-dis1">
                {/* <img src={product?.Product_Picture} alt="" /> */}
              </div>
            </div>
            <div className="col-lg-6">
              <div className="productDetail-dis">
                {/* <h2>{products?.Product_Name}</h2> */}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetail;

import { useEffect, useState } from "react";
import { db } from "../../utils/firebase";
import { getDoc } from "firebase/firestore";

function AllProducts() {
  const [product, setProduct] = useState();
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProducts();
  }, []);

  const getProducts = async () => {
    try {
      setLoading(true);
      const docRef = (db, "products");
      const allProducts = await getDoc(docRef);
      const AllProducts_Fetch = allProducts.data();
      console.log("allProductsFetch", AllProducts_Fetch);
      setProduct({ ...AllProducts_Fetch });

    } catch (error) {
      console.log("error", error);
    } finally {
      setLoading(false);
    }
  };
  return <></>;
}

export default AllProducts;

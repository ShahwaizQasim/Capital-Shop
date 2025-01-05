import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../utils/firebase";

function UserProducts() {

  const [getProducts, setGetProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    productsGet()
  }, [])

  const productsGet = async () => {
    try {
      const ProductsCollection = collection(db, "products");
      const q = query(ProductsCollection, orderBy("createdAt", "desc"))
      const arr = [];
      setLoading(true);
      const QuerySnapshot = await getDocs(q);
      QuerySnapshot.forEach((products) => {
        return arr.push({ ...products.data(), id: products.id });
      });
      setGetProducts([...arr])
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  }
  console.log('getProducts', getProducts);

  return (
    <section id="products-section" className="section">
      <h2 style={{
        fontFamily: 'poppins',
        marginTop: "50px"
      }}>Manage Products</h2>
      <table style={{
        marginTop: "40px"
      }}>
        <thead>
          <tr style={{
            fontFamily: 'poppins',
          }}>
            <th>Products Name</th>
            <th>Categories</th>
            <th>Price</th>
            <th>Status</th>
            <th>Products Pictures</th>
          </tr>
        </thead>
        <tbody>
          {
            getProducts.map((products) => {
              return <tr id={products?.id} style={{
                fontFamily: 'poppins',
              }}>
                <td>{products?.Product_Name}</td>
                <td>{products?.Product_Categories}</td>
                <td>${products.Product_Price}</td>
                <td>{products?.status}</td>
                <td><img src={products.Product_Picture} alt="products_pictures" height={50} width={50} /></td>
              </tr>
            })
          }
        </tbody>
      </table>
    </section>
  );
}
export default UserProducts;

import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../utils/firebase";

function Dashboard() {

  const [getUser, setGetUser] = useState([]);
  const [getProducts, setGetProducts] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    UsersGet()
    productsGet()
  }, [])

  const UsersGet = async () => {
    try {
      const UserCollection = collection(db, 'Users');
      const q = query(UserCollection)
      const arr = [];
      setLoading(true);
      const docs = await getDocs(q);
      docs.docs.forEach((users) => {
        return arr.push({ ...users.data(), id: users.id });
      });
      setGetUser([...arr]);
    } catch (error) {
      console.log("error in adminPanel", error);
    } finally {
      setLoading(false)
    }
  }

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
  console.log('getProducts', getProducts.length);

  return (
    (<section id="dashboard-section" className="dashboard h-[100vh]">
      <div className="card-container flex justify-center" style={{
        display: 'flex',
        justifyContent: 'space-around',
      }}>
        <div className="card">
          <h3>Total Users</h3>
          <p>{getUser.length}</p>
        </div>
        <div className="card">
          <h3>Total Products</h3>
          <p>{getProducts.length}</p>
        </div>
        <div className="card">
          <h3>Total Orders</h3>
          <p>1,540</p>
        </div>
      </div>
    </section>)

  );
}
export default Dashboard;

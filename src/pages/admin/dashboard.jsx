import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../utils/firebase";

function Dashboard() {

  const [getUser, setGetUser] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    GetUsers()
  }, [])

  const GetUsers = async () => {
    try {
      const UserCollection = collection(db, 'Users');
      const q = query(UserCollection, orderBy('createdAt', "desc"));
      const arr = [];
      setLoading(true);
      const docs = await getDocs(q);
      
      docs.forEach((doc) => {
        console.log(doc.id, " => ", doc.data());
      })
      console.log('arr', arr);
      setGetUser(arr);
      
    } catch (error) {
      console.log("error in adminPanel", error);
    }finally{
      setLoading(false)
    }
    console.log("Get User=>", getUser);
  }
  return (
    <section id="dashboard-section" className="dashboard">
      <div className="card-container flex justify-center" style={{
        border: '2px solid red',
        display: 'flex',
        justifyContent: 'space-around'
      }}>
        <div className="card">
          <h3>Total Users</h3>
          <p>1,024</p>
        </div>
        <div className="card">
          <h3>Total Products</h3>
          <p>256</p>
        </div>
        <div className="card">
          <h3>Total Orders</h3>
          <p>1,540</p>
        </div>
      </div>
    </section>
  );
}
export default Dashboard;

import { useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Dashboard from "./dashboard";
import { message } from "antd";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../utils/firebase";

function AdminPanel() {

  const [Admin, setAdmin] = useState([]);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    getAdminData();
  }, [])

  const getAdminData = async () => {
    setLoading(true)
    try {
      const OrdersCollection = collection(db, "AdminUsers");
      const q = query(OrdersCollection);
      const arr = [];
      const AdminQuerySnap = await getDocs(q);
      console.log("AdminQuerySnap", AdminQuerySnap);
      AdminQuerySnap.docs.map((adminData) => {
        arr.push({ ...adminData.data() });
      })
      setAdmin(arr)
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false)
    }
  }
  return (
    <div className="admin-panel">
      {/* Sidebar */}
      <nav className="sidebar">
        <div className="sidebar-header">
          <h4 style={{
            fontFamily: 'poppins'
          }}>Admin Panel</h4>
        </div>
        <ul className="nav-links">
          <li>
            <Link to={'/adminPanel/dashboard'} style={{
              fontFamily: 'poppins'
            }}>Dashboard</Link>
          </li>
          <li>
            <Link to={'/adminPanel/viewUsers'} style={{
              fontFamily: 'poppins'
            }}>Users</Link>
          </li>
          <li>
            <Link to={'/adminPanel/viewProducts'} style={{
              fontFamily: 'poppins'
            }}>Products</Link>
          </li>
          <li>
            <Link to={'/adminPanel/viewOrders'} style={{
              fontFamily: 'poppins'
            }}>Orders</Link>
          </li>
        </ul>
      </nav>
      {/* Main Content */}
      <div className="main-content">
        {/* Top Navbar */}
        <header className="navbar">
          <h1 style={{
            fontFamily: 'poppins'
          }}>
            <img
              src="https://preview.colorlib.com/theme/capitalshop/assets/img/logo/logo.png.webp"
              alt="Logo"
            />
          </h1>
          <div className="profile">
            {
              Admin.map((data) => {
                console.log("data", data);
                return <>
                  <img src={data.User_Image} alt="Profile Picture" />
                  <span style={{
                    fontFamily: 'poppins',
                    fontWeight: 'bold'
                  }}>{data.User_Name}</span>
                </>
              })
            }
          </div>
        </header>
        <Outlet />
      </div>
    </div>

  );
}

export default AdminPanel;

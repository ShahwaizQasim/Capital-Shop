import { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import Dashboard from "./dashboard";
import { Avatar, message } from "antd";
import { collection, getDocs, query } from "firebase/firestore";
import { db } from "../../utils/firebase";
import { AdminContext } from "../../context/AdminContext";
import {
  LogoutOutlined
} from "@ant-design/icons";

function AdminPanel() {

  const [AdminData] = useContext(AdminContext);
  console.log("AdminData2", AdminData);

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

            <img src={AdminData?.AdminInfo?.User_Image} alt="Profile Picture" />
            <span style={{
              fontFamily: 'poppins',
              fontWeight: 'bold'
            }}>{AdminData?.AdminInfo?.User_Name}</span>


            


          </div>
        </header>
        <Outlet />
      </div>
    </div>

  );
}

export default AdminPanel;

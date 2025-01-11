import { useContext, useEffect } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function AdminPanel() {
  const [user] = useContext(AuthContext);

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
            <img src={user.userInfo.UserPhoto} alt="Profile Picture" />
            <span style={{
              fontFamily: 'poppins',
              fontWeight: 'bold'
            }}>Shahwaiz Qasim</span>
          </div>
        </header>
        <Outlet />
      </div>
    </div>

  );
}

export default AdminPanel;

import { useContext } from "react";
import { Link, Outlet } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

function AdminPanel() {
const {user} = useContext(AuthContext);
console.log(user);


  return (
    <div className="admin-panel">
  {/* Sidebar */}
  <nav className="sidebar">
    <div className="sidebar-header">
      <h2>Admin Panel</h2>
    </div>
    <ul className="nav-links">
      <li>
        <Link to={'/adminPanel/dashboard'}>Dashboard</Link>
      </li>
      <li>
      <Link to={'/adminPanel/viewUsers'}>Users</Link>
      </li>
      <li>
      <Link to={'/adminPanel/viewProducts'}>Products</Link>
      </li>
      <li>
      <Link to={'/adminPanel/viewOrders'}>Orders</Link>
      </li>
      <li>
        <a href="#settings-section">Settings</a>
      </li>
    </ul>
  </nav>
  {/* Main Content */}
  <div className="main-content">
    {/* Top Navbar */}
    <header className="navbar">
      <h1>Admin Dashboard</h1>
      <div className="profile">
        <img src="https://via.placeholder.com/40" alt="Profile Picture" />
        <span>Admin Name</span>
      </div>
    </header>
    <Outlet />
   

   
  </div>
</div>

  );
}

export default AdminPanel;

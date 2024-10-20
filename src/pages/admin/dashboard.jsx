function Dashboard() {
  return (
    <section id="dashboard-section" className="dashboard">
      <h2>Dashboard Overview</h2>
      <div className="card-container">
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

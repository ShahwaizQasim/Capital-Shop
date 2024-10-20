
function ViewOrders(){
    return(
        <>
        <section id="orders-section" className="section">
        <h2>Manage Orders</h2>
        <table>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Total</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>501</td>
              <td>John Doe</td>
              <td>$50.00</td>
              <td>Completed</td>
              <td>
                <button>View</button>
              </td>
            </tr>
            <tr>
              <td>502</td>
              <td>Jane Smith</td>
              <td>$75.00</td>
              <td>Pending</td>
              <td>
                <button>View</button>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
      <section id="settings-section" className="section">
        <h2>System Settings</h2>
        <p>Modify system settings here...</p>
      </section>
      </>
    )
}
export default ViewOrders;
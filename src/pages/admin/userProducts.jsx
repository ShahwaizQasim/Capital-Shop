function UserProducts() {
  return (
    <section id="products-section" className="section">
      <h2>Manage Products</h2>
      <table>
        <thead>
          <tr>
            <th>Product ID</th>
            <th>Name</th>
            <th>Price</th>
            <th>Stock</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>101</td>
            <td>Product 1</td>
            <td>$25.99</td>
            <td>100</td>
            <td>
              <button>Edit</button> <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>102</td>
            <td>Product 2</td>
            <td>$19.99</td>
            <td>200</td>
            <td>
              <button>Edit</button> <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}
export default UserProducts;

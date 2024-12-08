function ViewUsers() {
  return (
    <section id="users-section" className="section">
      <h2>Manage Users</h2>
      <table>
        <thead>
          <tr>
            <th>User ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>johndoe@example.com</td>
            <td>Admin</td>
            <td>
              <button>Edit</button> <button>Delete</button>
            </td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jane Smith</td>
            <td>janesmith@example.com</td>
            <td>User</td>
            <td>
              <button>Edit</button> <button>Delete</button>
            </td>
          </tr>
        </tbody>
      </table>
    </section>
  )
}

export default ViewUsers;
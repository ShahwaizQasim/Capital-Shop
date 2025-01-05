import React from 'react'

function TableRaw({ users }) {
  const { User_Name, User_Email } = users;
  return (
    <tr style={{
      fontFamily:'poppins'
    }}>
      <td>{User_Name}</td>
      <td>{User_Email}</td>
      <td>User</td>
      <td>
        <button>Edit</button> <button>Delete</button>
      </td>
    </tr>
  )
}

export default TableRaw
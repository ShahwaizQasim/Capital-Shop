import { collection, getDocs, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../utils/firebase";
import TableRaw from "../../components/tablerRaw";

function ViewUsers() {

  const [getUser, setGetUser] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    UsersGet()
  }, [])

  const UsersGet = async () => {
    try {
      const UserCollection = collection(db, 'Users');
      const q = query(UserCollection)
      const arr = [];
      setLoading(true);
      const docs = await getDocs(q);
      docs.docs.forEach((users) => {
        return arr.push({ ...users.data(), id: users.id });
      });
      setGetUser([...arr]);
    } catch (error) {
      console.log("error in viewUsers", error);
    } finally {
      setLoading(false)
    }
  }

  console.log("getUser", getUser);

  return (
    <section id="users-section" className="section">
      <h2 style={{
        fontFamily: 'poppins',
        marginTop: '50px'
      }}>Manage Users</h2>
      <table className="mt-5">
        <thead>
          <tr style={{
            fontFamily: 'poppins'
          }}>
            <th>User ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Role</th>
          </tr>
        </thead>
        <tbody>
          {
            getUser.map((users) => {
              console.log("users", users);
              return <TableRaw id={users.id} users={users} />
            })
          }
        </tbody>
      </table>
    </section>
  )
}

export default ViewUsers;
import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../utils/firebase";

function ViewOrders() {

  const [loading, setLoading] = useState();

  useEffect(() => {
    getOrders();
  }, [])

  const getOrders = async () => {
    try {
      const OrderCollection = collection(db, "orders");
      const q = query(OrderCollection, orderBy("createdAt", "desc"));
      const arr = [];
      const UsersOrdersGet = await getDocs(q);
      UsersOrdersGet.forEach((data) => {
        return arr.push({ ...data.data(), Users: data.id })
      })
      console.log(UsersOrdersGet);
      console.log('arr', arr);


    } catch (error) {
      console.log(error);
    }
  }


  return (
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
    </>
  )
}
export default ViewOrders;
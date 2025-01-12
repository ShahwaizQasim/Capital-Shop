import { collection, getDocs, orderBy, query } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../utils/firebase";
import { Image } from "antd";

function ViewOrders() {

  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getOrders();
  }, [])

  const getOrders = async () => {
    try {
      setLoading(true)
      const OrderCollection = collection(db, "orders");
      const q = query(OrderCollection, orderBy("createdAt", "desc"));
      const arr = [];
      const UsersOrdersGet = await getDocs(q);
      UsersOrdersGet.forEach((data) => {
        return arr.push({ ...data.data(), Users: data.id })
      })
      setOrders([...arr]);
      console.log('orders', orders);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }


  return (
    <>
      <section id="orders-section" className="section">
        <h2 style={{
          fontFamily: 'poppins',
          marginTop: '70px'
        }}>Manage Orders</h2>
        <table style={{
          fontFamily: 'poppins',
          marginTop: '40px'
        }}>
          <thead>
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Email</th>
              <th>Shipping Address</th>
              <th>Order Picture</th>
            </tr>
          </thead>
          <tbody>
            {
              orders.map((data) => {
                console.log("data", data);

                return <tr id={data.id}>
                  <td>{data?.productId}</td>
                  <td>{data?.FullName}</td>
                  <td>{data?.Email}</td>
                  <td>{data?.Address}</td>
                  <td>
                    <td>
                      <Image
                        width={50}
                        height={50}
                        src={data.ProductImage}
                      />
                    </td>
                  </td>
                </tr>
              })
            }
          </tbody>
        </table>
      </section>
    </>
  )
}
export default ViewOrders;
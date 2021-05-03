import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';

const Orders = () => {

      const [orders,setOrders] = useState([]);

      useEffect(()=>{
            fetch('https://rabeya-food-fitness.herokuapp.com/orders')
            .then(res=>res.json())
            .then(data=>setOrders(data))
      },[])

      return (
            <div className='d-flex bg-dark'>
                  <div className="col-md-3">
                        <Sidebar />
                  </div>
                  <div className="col-md-9 d-flex">
                        <div className="col-md-9">
                              <h1 className='text-center text-white mt-5'>Orders List</h1>
                              <table class="table table-striped">
                                          <thead>
                                                <tr>
                                                      <th class='text-white'>Name</th>
                                                      <th class='text-white'>Email</th>
                                                      <th class='text-white'>Product</th>
                                                      <th class='text-white'>Price</th>
                                                      <th class='text-white'>Address</th>
                                                      <th class='text-white'>Phone</th>
                                                      <th class='text-white'>Payment Id</th>
                                                      <th class='text-white'>Order Time</th>
                                                </tr>

                                          </thead>
                                          <tbody>
                                                {orders.map(orders =>
                                                      <tr className="table-light">
                                                            <td className="table-light">{orders.name}</td>
                                                            <td className="table-light">{orders.email}</td>
                                                            <td className="table-light">{orders.products.item.name}</td>
                                                            <td className="table-light">{orders.products.item.price}</td>
                                                            <td className="table-light">{orders.shipment.address}</td>
                                                            <td className="table-light">{orders.shipment.phone}</td>
                                                            <td className="table-light">{orders.paymentId}</td>
                                                            <td className="table-light">{orders.orderTime}</td>
                                                            {/* <button onClick={() => deleteProduct(food._id)} className='btn btn-outline-danger mx-1 mt-1'>Remove</button> */}
                                                      </tr>
                                                )}
                                          </tbody>
                                    </table>
                        </div>
                  </div>
            </div>
      );
};

export default Orders;
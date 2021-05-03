import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';

const Checkout = () => {
      const { register, handleSubmit, watch, formState: { errors } } = useForm();
      // eslint-disable-next-line
      const [loggedInUser, setLoggedInUser] = useContext(UserContext);
      // eslint-disable-next-line
      const [shippingData, setShippingData] = useState(null);

      const { id } = useParams();
      const [item, setItem] = useState([]);

      useEffect(() => {
            fetch(`https://rabeya-food-fitness.herokuapp.com/foods/` + id)
                  .then(res => res.json())
                  .then(data => setItem(data))
      }, [id])

      const onSubmit = data => {
            setShippingData(data);
      };

      const handlePaymentSuccess = paymentId => {
            const savedCart = { item }
            const orderDetails = {
                  ...loggedInUser,
                  products: savedCart,
                  shipment: shippingData,
                  paymentId,
                  orderTime: new Date()
            };

            fetch('https://rabeya-food-fitness.herokuapp.com/addOrders', {
                  method: 'POST',
                  headers: {
                        'Content-Type': 'application/json'
                  },
                  body: JSON.stringify(orderDetails)
            })
                  .then(res => res.json())
                  .then(data => {
                        if (data) {
                              // alert('your order placed successfully');
                        }
                  })
      }

      console.log(watch("example"));



      return (
            <div className="mb-5">
                  <h1 className='text-center text-info mt-1'>Checkout Now</h1>

                  <div className='container d-flex'>

                        <div className="col-md-6">
                              <img class="img-fluid mx-auto d-block" width={200} src={item.imageURL} alt="" />
                              <h4 class="text-center">{item.name}</h4>
                              <h3 class="text-center">${item.price}</h3>
                        </div>

                        <div className="col-md-6">
                              <p class='mt-5 text-danger fs-4 text-center'>Kindly Complete Your Information</p>
                              <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                                    <input className='form-control p-3 mt-3' defaultValue={loggedInUser.name} {...register("name", { required: true })} placeholder='Your Name' autoComplete='off' />
                                    {errors.name && <span class='text-danger'>*This field is required</span>}

                                    <input className='form-control p-3 mt-3' defaultValue={loggedInUser.email} {...register("email", { required: true })} placeholder='Enter email' autoComplete='off' />
                                    {errors.email && <span class='text-danger'>*This field is required</span>}

                                    <input className='form-control p-3 mt-3' {...register("address", { required: true })} placeholder='Enter Address' autoComplete='off' />
                                    {errors.address && <span class='text-danger'>*This field is required</span>}

                                    <input className='form-control p-3 mt-3' {...register("phone", { required: true })} placeholder='Phone Number' autoComplete='off' />
                                    {errors.phone && <span class='text-danger'>*This field is required</span>}

                                    {/* <input className='btn btn-info mt-2' type="submit" /> */}
                                    <button onClick={()=>alert("Information Submitted. Please Pay Now")} className='btn btn-info mt-2' type="submit">Submit Information</button>
                              </form>
                              <small>After the submitting the information, please proceed to payment</small>
                        </div>

                  </div>
                  <div className="container mt-5">
                        <ProcessPayment handlePayment={handlePaymentSuccess}></ProcessPayment>
                  </div>
            </div>
      );
};

export default Checkout;
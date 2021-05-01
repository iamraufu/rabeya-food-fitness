import React, { useContext, useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router';
import { UserContext } from '../../App';
import ProcessPayment from '../ProcessPayment/ProcessPayment';

const Checkout = () => {
      const { register, handleSubmit, formState: { errors } } = useForm();
      // eslint-disable-next-line
      const [loggedInUser, setLoggedInUser] = useContext(UserContext);
      // eslint-disable-next-line
      const [shippingData, setShippingData] = useState(null);

      const onSubmit = data => {
            setShippingData(data);
      };

      const { id } = useParams();
      const [item, setItem] = useState([]);

      useEffect(() => {
            fetch(`http://localhost:5000/foods/` + id)
                  .then(res => res.json())
                  .then(data => setItem(data))
      }, [id])

      return (
            <div className="mb-5">
                  <h1 className='text-center text-info mt-5'>Checkout Now</h1>

                  <div className='container d-flex'>

                        <div className="col-md-6">
                              <img class="img-fluid mx-auto d-block" width={200} src={item.imageURL} alt="" />
                              <h4 class="text-center">{item.name}</h4>
                              <h3 class="text-center">${item.price}</h3>
                        </div>

                        <div className="col-md-6 d-flex">
                              <ProcessPayment />
                        </div>

                  </div>
                  <div className="container mt-5">
                  <p class='mt-5 text-danger fs-4 text-center'>Give your information so that we can deliver product to you</p>
                        <form className="ship-form" onSubmit={handleSubmit(onSubmit)}>
                              <input className='form-control p-3 mt-3' {...register("name", { required: true })} placeholder='Your Name' autoComplete='off' />
                              {errors.name && <span class='text-danger'>*This field is required</span>}

                              <input className='form-control p-3 mt-3' {...register("email", { required: true })} placeholder='Enter email' autoComplete='off' />
                              {errors.email && <span class='text-danger'>*This field is required</span>}

                              <input className='form-control p-3 mt-3' {...register("address", { required: true })} placeholder='Enter Home Address' autoComplete='off' />
                              {errors.address && <span class='text-danger'>*This field is required</span>}

                              <input className='form-control p-3 mt-3' {...register("phone", { required: true })} placeholder='Phone Number' autoComplete='off' />
                              {errors.phone && <span class='text-danger'>*This field is required</span>}

                              <input className='btn btn-info mt-5' type="submit" />
                        </form>
                  </div>
            </div>
      );
};

export default Checkout;
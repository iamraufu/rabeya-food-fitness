import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { useForm } from "react-hook-form";

const AddAdmin = () => {
      const { register, handleSubmit, formState: { errors } } = useForm();

      const onSubmit = data => {

            fetch('https://rabeya-food-fitness.herokuapp.com/addAdmin', {
                  method: 'POST',
                  headers: { 'Content-Type': 'application/json' },
                  body: JSON.stringify({ email: data.email })
            })
            alert("Admin Added");
            window.location.href = "/addAdmin";
      }

      const [admin, setAdmin] = useState([]);
      useEffect(() => {
            fetch('https://rabeya-food-fitness.herokuapp.com/admins')
                  .then(res => res.json())
                  .then(data => setAdmin(data))
      }, [])

      return (
            <div className='bg-dark d-flex'>
                  <div className="col-md-3">
                        <Sidebar />
                  </div>
                  <div className="col-md-9">
                        <h1 className='text-white text-center mt-5'>Add Admin</h1>
                        <div className="container mt-5">
                              <div className="col-md-6">

                                    <form onSubmit={handleSubmit(onSubmit)}>
                                          <input className='form-control' {...register("email", { required: true })} placeholder='Enter email' autoComplete='off' />

                                          {errors.email && <span class='text-danger'>*This field is required</span>}
                                          <br />
                                          <input className='btn btn-primary mt-3' type="submit" />
                                    </form>
                              </div>
                        </div>
                        <h3 className='text-white text-center mt-5'>Admins are as Follows:</h3>
                        <div className="container">
                              <table class="table table-striped">
                                    <thead>
                                          <tr>
                                                <th class='text-white'>Email</th>
                                          </tr>

                                    </thead>
                                    {     admin.length ?
                                          <tbody>
                                          {admin.map(ad =>
                                               
                                                <tr className="table-light">
                                                     
                                                                  <td className="table-light">{ad.email}</td> 
                                                                  
                                                    
                                                </tr>
                                          )}
                                    </tbody>: <h5 className='text-center text-danger fw-bold mt-5'>No Admin Found in Database!</h5>
                                    }
                              </table>
                        </div>
                  </div>
            </div>
      );
};

export default AddAdmin;
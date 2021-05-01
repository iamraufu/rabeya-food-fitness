import React, { useEffect, useState } from 'react';
import Sidebar from '../Sidebar/Sidebar';
import axios from 'axios';
import { useForm } from "react-hook-form";

const Products = () => {
      const { register, handleSubmit, formState: { errors } } = useForm();
      const [imageURL, setIMageURL] = useState(null);

      const onSubmit = data => {
            console.log(data);
            const foodData = {
                  name: data.name,
                  price: data.price,
                  imageURL: imageURL
            };
            const url = `http://localhost:5000/addFoods`;

            fetch(url, {
                  method: 'POST',
                  headers: {
                        'content-type': 'application/json'
                  },
                  body: JSON.stringify(foodData)
            })
                  .then(res => console.log('server side response', res))

            alert('New Food Added!')
            window.location.href = "/";
      };

      const handleImageUpload = event => {
            console.log(event.target.files[0])
            const imageData = new FormData();
            imageData.set('key', '5cefbb444c23d3daef1b910f94e2524d');
            imageData.append('image', event.target.files[0]);

            axios.post('https://api.imgbb.com/1/upload',
                  imageData)
                  .then(function (response) {
                        setIMageURL(response.data.data.display_url);
                  })
                  .catch(function (error) {
                        console.log(error);
                  });

      };

      const [foods, setFoods] = useState([]);

      useEffect(() => {
            fetch("http://localhost:5000/foods")
                  .then(res => res.json())
                  .then(data => setFoods(data));
      }, [])

      const deleteProduct = (id) => {

            fetch(`http://localhost:5000/delete/${id}`, {
                  method: 'DELETE'
            })
                  .then(res => res.json())
                  .then(result => {
                        if (result) {
                              alert("Service Deleted Successfully")
                              window.location.href = "/";

                        }
                  })
      }

      return (
            <div className='d-flex bg-dark'>
                  <div className="col-md-3">
                        <Sidebar />
                  </div>
                  <div className="col-md-9">
                        <h1 className='text-white text-center mt-5'>Products</h1>
                        <div className="container">
                              <div className="col-md-12">
                                    <h2 className='text-white text-center mt-5'>Add New Product</h2>
                                    <form onSubmit={handleSubmit(onSubmit)}>
                                          <div className="d-flex">
                                                <input className='form-control' {...register("name", { required: true })} placeholder='Enter Food Name' autoComplete='off' />

                                                {errors.name && <span class='text-danger px-3'>*required</span>}

                                                <input className='form-control mx-3' {...register("price", { required: true })} placeholder='Enter Price' autoComplete='off' />

                                                {errors.price && <span class='text-danger'>*required</span>}
                                          </div>
                                          <input className='form-control mt-3' {...register("fileRequired", { required: true })} type='file' onChange={handleImageUpload} />

                                          {errors.file && <span class='text-danger px-3'>*required</span>}

                                          <input className='btn btn-primary mt-3' type="submit" />
                                    </form>
                              </div>

                              <div className="container height: 100px;">
                                    <h2 className='text-white text-center mt-5'>List of All Products</h2>

                                    <table class="table table-striped">
                                          <thead>
                                                <tr>
                                                      <th class='text-white'>Products</th>
                                                      <th class='text-white'>Price</th>
                                                </tr>

                                          </thead>
                                          <tbody>
                                                {foods.map(food =>
                                                      <tr className="table-light">
                                                            <td className="table-light">{food.name}</td>
                                                            <td className="table-light">{food.price}</td>
                                                            <button onClick={() => deleteProduct(food._id)} className='btn btn-outline-danger mx-1 mt-1'>Remove</button>
                                                      </tr>
                                                )}
                                          </tbody>
                                    </table>
                              </div>
                        </div>

                  </div>
            </div>

      );
};

export default Products;
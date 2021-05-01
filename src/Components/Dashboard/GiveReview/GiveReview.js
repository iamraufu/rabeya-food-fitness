import React, { useState } from 'react';
import axios from 'axios';
import { useForm } from "react-hook-form";
import Sidebar from '../Sidebar/Sidebar';

const GiveReview = () => {
      const { register, handleSubmit, formState: {errors} } = useForm();
      const [imageURL, setIMageURL] = useState(null);

      const onSubmit = data => {
            
            const reviewData = {
                  name: data.name,
                  designation: data.designation,
                  quote: data.quote,
                  imageURL: imageURL
            };
            const url = `http://localhost:5000/addReview`;

            fetch(url, {
                  method: 'POST',
                  headers: {
                        'content-type': 'application/json'
                  },
                  body: JSON.stringify(reviewData)
            })
                  .then(res => console.log('server side response', res))

            alert('Review Added!')
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
      return (
            <div className='d-flex bg-dark'>
                  <div className="col-md-3">
                        <Sidebar/>
                  </div>
                  <div className="col-md-9">
                        <h1 className='text-white text-center mt-5'>Give your Valuable Feedback Here</h1>
                        <div className="container">

                        <form className='mt-5' onSubmit={handleSubmit(onSubmit)}>
                              <div className="d-flex">
                                    <input className='form-control' {...register("name", { required: true })} placeholder='Your Name' />

                                    {errors.name && <span class='text-danger px-3'>*required</span>}

                                    <input className='form-control mx-3' {...register("designation", { required: true })} placeholder='Designation' />

                                    {errors.designation && <span class='text-danger'>*required</span>} 
                               </div> 
                              <input className='form-control mt-5 p-5' {...register("quote", { required: true })} placeholder='Quote' />

                              {errors.quote && <span class='text-danger'>*required</span>}
                              <input className='form-control mt-5' {...register("fileRequired", { required: true })} type='file' onChange={handleImageUpload} />

                              {errors.file && <span class='text-danger px-3'>*required</span>}

                              <input className='btn btn-primary mt-5' type="submit" />
                        </form>

                  </div>
                  </div>
            </div>
      );
};

export default GiveReview;
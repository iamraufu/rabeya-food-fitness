import React from 'react';
import { Link } from 'react-router-dom';

const Food2 = () => {
      return (
            <div className='container mt-5'>
                  <div className="d-flex">
                        <div className="col-md-6 mt-5">
                              <h1 className='mt-5'>Salmon with Vegetables</h1>
                              <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam vel facilis earum optio est praesentium iste aliquam obcaecati totam repellendus!</p>
                              <h6 className="fw-bold">Energy: <span style={{ color: 'red' }}>290 kCal</span></h6>
                              <h6 className="fw-bold">Protein: <span style={{ color: '#8ec038' }}>26g</span></h6>
                              <h6 className="fw-bold">Fat: <span style={{ color: '#8ec038' }}>8g</span></h6>
                              <h6 className="fw-bold">Carbohydrates: <span style={{ color: '#8ec038' }}>49g</span></h6>
                              <h4 className="fw-bold mt-5" style={{ color: 'red' }}>$11.99</h4>
                              <div className="d-flex mt-5">
                                    <Link className='' to='/'><button className='btn btn-read btn-brand text-white fw-bold'>Read More</button></Link>
                                    <Link className='ps-5' to='/'><button className='btn btn-view btn-brand text-white fw-bold'>Read More</button></Link>
                              </div>
                        </div>
                        <div style={{height:'100px'}} className="col-md-6">
                              <img className='img-fluid food' width={800} src="http://fitmeal.like-themes.com/wp-content/uploads/2018/02/dish_02-1.jpg" alt="" />
                        </div>
                  </div>

            </div>
      );
};

export default Food2;
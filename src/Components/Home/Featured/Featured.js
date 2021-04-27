import { faMobile, faStopwatch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import girl from '../../../images/2.jpg';
import {Link} from 'react-router-dom';
const Featured = () => {
      return (
            <div className="container">
                  <div className='d-flex row'>
                        <div className="col-md-6 mt-5">
                              <img src={girl} className='img-fluid' style={{ borderRadius: '5%' }} alt="" />
                        </div>
                        <div className="col-md-6 my-auto">
                              <h1 className='mt-5'>Healthy and Tasty foods with <br /><span>natural ingredients</span></h1>
                              <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi quae nesciunt quisquam dolorem minus dolor sequi ratione officia fuga quaerat.</p>
                              <div className="d-flex mt-5">
                                    <FontAwesomeIcon className='' style={{ color: '#8ec038', fontSize: '3em' }} icon={faStopwatch} />
                                    <h5 className='mt-3 ps-3'>Everyday from 8:00am to 11:59pm</h5>
                              </div>
                              <div className="d-flex mt-5">
                                    <FontAwesomeIcon className='ms-2' style={{ color: '#8ec038', fontSize: '3em' }} icon={faMobile} />
                                    <h5 className='mt-3 ps-3'>+8801611404405</h5>
                              </div>
                              <Link className='mt-5' to='/appointment'><button className='btn btn-read btn-brand text-white fw-bold mt-5'>Read more</button></Link>
                        </div>
                  </div>
            </div>
      );
};

export default Featured;
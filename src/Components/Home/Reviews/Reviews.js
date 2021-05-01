import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

import { useSpring, animated } from 'react-spring';
const calc = (x, y) => [-(y - window.innerHeight / 2) / 20, (x - window.innerWidth / 2) / 20, 1.1]
const trans = (x, y, s) => `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`

const Reviews = () => {
      const [props, set] = useSpring(() => ({ xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } }))

      const [review,setReview] = useState([]);

      useEffect(()=>{
            fetch('http://localhost:5000/reviews')
            .then(res=>res.json())
            .then(data=>setReview(data))
      },[])
      
      return (
            <section className='mt-5'>
                  <h1 style={{ color: '#2cb978' }} className='fw-bold text-center mt-5'>What Our Clients Say</h1>
                  <div className="container d-flex flex-wrap mt-3">
                        {
                              review.map(rd =>
                                    <animated.div
                                    class="col-md-4 mt-5 p-5"
                                    onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
                                    onMouseLeave={() => set({ xys: [0, 0, 1] })}
                                    style={{ transform: props.xys.interpolate(trans) }}
                                    >
                                          <div className="reviews-card col-md-12 mt-5">

                                                <img style={{ borderRadius: "50%" }} className='img-fluid mx-auto d-block' src={rd.imageURL} alt="" />
                                                <div className="position-relative">
                                                      <div className="position-absolute top-50 start-50 translate-middle mt-4">
                                                            <FontAwesomeIcon className="text-center" icon={faStar} style={{ color: "goldenrod" }} />
                                                            <FontAwesomeIcon className="text-center" icon={faStar} style={{ color: "goldenrod" }} />
                                                            <FontAwesomeIcon className="text-center" icon={faStar} style={{ color: "goldenrod" }} />
                                                            <FontAwesomeIcon className="text-center" icon={faStar} style={{ color: "goldenrod" }} />
                                                            <FontAwesomeIcon className="text-center" icon={faStar} style={{ color: "goldenrod" }} />
                                                      </div>
                                                </div>

                                                <h3 className='fw-bold text-center mt-5'>{rd.name}</h3>
                                                <h6 className='fw-bold text-center'>{rd.designation}</h6>
                                                <p className='fw-bold text-center'>{rd.quote}</p>
                                          </div>
                                          </animated.div>
                              )
                        }

                  </div>
            </section>
      );
};

export default Reviews;
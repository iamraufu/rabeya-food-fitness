import './Menu.css';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router';

const Menu = () => {
      const history = useHistory();
      const [food, setFood] = useState([]);

      useEffect(() => {
            fetch('https://rabeya-food-fitness.herokuapp.com/foods')
                  .then(res => res.json())
                  .then(data => setFood(data))
      }, [])

      const handleClick = id => {
            history.push(`/foods/${id}`)
      }

      return (
            <section className='container mt-5'>
                  <h1 style={{ color: '#2cb978' }} className='fw-bold text-center'>Popular Dishes</h1>
                  <div className="d-flex flex-wrap">
                        {
                              food.map(md =>
                                    <div className="menu col-md-4 mt-5">
                                          <img src={md.imageURL} alt="" />
                                          <h3 className='fw-bold text-center'>{md.name}</h3>
                                          <h5 className='fw-bold text-center text-danger'>Price: ${md.price}</h5>
                                          <div className="position-relative mt-5">
                                                <div className="position-absolute top-50 start-50 translate-middle">
                                                      <button onClick={()=>handleClick(md._id)} className='btn btn-read btn-brand text-white fw-bold mt-5'>Add to Cart</button>
                                                </div>
                                          </div>
                                    </div>
                              )
                        }
                  </div>
            </section>
      );
};

export default Menu;
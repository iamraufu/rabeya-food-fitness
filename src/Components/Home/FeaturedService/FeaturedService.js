import { faBox, faMugHot, faShoppingBasket, faUtensils } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const featuredData = [
      {
            title:'Only natural food',
            icon:faShoppingBasket
      },
      {
            title:'Various dishes',
            icon:faUtensils
      },
      {
            title:'Handy packaging',
            icon:faBox
      },
      {
            title:'No frying',
            icon:faMugHot
      }
]
const FeaturedService = () => {
      return (
            <section style={{backgroundColor:'#f3f5ed'}} className='mt-5'>
                  <div className="container mt-5">
                        <h1 style={{color:'#2cb978'}} className='text-center fw-bold mt-5'>Our Services</h1>
                        <div className="d-flex flex-wrap">
                              {
                                    featuredData.map(fd=>
                                          <div className="col ms-5">
                                                <FontAwesomeIcon className='info-icon mt-4 ms-5' style={{color:'#8ec038'}} icon={fd.icon} />
                                                <h5 className="mt-5 fw-bold">{fd.title}</h5>
                                                <p style={{fontSize:'14px'}} className='text-muted mt-3 '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates, veritatis.</p>
                                          </div>
                                          )
                              }
                        </div>
                  </div>
            </section>
      );
};

export default FeaturedService;
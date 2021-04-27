import './Menu.css';
import React from 'react';
import { Link } from 'react-router-dom';

const menuData = [
      {
            name:'Chicken with Vegetables',
            price:12.99,
            img:"http://fitmeal.like-themes.com/wp-content/uploads/2018/02/dish_07-1-360x360.jpg"
      },
      {
            name:'Grilled Chicken Breast',
            price:9.49,
            img:"http://fitmeal.like-themes.com/wp-content/uploads/2018/02/dish_08-1-360x360.jpg"
      },
      {
            name:'Salad with Mozarella',
            price:8.99,
            img:"http://fitmeal.like-themes.com/wp-content/uploads/2018/02/dish_03-1-360x360.jpg"
      },
      {
            name:'Red beetroot soup',
            price:7.49,
            img:"http://fitmeal.like-themes.com/wp-content/uploads/2018/02/dish_04-1-360x360.jpg"
      },
      {
            name:'Steaks with Asparagus',
            price:10,
            img:"http://fitmeal.like-themes.com/wp-content/uploads/2018/02/dish_05-1-360x360.jpg"
      },
      {
            name:'Tender rabbit soup',
            price:6.49,
            img:"http://fitmeal.like-themes.com/wp-content/uploads/2018/02/dish_06-1-360x360.jpg"
      }
]
const Menu = () => {
      return (
            <section className='container mt-5'>
                  <h1 style={{color:'#2cb978'}} className='fw-bold text-center'>Popular Dishes</h1>
                  <div className="d-flex flex-wrap">
                  {
                        menuData.map(md=>
                              <div className="menu col-md-4 mt-5">
                                    <img src={md.img} alt=""/>
                                    <h3 className='fw-bold text-center'>{md.name}</h3>
                                    <p className='fw-bold text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aspernatur, nihil.</p>
                                    <h5 className='fw-bold text-center text-danger'>Price: ${md.price}</h5>
                                    <div className="position-relative mt-5">
                                          <div className="position-absolute top-50 start-50 translate-middle">
                                    <Link className='mt-5' to='/appointment'><button className='btn btn-read btn-brand text-white fw-bold'>Add to Cart</button></Link>
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
import './HeaderMain.css';
import React from 'react';
import { Link } from 'react-router-dom';

const HeaderMain = () => {
      return (
            <main style={{ height: '780px' }} className='d-flex align-items-center'>
                  <div className="col-md-4 offset-md-1">
                        <h1 style={{ color: '#2cb978', fontSize: '60px' }} className='fw-bold ps-5'>Organic Food</h1>
                        <h1 style={{ color: '#278ea5', fontSize: '60px' }} className='fw-bold ps-5'>Nutrition Service</h1>
                        <p style={{ color: '#a6fff2' }} className='fw-bold pt-3 ps-5'>Long term good health comes from taking care of yourself long before a crisis develops. Waiting to do something only after the crisis has arrived is commonly called the "band-aid" approach to feeling good.
                        <br />
                              <br />
                        The best way to take back responsibility for your health is to throw away the "band-aid" approach and introduce some prevention. By not relying upon short term fixes for long-term problems, you feel better and are able to enjoy life more. It's your body; it's your health, demand the very best for yourself.
                        </p>
                        <div className="d-flex mt-5">
                              <Link className='ps-5' to='/'><button className='btn btn-read btn-brand text-white fw-bold'>Read more</button></Link>
                              <Link className='ps-5' to='/'><button className='btn btn-view btn-brand text-white fw-bold'>View plans</button></Link>
                        </div>

                  </div>
            </main>
      );
};

export default HeaderMain;
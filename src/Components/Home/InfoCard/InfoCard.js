import React from 'react';
import './InfoCard.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const InfoCard = ({ info }) => {

      return (
            <div className='col-md-4 text-white info-card d-none d-md-block'>
                  <div className={`d-flex justify-content-center info-container info-${info.background} rounded`}>
                        <div className="ms-3">
                              <FontAwesomeIcon className='info-icon mt-2' style={{color:'#8ec038'}} icon={info.icon} />
                        </div>
                        <div className="ms-3">
                              <h6 className='mt-3 ps-5'>{info.title}</h6>
                              <small className='ps-5'>{info.description}</small>
                        </div>
                  </div>
            </div>
      );
};

export default InfoCard;
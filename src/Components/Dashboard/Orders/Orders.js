import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
// import ProcessPayment from '../../ProcessPayment/ProcessPayment';

const Orders = () => {

      return (
            <div className='d-flex bg-light'>
                  <div className="col-md-3">
                        <Sidebar />
                  </div>
                  <div className="col-md-9 d-flex">
                        <div className="col-md-3">
                              {/* <ProcessPayment /> */}
                              
                              
                        </div>
                  </div>
            </div>
      );
};

export default Orders;
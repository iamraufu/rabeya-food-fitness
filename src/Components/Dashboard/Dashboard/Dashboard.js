import { useContext } from 'react';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const Dashboard = () => {
      //eslint-disable-next-line
      const [loggedInUser, setLoggedInUser] = useContext(UserContext);
      return (
            <div className='bg-dark d-flex'>
                  <div className="col-md-3">
                        <Sidebar />
                  </div>
                  <div className="col-md-6">
                        <h1 className='text-center text-danger mt-5'>Welcome to Dashboard</h1>
                  </div>
                  <div className="col-md-3 mt-5">
                        <img src={loggedInUser.photo} style={{ borderRadius: '50%', border: '3px solid tomato' }} className='img-fluid' alt="" />
                        <h5 className='text-white mt-5'>{loggedInUser.name}</h5>
                  </div>
            </div>
      );
};

export default Dashboard;
import React from 'react';
import Navbar from '../Shared/Navbar/Navbar';
import VideoPlayer from './VideoPlayer';
import Options from './Options';
import Notifications from './Notifications';

const Consultation = () => {
      return (
            <div className='bg-dark' style={{ height: "100vh" }}>
                  <Navbar />
                  <h1 className='text-center text-info pt-5'>One to one Consultation will be live here</h1>
                  <div className="container mx-auto d-block">
                  <VideoPlayer />
                  <Options>
                        <Notifications />
                  </Options>
                  </div>
            </div>
      );
};

export default Consultation;
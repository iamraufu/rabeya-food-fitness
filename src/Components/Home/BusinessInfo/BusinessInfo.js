import React from 'react';
import InfoCard from '../InfoCard/InfoCard';
import { faClock, faMapMarker, faPhone } from '@fortawesome/free-solid-svg-icons'

const BusinessInfo = () => {

      const informationData = [
            {
                  title: 'Office Hours',
                  description: '24x7 Service Available',
                  icon: faClock,
                  background: 'primary'
            },
            {
                  title: 'Appointment Location',
                  description: '465 Hatirjheel, Rampura, Dhaka',
                  icon: faMapMarker,
                  background: 'dark'
            },
            {
                  title: 'Contact Us',
                  description: '+8801611404405',
                  icon: faPhone,
                  background: 'primary'
            }
      ];

      return (
            <section className='d-flex justify-content-center'>
                  <div className="w-75 row">
                        {
                              informationData.map(info => <InfoCard info={info}></InfoCard>)
                        }
                  </div>
            </section>
      );
};

export default BusinessInfo;
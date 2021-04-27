import './Header.css';
import React from 'react';
import BusinessInfo from '../BusinessInfo/BusinessInfo';
import HeaderMain from '../HeaderMain/HeaderMain';

const Header = () => {
      return (
            <main className='header-container'>
                  <HeaderMain />
                  <BusinessInfo />
            </main>
      );
};

export default Header;
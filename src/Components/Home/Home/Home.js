import React from 'react';
import Header from '../Header/Header';
import Navbar from '../../Shared/Navbar/Navbar';
import Footer from '../../Shared/Footer/Footer';
import Featured from '../Featured/Featured';
import FeaturedService from '../FeaturedService/FeaturedService';
import Food1 from '../Food1/Food1';
import Food2 from '../Food2/Food2';
import Menu from '../Menu/Menu';
import Reviews from '../Reviews/Reviews';

const Home = () => {
      return (
            <div>
                  <Navbar />
                  <Header />
                  <Featured />
                  <FeaturedService />
                  <Food1 />
                  <Food2 />
                  <Menu />
                  <Reviews />
                  <Footer />
            </div>
      );
};

export default Home;
import './Navbar.css';
import React from 'react';
import logo from "../../../images/logo.png";

const Navbar = () => {
      return (
            <nav style={{backgroundColor:'#086972'}} class="navbar navbar-expand-lg navbar-light">
                  <div class="container">
                        <a class="navbar-brand d-flex text-white ms-5" href="/">
                        <img className='img-fluid' src={logo} alt="logo" width={40}/><span style={{color:'#071e3d'}} className='ms-2 fw-bold'> Rabeya's Food & Fitness</span></a>

                        <button class="navbar-toggler custom-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                              <span style={{backgroundImage:"url(data:image/svg+xml;charset=utf8,%3Csvg viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath stroke='rgba(255,102,203, 0.5)' stroke-width='2' stroke-linecap='round' stroke-miterlimit='10' d='M4 8h24M4 16h24M4 24h24'/%3E%3C/svg%3E)"}} class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarSupportedContent">
                              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                                    <li class="nav-item text-center">
                                          <a class="nav-link color text-white fw-bold" aria-current="page" href="/">Home</a>
                                    </li>
                                    <li class="nav-item text-center">
                                          <a class="nav-link color text-white fw-bold" aria-current="page" href="/">About us</a>
                                    </li>
                                    <li class="nav-item text-center">
                                          <a class="nav-link color text-white fw-bold" aria-current="page" href="/">Products</a>
                                    </li>
                                    <li class="nav-item text-center">
                                          <a class="nav-link color text-white fw-bold" aria-current="page" href="/">Blog</a>
                                    </li>
                                    <li class="nav-item text-center">
                                          <a class="nav-link color text-white fw-bold" aria-current="page" href="/">Contacts</a>
                                    </li>
                                    <li class="nav-item text-center">
                                          <a class="nav-link text-white fw-bold mx-auto login" aria-current="page" href="/">Login</a>
                                    </li>
                              </ul>
                        </div>

                  </div>
            </nav>
      );
};

export default Navbar;
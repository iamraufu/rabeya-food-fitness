import './Sidebar.css';
import { faFileAlt } from '@fortawesome/free-regular-svg-icons';
import { faCalendarAlt, faGripHorizontal, faHome, faSignOutAlt, faSort, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
      return (
            <div className="sidebar bg-primary d-flex flex-column justify-content-between col-md-6 px-5 py-5" style={{ height: "100vh" }} >
                  <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                        <li class="nav-item text-center">
                              <Link class="nav-link text-dark fw-bold mt-5" aria-current="page" to="/dashboard"><FontAwesomeIcon icon={faGripHorizontal} /> Dashboard</Link>
                        </li>
                        <li class="nav-item text-center">
                              <Link class="nav-link text-dark fw-bold mt-5" aria-current="page" to="/"><FontAwesomeIcon icon={faHome} /> Home</Link>
                        </li>
                        <li class="nav-item text-center">
                              <Link class="nav-link text-dark fw-bold mt-5" aria-current="page" to="/orders"><FontAwesomeIcon icon={faCalendarAlt} /> Orders</Link>
                        </li>
                        <li class="nav-item text-center">
                              <Link class="nav-link text-dark fw-bold mt-5" aria-current="page" to="/addAdmin"><FontAwesomeIcon icon={faUserPlus} /> Add Admin</Link>
                        </li>
                        <li class="nav-item text-center">
                              <Link class="nav-link text-dark fw-bold mt-5" aria-current="page" to="/productsList"><FontAwesomeIcon icon={faFileAlt} /> Products List</Link>
                        </li>
                        <li class="nav-item text-center">
                              <Link class="nav-link text-dark fw-bold mt-5" aria-current="page" to="/feedback"><FontAwesomeIcon icon={faSort} /> Review</Link>
                        </li>

                  </ul>
                  <div>
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                              <li class="nav-item text-center">
                                    <Link className="nav-link text-dark fw-bold" to='/'><FontAwesomeIcon icon={faSignOutAlt} /> Logout</Link>
                              </li>
                        </ul>
                  </div>

            </div>
      );
};

export default Sidebar;
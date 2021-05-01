import React, { useState } from 'react';
import { useContext } from 'react';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router-dom';
// eslint-disable-next-line
import { initializeLoginFramework, handleGoogleSignIn, handleSignOut, handleFbSignIn, createUserWithEmailAndPassword, signInWithEmailAndPassword } from './loginManager';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import Navbar from '../../Shared/Navbar/Navbar';
import food from '../../../images/4.jpg';
// import logo from '../../../images/logo.png';

function Login() {
      // eslint-disable-next-line
      const [user, setUser] = useState({
            isSignedIn: false,
            name: '',
            email: '',
            password: '',
            photo: ''
      });

      initializeLoginFramework();
      // eslint-disable-next-line
      const [loggedInUser, setLoggedInUser] = useContext(UserContext);
      const history = useHistory();
      const location = useLocation();
      let { from } = location.state || { from: { pathname: "/" } };

      const googleSignIn = () => {
            handleGoogleSignIn()
                  .then(res => {
                        handleResponse(res, true);
                  })
      }

      const handleResponse = (res, redirect) => {
            setUser(res);
            setLoggedInUser(res);
            if (redirect) {
                  history.replace(from);
            }
      }
      
      // const [newUser, setNewUser] = useState(false);
      // const [user, setUser] = useContext(UserContext);

      // initializeLoginFramework();
      // // eslint-disable-next-line
      // const [loggedInUser, setLoggedInUser] = useContext(UserContext);
      // const history = useHistory();
      // const location = useLocation();
      // let { from } = location.state || { from: { pathname: "/" } };

      // const googleSignIn = () => {
      //       handleGoogleSignIn()
      //             .then(res => {
      //                   handleResponse(res, true);
      //             })
      // }

      // const fbSignIn = () => {
      //       handleFbSignIn()
      //             .then(res => {
      //                   handleResponse(res, true);
      //             })

      // }

      // const signOut = () => {
      //       handleSignOut()
      //             .then(res => {
      //                   handleResponse(res, false);
      //             })
      // }

      // const handleResponse = (res, redirect) => {
      //       setUser(res);
      //       setLoggedInUser(res);
      //       if (redirect) {
      //             history.replace(from);
      //       }
      // }

      // const handleBlur = (e) => {
      //       let isFieldValid = true;
      //       if (e.target.name === 'email') {
      //             isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
      //       }
      //       if (e.target.name === 'password') {
      //             const isPasswordValid = e.target.value.length > 6;
      //             const passwordHasNumber = /\d{1}/.test(e.target.value);
      //             isFieldValid = isPasswordValid && passwordHasNumber;
      //       }
      //       if (isFieldValid) {
      //             const newUserInfo = { ...user };
      //             newUserInfo[e.target.name] = e.target.value;
      //             setUser(newUserInfo);
      //       }
      // }
      // const handleSubmit = (e) => {
      //       if (newUser && user.email && user.password) {
      //             createUserWithEmailAndPassword(user.name, user.email, user.password)
      //                   .then(res => {
      //                         handleResponse(res, true);
      //                   })
      //       }

      //       if (!newUser && user.email && user.password) {
      //             signInWithEmailAndPassword(user.email, user.password)
      //                   .then(res => {
      //                         handleResponse(res, true);
      //                   })
      //       }
      //       e.preventDefault();
      // }

      return (
            <div className="">
                  <Navbar />
                  <div className="container">
                                    <h1 className='text-center mt-5 text-warning'>To Proceed You Need To Sign In</h1>
                        <div className="d-flex">
                              <a className='mx-auto d-block float-middle' href="/"><img className='img-fluid bg-dark' src='' alt="" /></a>
                        </div>

                        <div className="row d-flex align-items-center mt-5">
                              <div className="col-md-6 col-sm-6 col-12 mt-5 p-4 bg-dark">
                                    <button className="btn btn-success m-2" onClick={googleSignIn}>Google Sign In</button>
                              </div>
                              <div className="col-md-6 col-sm-6 col-12 mt-5">
                                    <img  className='img-fluid mx-auto d-block float-end' src={food} alt="" srcset="" />
                              </div>
                        </div>


                  </div>
            </div>

            // <div>
            //       <Navbar />

            //       <h1 className='text-center text-warning mt-5'>To Proceed You Need To Register/ Sign In</h1>
            //       <div className="container mt-5 d-flex">
            //             <div className='text-center bg-success w-50'>
            //                   {user.isSignedIn ? <button className='btn bg-danger mt-2' onClick={signOut}>Sign Out</button> :
            //                         <button className='btn bg-warning mt-3' onClick={googleSignIn}><FontAwesomeIcon icon={faGoogle} /> Google Sign In</button>
            //                   }
            //                   <br />
            //                   <button className='btn bg-info mt-3' onClick={fbSignIn}><FontAwesomeIcon icon={faFacebook} /> Sign in using Facebook</button>

            //                   <h1 className='mt-4'>Click To Toggle</h1>
            //                   {/* <input type="checkbox" onChange={() => setNewUser(!newUser)} name="newUser" id="" />
            //                   <label className="btn btn-outline-dark mx-3 text-white" htmlFor="newUser">New User Sign up</label> */}
            //                   <button onClick={() => setNewUser(!newUser)} className='btn btn-outline-dark'>{newUser ? 'Sign up' : 'Sign in'}</button>
            //                   <form onSubmit={handleSubmit}>
            //                         {newUser && <input className='form-control mt-2' name="name" type="text" onBlur={handleBlur} placeholder="Your Name" />}
            //                         <br />
            //                         <input className='form-control' type="text" name="email" onBlur={handleBlur} placeholder="Your Email address" required />
            //                         <br />
            //                         <input className='form-control' type="password" name="password" onBlur={handleBlur} placeholder="Your Password" required />
            //                         <br />
            //                         <input className='btn btn-danger mb-2' type="submit" value={newUser ? 'Sign up' : 'Sign in'} />
            //                   </form>

            //             </div>
            //             <div className="col-md-6">
            //                   <img className='img-fluid' src={food} alt="" srcset="" />
            //             </div>

            //       </div>
            //       <p className='text-danger text-center mt-5 fs-3'>{user.error}</p>
            //       {user.success && <p className='text-success fs-3'>User {newUser ? 'Created' : 'Logged In'} Successfully!</p>}
            // </div>
      );
};

export default Login;
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login/Login';
import { createContext, useState } from 'react';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import Menu from './Components/Home/Menu/Menu';
import Reviews from './Components/Home/Reviews/Reviews';
import Consultation from './Components/Consultation/Consultation';
import AddAdmin from './Components/Dashboard/AddAdmin/AddAdmin';
import GiveReview from './Components/Dashboard/GiveReview/GiveReview';
import Orders from './Components/Dashboard/Orders/Orders';
import Products from './Components/Dashboard/Products/Products';
import Checkout from './Components/Checkout/Checkout';

export const UserContext = createContext();

function App() {

  const [loggedInUser, setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>

        <Switch>

          <Route exact path='/'>
            <Home />
          </Route>

          <Route path='/products'>
            <Menu />
          </Route>

          <Route path='/login'>
            <Login />
          </Route>

          <PrivateRoute path='/dashboard'>
            <Dashboard />
          </PrivateRoute>

          <PrivateRoute path='/review'>
            <Reviews />
          </PrivateRoute>

          <PrivateRoute path='/consultation'>
            <Consultation />
          </PrivateRoute>

          <PrivateRoute path='/addAdmin'>
            <AddAdmin />
          </PrivateRoute>

          <PrivateRoute path='/orders'>
            <Orders />
          </PrivateRoute>

          <PrivateRoute path='/productsList'>
            <Products />
          </PrivateRoute>

          <PrivateRoute path='/foods/:id'>
            <Checkout />
          </PrivateRoute>

          <PrivateRoute path='/feedback'>
            <GiveReview />
          </PrivateRoute>
          
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
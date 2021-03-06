import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router';
import { UserContext } from '../../../App';

const PrivateRoute = ({children,...rest}) => {
  // eslint-disable-next-line
      const [loggedInUser,setLoggedInUser] = useContext(UserContext)
      return (
            <Route
      {...rest}
      render={({ location }) =>
      loggedInUser.email || sessionStorage.getItem('token')? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
      );
};

export default PrivateRoute;
import React, { useContext } from 'react';
import { UserContext } from '../../App';
import { Redirect, Route } from 'react-router';

const PrivateRoute = ({ children, ...rest }) => {
    const [loggedInUser] = useContext(UserContext);
    return (
        <Route {...rest}
            render={({ location }) => loggedInUser.success ? (children) : (
                <Redirect to={{
                    pathname: "/login",
                    state: {
                        from: location
                    }
                }}
                />
            )
            }
        />
    );
};

export default PrivateRoute;
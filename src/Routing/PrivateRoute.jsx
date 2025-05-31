import React from 'react';
import { use } from 'react';
import { AuthContext } from '../Context/AuthContext';

const PrivateRoute = ({children}) => {
    const {user}=use(AuthContext);
    if(!user){
        return <Nevigate to={"/login"}></Nevigate>
    }
    return children;
};

export default PrivateRoute;
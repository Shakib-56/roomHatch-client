import React from 'react';
import { use } from 'react';
import { AuthContext } from '../Context/AuthContext';
import { Navigate } from 'react-router';
import Loaders from '../Components/Loaders/Loaders';

const PrivateRoute = ({children}) => {
    const {user,loading}=use(AuthContext);
    if(loading){
        return <Loaders></Loaders>
    }
    if(!user){
        return <Navigate to={"/login"}></Navigate>
    }
    return children;
};

export default PrivateRoute;
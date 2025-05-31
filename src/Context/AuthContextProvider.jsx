import React from 'react';
import { AuthContext } from './AuthContext';

const AuthContextProvider = ({children}) => {
    return (
        <AuthContext>
            {children}
        </AuthContext>
    );
};

export default AuthContextProvider;
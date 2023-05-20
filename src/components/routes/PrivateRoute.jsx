import React, { useContext } from 'react';
import { AuthContext } from '../../providers/AuthProvider2';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const location = useLocation()

    const { user, loading } = useContext(AuthContext)

    if (loading) {
        return <progress className="progress w-56 text-white bg-red-500"></progress>
    }
    if (user?.email) {
        return children;
    }
    return <Navigate state={{ from: location }} to="/login" replace></Navigate>

};

export default PrivateRoute;
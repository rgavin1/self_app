import React from 'react';
import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoutes: React.FC<{ token: string }> = ({ token }) => {
    return !!token ? <Outlet /> : <Navigate to="/login" />;
}

export default ProtectedRoutes;
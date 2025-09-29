import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoutes = () =>{
    const user = localStorage.getItem('path')
    return user ? <Outlet /> : <Navigate to="/" />
}
export default ProtectedRoutes;
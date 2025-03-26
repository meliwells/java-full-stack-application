import { Navigate } from "react-router-dom";

export default function AdminRoute () {
    const AdminRoute = ({ children }) => {
        const role = localStorage.getItem("userRole");
        return role === "ADMIN" ? children : <Navigate to="/notAuthorized" />
    };
}
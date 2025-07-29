// src/pages/Login.jsx
import FirebaseAuth from "../components/FirebaseAuth";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function Login() {
    const { user } = useAuth();

    if (user) return <Navigate to="/app/home" replace />;
    return (
        <div>
            <h2>Login</h2>
            <FirebaseAuth />
        </div>
    );
}

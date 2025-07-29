import React, { useState } from "react";
import {
    GoogleAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword,
    signOut
} from "firebase/auth";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

export default function Login() {
    const { user, loading, auth } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");

    const handleLoginGoogle = async () => {
        const provider = new GoogleAuthProvider();
        try {
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.error("Errore login Google:", error);
            setErrorMsg(error.message);
        }
    };

    const handleLoginEmail = async (e) => {
        e.preventDefault();
        setErrorMsg("");
        try {
            await signInWithEmailAndPassword(auth, email, password);
        } catch (error) {
            console.error("Errore login email:", error);
            setErrorMsg(error.message);
        }
    };

    const handleLogout = async () => {
        await signOut(auth);
    };

    if (loading) return <div>Caricamento...</div>;

    if (user) {
        return <Navigate to="/app/home" replace />;
    }

    return (
        <div>
            <h2>Login</h2>

            {errorMsg && <p style={{ color: "red" }}>{errorMsg}</p>}

            <button onClick={handleLoginGoogle}>Accedi con Google</button>

            <hr />

            <form onSubmit={handleLoginEmail}>
                <div>
                    <label>Email:</label><br />
                    <input
                        type="email"
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label><br />
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit">Accedi con Email</button>
            </form>
        </div>
    );
}

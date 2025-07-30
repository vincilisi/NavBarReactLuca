import React, { useState } from "react";
import {
    GoogleAuthProvider,
    signInWithPopup,
    signInWithEmailAndPassword
} from "firebase/auth";
import { useAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import "../pages/css/login.css"
import { FcGoogle } from "react-icons/fc";

export default function Login() {
    const { user, loading, auth } = useAuth();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [showEmailForm, setShowEmailForm] = useState(false);

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

    if (loading) return <div className="login-loading">Caricamento...</div>;

    if (user) {
        return <Navigate to="/app/home" replace />;
    }

    return (
        <div className="login-container">
            <h2 className="login-title">Login</h2>

            {errorMsg && <p className="login-error">{errorMsg}</p>}

            <button className="login-button" onClick={handleLoginGoogle}>
                <FcGoogle />Accedi con Google
            </button>

            <hr className="login-divider" />

            {!showEmailForm && (
                <button
                    className="login-button"
                    onClick={() => setShowEmailForm(true)}
                >
                    Accedi con Email
                </button>
            )}

            {showEmailForm && (
                <div className="login-email-form">
                    <form onSubmit={handleLoginEmail}>
                        <div className="login-field">
                            <label>Email:</label>
                            <input
                                type="email"
                                value={email}
                                onChange={e => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="login-field">
                            <label>Password:</label>
                            <input
                                type="password"
                                value={password}
                                onChange={e => setPassword(e.target.value)}
                                required
                            />
                        </div>
                        <div className="login-actions">
                            <button type="submit" className="login-button">
                                Accedi
                            </button>
                            <button
                                type="button"
                                className="login-button cancel"
                                onClick={() => setShowEmailForm(false)}
                            >
                                Annulla
                            </button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    );
}

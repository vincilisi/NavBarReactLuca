// 📁 src/context/AuthContext.jsx

import { createContext, useContext, useEffect, useState } from "react";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../../firebase-config";

// Crea il contesto
const AuthContext = createContext();

// Provider che avvolge l'app
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const auth = getAuth(app);
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            setUser(user);
            setLoading(false);
        });

        // Cleanup quando il componente viene smontato
        return () => unsubscribe();
    }, []);

    if (loading) {
        return <div>Caricamento in corso...</div>;
    }

    return (
        <AuthContext.Provider value={{ user, loading }
        }>
            {children}
        </AuthContext.Provider>
    );
};

// Hook personalizzato per accedere facilmente al contesto
export const useAuth = () => useContext(AuthContext);

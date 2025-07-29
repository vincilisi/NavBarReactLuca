// src/components/FirebaseAuth.jsx
import { useEffect } from "react";
import { getAuth, GoogleAuthProvider, EmailAuthProvider } from "firebase/auth";
import * as firebaseui from "firebaseui";
import "firebaseui/dist/firebaseui.css";
import app from "../../firebase-config";

export default function FirebaseAuth() {
    useEffect(() => {
        const auth = getAuth(app);
        const ui =
            firebaseui.auth.AuthUI.getInstance() || new firebaseui.auth.AuthUI(auth);

        ui.start("#firebaseui-auth-container", {
            signInOptions: [
                GoogleAuthProvider.PROVIDER_ID,
                EmailAuthProvider.PROVIDER_ID,
            ],
            signInSuccessUrl: "/", // Redirect dopo il login
        });
    }, []);

    return <div id="firebaseui-auth-container"></div>;
}

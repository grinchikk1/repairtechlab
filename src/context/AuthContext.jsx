import React, { useEffect, useState, createContext, useMemo } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebaseConfig";

export const Context = createContext();

export default function AuthContext({ children }) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const userUid = process.env.REACT_APP_FIREBASE_UID_ADMIN;

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setLoading(false);
            if (currentUser) setUser(currentUser);
            else {
                setUser(null);
            }
        });
        return () => {
            if (unsubscribe) unsubscribe();
        };
    }, []);

    const isAdmin = useMemo(
        () => user && user.uid === userUid,
        [user, userUid]
    );

    const contextValue = useMemo(
        () => ({ user, setUser, isAdmin }),
        [user, setUser, isAdmin]
    );

    return (
        <Context.Provider value={contextValue}>
            {!loading && children}
        </Context.Provider>
    );
}

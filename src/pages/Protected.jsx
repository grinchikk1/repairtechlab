import React, { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Context } from "../context/AuthContext";

export default function Protected({ children }) {
    const { user } = useContext(Context);
    if (!user) {
        return <Navigate to="/login" replace />;
    }
    return children;
}

export function AdminRoute({ children }) {
    const { isAdmin } = useContext(Context);

    if (!isAdmin) {
        return <Navigate to="/login" replace />;
    }

    return children;
}

import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import theme from "./GlobalTheme";
import App from "./App";
import AuthContext from "./context/AuthContext";
import "./firebaseConfig";

const root = createRoot(document.getElementById("root"));
root.render(
    <ThemeProvider theme={theme}>
        <AuthContext>
            <Router>
                <App />
            </Router>
        </AuthContext>
    </ThemeProvider>
);

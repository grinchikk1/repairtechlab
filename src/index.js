import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";
import { ThemeProvider } from "@emotion/react";
import { Provider } from "react-redux";
import theme from "./GlobalTheme";
import App from "./App";
import store from "./redux/store/index";
import AuthContext from "./context/AuthContext";
import "./firebaseConfig";

const root = createRoot(document.getElementById("root"));
root.render(
    <Provider store={store}>
        <ThemeProvider theme={theme}>
            <AuthContext>
                <Router>
                    <App />
                </Router>
            </AuthContext>
        </ThemeProvider>
    </Provider>
);

/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useId, useEffect, useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import {
    Box,
    Typography,
    TextField,
    Button,
    IconButton,
    styled,
} from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Context } from "../context/AuthContext";
import { auth } from "../firebaseConfig";
import CustomSnackbar from "../components/CustomSnackBar";

const StyledLink = styled(NavLink)({
    textDecoration: "none",
    color: "rgb(41, 98, 255)",
    marginLeft: "10px",
    borderBottom: "1px solid rgba(41, 98, 255, 0.2)",
    "&:hover": {
        borderColor: "rgb(41, 98, 255)",
    },
    "&.active": {
        borderColor: "rgb(41, 98, 255)",
    },
});

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [titleText, setTitleText] = useState("");
    const [text, setText] = useState("");
    const [severity, setSeverity] = useState("success");

    const [showSnackBar, setShowSnackBar] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const { user } = useContext(Context);

    const navigate = useNavigate();
    const id = useId();

    const handleSignIn = async (event) => {
        event.preventDefault();
        try {
            await signInWithEmailAndPassword(auth, email, password);

            setTitleText("Вітаємо");
            setText("Успішний вхід");
            setSeverity("success");
            setShowSnackBar(true);

            setTimeout(() => {
                navigate("/");
            }, 2000);
        } catch (error) {
            setTitleText("Помилка");
            setText("Ім'я користувача або пароль не вірний");
            setSeverity("error");
            setShowSnackBar(true);
        }
    };

    useEffect(() => {
        if (user) {
            navigate("/profile");
        }
    }, []);

    return (
        <Box
            component="form"
            onSubmit={handleSignIn}
            sx={{
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
                justifyContent: "space-evenly",
                p: 4,
                maxWidth: "480px",
            }}
        >
            <Typography variant="h4" color="secondary">
                Вхід
            </Typography>
            <Typography variant="h6" color="primary" sx={{ pt: 3, pb: 1 }}>
                Email
            </Typography>
            <TextField
                variant="outlined"
                type="email"
                id={`email-${id}`}
                value={email}
                autoComplete="email"
                onChange={(event) => setEmail(event.target.value)}
            />
            <Typography variant="h6" color="primary" sx={{ pt: 3, pb: 1 }}>
                Пароль
            </Typography>
            <TextField
                type={showPassword ? "text" : "password"}
                id={`password-${id}`}
                value={password}
                variant="outlined"
                autoComplete="current-password"
                onChange={(event) => setPassword(event.target.value)}
                InputProps={{
                    endAdornment: (
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? (
                                <VisibilityIcon color="secondary" />
                            ) : (
                                <VisibilityOffIcon color="secondary" />
                            )}
                        </IconButton>
                    ),
                }}
            />
            <Button variant="outlined" type="submit" sx={{ mt: 4, mb: 4 }}>
                Увійти
            </Button>
            <Typography
                variant="body1"
                fontSize={20}
                sx={{ textAlign: "center" }}
            >
                Немає акаунту?
                <StyledLink to="/register">Зареєструватися</StyledLink>
            </Typography>
            <CustomSnackbar
                open={showSnackBar}
                onClose={() => setShowSnackBar(false)}
                titleText={titleText}
                text={text}
                severity={severity}
            />
        </Box>
    );
}

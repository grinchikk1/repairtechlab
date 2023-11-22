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
    fontSize: "18px",
    textDecoration: "none",
    color: "#707070",
    marginLeft: "10px",
    borderBottom: "1px solid transparent",
    "&:hover": {
        borderColor: "#707070",
    },
    "&.active": {
        borderColor: "#707070",
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
                height: "100%",
                pt: 10,
                gap: "15px",
                maxWidth: "600px",
            }}
        >
            <Typography variant="h3" sx={{ textAlign: "center" }}>
                Вхід
            </Typography>
            <TextField
                variant="outlined"
                type="email"
                id={`email-${id}`}
                placeholder="Електронна пошта"
                value={email}
                autoComplete="email"
                sx={{ borderBottom: "1px solid #000" }}
                onChange={(event) => setEmail(event.target.value)}
            />
            <TextField
                type={showPassword ? "text" : "password"}
                id={`password-${id}`}
                placeholder="Пароль"
                value={password}
                variant="outlined"
                autoComplete="current-password"
                sx={{ borderBottom: "1px solid #000" }}
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
            <Button variant="outlined" type="submit">
                Увійти
            </Button>
            <Typography variant="body1" sx={{ textAlign: "center" }}>
                Немає аккаунту?
                <StyledLink to="/register">Зареєструватись</StyledLink>
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

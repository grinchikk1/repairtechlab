/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
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
import { createUser } from "../api/firebaseFetch";
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

export default function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [titleText, setTitleText] = useState("");
    const [text, setText] = useState("");
    const [severity, setSeverity] = useState("success");

    const [showSnackBar, setShowSnackBar] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const { user } = useContext(Context);

    const navigate = useNavigate();

    const handleRegister = async (event) => {
        event.preventDefault();
        try {
            const response = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );
            const data = { email: response.user.email, uid: response.user.uid };
            await createUser(data);

            setTitleText("Вітаємо");
            setText("Успішна реєстрація");
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
            onSubmit={handleRegister}
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
                Реєстрація
            </Typography>
            <Typography variant="h6" color="primary" sx={{ pt: 3, pb: 1 }}>
                Вкажи пошту
            </Typography>
            <TextField
                type="email"
                variant="outlined"
                value={email}
                autoComplete="email"
                onChange={(event) => setEmail(event.target.value)}
            />
            <Typography variant="h6" color="primary" sx={{ pt: 3, pb: 1 }}>
                Придумай пароль
            </Typography>
            <TextField
                type={showPassword ? "text" : "password"}
                // helperText="Please enter your password"
                variant="outlined"
                value={password}
                autoComplete="current-password"
                onChange={(event) => setPassword(event.target.value)}
                InputProps={{
                    endAdornment: React.cloneElement(
                        <IconButton
                            aria-label="toggle password visibility"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? (
                                <VisibilityIcon color="secondary" />
                            ) : (
                                <VisibilityOffIcon color="secondary" />
                            )}
                        </IconButton>,
                        {
                            // Add the style you want to the IconButton
                            style: {
                                // margin: 0, // override the default margin
                                // padding: 0, // override the default padding
                                // width: '24px', // set a fixed width
                                // height: '24px', // set a fixed height
                                // position: 'absolute', // fix the position
                                // top: '50%', // center vertically
                                // left: '50%', // center horizontally
                                // transform: 'translate(-50%, -50%)' // translate to the center
                            },
                        }
                    ),
                }}
            />
            <Button variant="outlined" type="submit" sx={{ mt: 4, mb: 4 }}>
                Зареєструватися
            </Button>
            <Typography
                variant="body1"
                fontSize={20}
                sx={{ textAlign: "center" }}
            >
                Вже маєте акаунт? <StyledLink to="/login">Увійти</StyledLink>
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

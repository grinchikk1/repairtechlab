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
import { useFormik } from "formik";
import * as Yup from "yup";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { createUser } from "../api/firebaseFetch";
import { Context } from "../context/AuthContext";
import { auth } from "../firebaseConfig";
import CustomSnackbar from "../components/CustomSnackBar";

const validationSchema = Yup.object().shape({
    username: Yup.string().required("Поле обовʼязкове"),
    email: Yup.string()
        .email("Не вірний формат пошти")
        .required("Поле обовʼязкове"),
    password: Yup.string()
        .min(7, "Password must be between 7 and 30 characters")
        .max(30, "Password must be between 7 and 30 characters")
        .required("Поле обовʼязкове"),
});

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
    const [titleText, setTitleText] = useState("");
    const [text, setText] = useState("");
    const [severity, setSeverity] = useState("success");

    const [showSnackBar, setShowSnackBar] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const { user } = useContext(Context);

    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            username: "",
            email: "",
            password: "",
        },
        validationSchema,
        onSubmit: async (values, { resetForm }) => {
            try {
                const response = await createUserWithEmailAndPassword(
                    auth,
                    values.email,
                    values.password
                );

                const data = {
                    email: response.user.email,
                    uid: response.user.uid,
                    name: values.username,
                };

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

            resetForm();
        },
    });

    useEffect(() => {
        if (user) {
            navigate("/profile");
        }
    }, []);

    return (
        <Box
            component="form"
            onSubmit={formik.handleSubmit}
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
            <Typography variant="h4" color="secondary" fontWeight="bold">
                Реєстрація
            </Typography>
            <Typography variant="h6" color="primary" sx={{ pt: 3, pb: 1 }}>
                Вкажіть Імʼя
            </Typography>
            <TextField
                type="text"
                variant="outlined"
                name="username"
                value={formik.values.username}
                autoComplete="given-name"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                    (formik.touched.username || formik.submitCount > 0) &&
                    Boolean(formik.errors.username)
                }
                helperText={
                    formik.touched.username || formik.submitCount > 0
                        ? formik.errors.username || "\u200b"
                        : " "
                }
            />
            <Typography variant="h6" color="primary" sx={{ pt: 3, pb: 1 }}>
                Вкажіть Пошту
            </Typography>
            <TextField
                type="email"
                variant="outlined"
                name="email"
                value={formik.values.email}
                autoComplete="email"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                    (formik.touched.email || formik.submitCount > 0) &&
                    Boolean(formik.errors.email)
                }
                helperText={
                    formik.touched.email || formik.submitCount > 0
                        ? formik.errors.email || "\u200b"
                        : " "
                }
            />
            <Typography variant="h6" color="primary" sx={{ pt: 3, pb: 1 }}>
                Придумайте пароль
            </Typography>
            <TextField
                type={showPassword ? "text" : "password"}
                variant="outlined"
                name="password"
                value={formik.values.password}
                autoComplete="current-password"
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={
                    (formik.touched.password || formik.submitCount > 0) &&
                    Boolean(formik.errors.password)
                }
                helperText={
                    formik.touched.password || formik.submitCount > 0
                        ? formik.errors.password || "\u200b"
                        : " "
                }
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
                        </IconButton>
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

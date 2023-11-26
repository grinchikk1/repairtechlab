/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";
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
import { useFormik } from "formik";
import { useDispatch } from "react-redux";
import * as Yup from "yup";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Context } from "../context/AuthContext";
import { auth } from "../firebaseConfig";
import CustomSnackbar from "../components/CustomSnackBar";
import { fetchUser } from "../redux/slice/userSlice";

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .email("Не вірний формат пошти")
        .required("Поле обовʼязкове"),
    password: Yup.string()
        .min(7, "Пароль має містити від 7 до 30 символів")
        .max(30, "Пароль має містити від 7 до 30 символів")
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

export default function Login() {
    const [titleText, setTitleText] = useState("");
    const [text, setText] = useState("");
    const [severity, setSeverity] = useState("success");

    const [showSnackBar, setShowSnackBar] = useState(false);
    const [showPassword, setShowPassword] = useState(false);

    const { user } = useContext(Context);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const formik = useFormik({
        initialValues: {
            email: "",
            password: "",
        },
        validationSchema,
        onSubmit: async (values, { resetForm }) => {
            try {
                await signInWithEmailAndPassword(
                    auth,
                    values.email,
                    values.password
                );

                dispatch(fetchUser(values.email));

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
                height: "calc(100vh - 120px)",
                pl: 4,
                pr: 4,
                pt: 6,
                maxWidth: "480px",
            }}
        >
            <Typography variant="h4" color="secondary" fontWeight="bold">
                Вхід
            </Typography>
            <Typography variant="h6" color="primary" sx={{ pt: 3, pb: 1 }}>
                Пошта
            </Typography>
            <TextField
                variant="outlined"
                type="email"
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
                Пароль
            </Typography>
            <TextField
                type={showPassword ? "text" : "password"}
                name="password"
                value={formik.password}
                variant="outlined"
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

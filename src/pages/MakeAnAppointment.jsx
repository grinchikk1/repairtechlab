/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useContext } from "react";
import { Typography, TextField, Box, CircularProgress } from "@mui/material";
import { useFormik } from "formik";
import { useSelector, useDispatch } from "react-redux";
import * as Yup from "yup";
import { addData } from "../api/firebaseFetch";
import CustomSnackbar from "../components/CustomSnackBar";
import { Context } from "../context/AuthContext";
import { fetchUser } from "../redux/slice/userSlice";
import ButtonOutline from "../components/ButtonOutline";

const validationSchema = Yup.object().shape({
    username: Yup.string().required("Поле обовʼязкове"),
    phone: Yup.string()
        .matches(/^\+?3?8?(0\d{9})$/, "Не вірний формат телефону")
        .required("Поле обовʼязкове"),
    email: Yup.string()
        .email("Не вірний формат пошти")
        .required("Поле обовʼязкове"),
    textField: Yup.string().required("Поле обовʼязкове"),
});

export default function MakeAnAppointment() {
    const [titleText, setTitleText] = useState("");
    const [text, setText] = useState("");
    const [severity, setSeverity] = useState("success");

    const [showSnackBar, setShowSnackBar] = useState(false);

    const dispatch = useDispatch();

    const { customer, status } = useSelector((state) => state.customer);
    const { user } = useContext(Context);

    useEffect(() => {
        if (user) {
            dispatch(fetchUser(user.email));
        }
    }, [dispatch, user]);

    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            username: customer ? customer.name : "",
            email: customer ? customer.email : "",
            phone: customer ? customer.phone : "",
            textField: "",
        },
        validationSchema,
        onSubmit: async (values, { resetForm }) => {
            const data = {
                name: values.username,
                email: values.email,
                phone: values.phone,
                textField: values.textField,
            };
            await addData(data);

            setTitleText("Вітаємо");
            setText("Форма успішно відправлена");
            setSeverity("success");
            setShowSnackBar(true);

            resetForm();
        },
    });

    if (status === "loading") {
        return (
            <Box sx={{ textAlign: "center", mt: 8 }}>
                <CircularProgress color="secondary" />
            </Box>
        );
    }

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
                Напишіть нам
            </Typography>
            <Typography variant="h6" color="primary" sx={{ pt: 3, pb: 1 }}>
                Вкажіть Імʼя
            </Typography>
            <TextField
                variant="outlined"
                type="text"
                name="username"
                value={formik.values.username}
                autoComplete="given-name"
                error={
                    (formik.touched.username || formik.submitCount > 0) &&
                    Boolean(formik.errors.username)
                }
                helperText={
                    formik.touched.username || formik.submitCount > 0
                        ? formik.errors.username || "\u200b"
                        : " "
                }
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            <Typography variant="h6" color="primary" sx={{ pt: 3, pb: 1 }}>
                Вкажіть Пошту
            </Typography>
            <TextField
                type="email"
                name="email"
                value={formik.values.email}
                variant="outlined"
                autoComplete="email"
                error={
                    (formik.touched.email || formik.submitCount > 0) &&
                    Boolean(formik.errors.email)
                }
                helperText={
                    formik.touched.email || formik.submitCount > 0
                        ? formik.errors.email || "\u200b"
                        : " "
                }
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            <Typography variant="h6" color="primary" sx={{ pt: 3, pb: 1 }}>
                Вкажіть Номер Телефону
            </Typography>
            <TextField
                type="tel"
                name="phone"
                value={formik.values.phone}
                variant="outlined"
                autoComplete="phone"
                error={
                    (formik.touched.phone || formik.submitCount > 0) &&
                    Boolean(formik.errors.phone)
                }
                helperText={
                    formik.touched.phone || formik.submitCount > 0
                        ? formik.errors.phone || "\u200b"
                        : " "
                }
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            <Typography variant="h6" color="primary" sx={{ pt: 3, pb: 1 }}>
                Повідомлення
            </Typography>
            <TextField
                multiline
                sx={{ mb: 4 }}
                name="textField"
                value={formik.values.textField}
                variant="outlined"
                autoComplete="text"
                error={
                    (formik.touched.textField || formik.submitCount > 0) &&
                    Boolean(formik.errors.textField)
                }
                helperText={
                    formik.touched.textField || formik.submitCount > 0
                        ? formik.errors.textField || "\u200b"
                        : " "
                }
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
            />
            <ButtonOutline type="submit" text="Відправити" />
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

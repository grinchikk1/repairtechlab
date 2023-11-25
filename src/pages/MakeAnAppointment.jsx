import React, { useState, useContext } from "react";
import { Typography, Button, TextField, Box } from "@mui/material";
import { useFormik } from "formik";
import * as Yup from "yup";
import { addData } from "../api/firebaseFetch";
import CustomSnackbar from "../components/CustomSnackBar";
import { Context } from "../context/AuthContext";

const validationSchema = Yup.object().shape({
    username: Yup.string().required("Поле обовʼязкове"),
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

    const { user } = useContext(Context);

    const formik = useFormik({
        initialValues: {
            username: "",
            email: user ? user.email : "",
            textField: "",
        },
        validationSchema,
        onSubmit: async (values, { resetForm }) => {
            const data = {
                name: values.username,
                email: values.email,
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
                Повідомлення
            </Typography>
            <TextField
                multiline
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
            <Button variant="outlined" type="submit" sx={{ mt: 4, mb: 4 }}>
                Відправити
            </Button>
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

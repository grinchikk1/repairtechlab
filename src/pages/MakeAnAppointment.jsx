import React, { useState } from "react";
import { Typography, Button, TextField, Box } from "@mui/material";
import { addData } from "../api/firebaseFetch";
import CustomSnackbar from "../components/CustomSnackBar";

export default function MakeAnAppointment() {
    const [username, setUsername] = useState("");
    const [phone, setPhone] = useState("");
    const [textField, setTextField] = useState("");

    const [titleText, setTitleText] = useState("");
    const [text, setText] = useState("");
    const [severity, setSeverity] = useState("success");

    const [showSnackBar, setShowSnackBar] = useState(false);

    const handleAddData = async (event) => {
        event.preventDefault();
        const data = { name: username, telephone: phone, textField };
        await addData(data);
        setPhone("");
        setUsername("");
        setTextField("");

        setTitleText("Вітаємо");
        setText("Форма успішно відправлена");
        setSeverity("success");
        setShowSnackBar(true);
    };

    return (
        <Box
            component="form"
            onSubmit={handleAddData}
            sx={{
                margin: "0 auto",
                display: "flex",
                flexDirection: "column",
                alignContent: "center",
                justifyContent: "space-evenly",
                height: "100%",
                pt: 10,
                pr: 1,
                pl: 1,
                gap: "15px",
                maxWidth: "480px",
            }}
        >
            <Typography variant="h3" sx={{ textAlign: "center" }}>
                Напишіть нам
            </Typography>
            <TextField
                variant="outlined"
                type="text"
                id="username"
                placeholder="Ім'я користувача"
                value={username}
                autoComplete="username"
                sx={{ borderBottom: "1px solid #000" }}
                onChange={(event) => setUsername(event.target.value)}
            />
            <TextField
                type="text"
                id="phone"
                placeholder="Телефон"
                value={phone}
                variant="outlined"
                autoComplete="phone"
                sx={{ borderBottom: "1px solid #000" }}
                onChange={(event) => setPhone(event.target.value)}
            />
            <TextField
                type="text"
                id="text"
                placeholder="Введіть текст"
                value={textField}
                variant="outlined"
                autoComplete="text"
                sx={{ borderBottom: "1px solid #000" }}
                onChange={(event) => setTextField(event.target.value)}
            />
            <Button variant="outlined" onClick={handleAddData} type="submit">
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

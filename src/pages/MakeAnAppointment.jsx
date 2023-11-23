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
                type="tel"
                id="username"
                value={username}
                autoComplete="username"
                onChange={(event) => setUsername(event.target.value)}
            />
            <Typography variant="h6" color="primary" sx={{ pt: 3, pb: 1 }}>
                Номер телефону
            </Typography>
            <TextField
                type="text"
                id="phone"
                value={phone}
                variant="outlined"
                autoComplete="phone"
                onChange={(event) => setPhone(event.target.value)}
            />
            <Typography variant="h6" color="primary" sx={{ pt: 3, pb: 1 }}>
                Повідомлення
            </Typography>
            <TextField
                type="text"
                id="text"
                value={textField}
                variant="outlined"
                autoComplete="text"
                onChange={(event) => setTextField(event.target.value)}
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

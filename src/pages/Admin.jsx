import React from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { Container, Typography, Button } from "@mui/material";
import { auth } from "../firebaseConfig";

export default function Admin() {
    const navigate = useNavigate();

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            navigate("/login");
        } catch (error) {
            throw new Error(error.message);
        }
    };

    return (
        <Container
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                p: 4,
            }}
        >
            <Typography color="secondary" variant="h4" sx={{ pb: 4 }}>
                Адміністративна сторінка
            </Typography>
            <Button variant="outlined" onClick={handleSignOut} type="button">
                Вийти
            </Button>
        </Container>
    );
}

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
            disableGutters
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                p: 5,
                gap: "15px",
            }}
        >
            <Typography
                color="secondary"
                variant="h5"
                sx={{ fontSize: { xs: 20, sm: 24, md: 28 } }}
            >
                Адміністративна сторінка
            </Typography>
            <Button variant="outlined" onClick={handleSignOut} type="button">
                Вийти
            </Button>
        </Container>
    );
}

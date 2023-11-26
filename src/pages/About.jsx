import React from "react";
import { useNavigate } from "react-router-dom";
import { Container, Button } from "@mui/material";

export default function About() {
    const navigate = useNavigate();
    return (
        <Container
            disableGutters
            maxWidth="xl"
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "calc(100vh - 60px)",
                fontSize: "60px",
            }}
        >
            В Розробці
            <Button
                variant="outlined"
                sx={{ mt: 2 }}
                onClick={() => navigate("/contact")}
            >
                Контакти
            </Button>
        </Container>
    );
}

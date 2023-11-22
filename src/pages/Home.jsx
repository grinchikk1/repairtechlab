import React from "react";
import { Button, Container } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Home() {
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
                fontSize: "60px",
                pt: 10,
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

import { Container, Button } from "@mui/material";

import { useNavigate } from "react-router-dom";
import React from "react";

export default function Services() {
    const navigate = useNavigate();
    return (
        <Container
            disableGutters
            maxWidth="xl"
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                height: "calc(100vh - 60px)",
                justifyContent: "center",
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

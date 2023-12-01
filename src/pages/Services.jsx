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
                color: "white", //
                justifyContent: "center",
                fontSize: "60px",
                background: "url(/mainn.jpeg) center/cover no-repeat",
                backgroundAttachment: "fixed",
            }}
        >
            В Розробці
            <Button
                variant="outlined"
                sx={{ mt: 2, color: "#fff" }}
                onClick={() => navigate("/contact")}
            >
                Контакти
            </Button>
        </Container>
    );
}

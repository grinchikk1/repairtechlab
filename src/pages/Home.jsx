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
                color: "white", //
                justifyContent: "center",
                fontSize: "60px",
                height: "calc(100vh - 60px)",
                background: "url(/mainn.jpeg) center/cover no-repeat",
            }}
        >
            В Розробці
            <Button
                variant="outlined"
                sx={{ mt: 2, borderColor: "white", color: "white" }}
                onClick={() => navigate("/contact")}
            >
                Контакти
            </Button>
        </Container>
    );
}

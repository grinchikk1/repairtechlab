import React from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/material";
import ButtonOutline from "../components/ButtonOutline";

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
                color: "white",
                fontSize: "60px",
                background: "url(/mainnn.jpeg) center/cover no-repeat",
                backgroundAttachment: "fixed",
                gap: 2,
            }}
        >
            В Розробці
            <ButtonOutline
                color="#fff"
                text="Контакти"
                onClick={() => navigate("/contact")}
            />
        </Container>
    );
}

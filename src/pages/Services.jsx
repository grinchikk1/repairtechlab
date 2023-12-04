import React from "react";
import { Container } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ButtonOutline from "../components/ButtonOutline";

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

import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Map from "../components/Map";

export default function Contact() {
    return (
        <Box
            sx={{
                display: "inline-block",
                height: "calc(100vh - 120px)",
                pl: 4,
                pr: 4,
                pt: 6,
            }}
        >
            <Container
                disableGutters
                sx={{ display: "flex", flexDirection: "column" }}
            >
                <Typography
                    color="secondary"
                    variant="h4"
                    fontWeight="bold"
                    sx={{ pt: 3 }}
                >
                    Контакти
                </Typography>
                <Typography variant="h6" sx={{ pt: 2 }}>
                    Телефон: <b>+38 073 980 90 80</b>
                </Typography>
                <Typography variant="h6" sx={{ pt: 1 }}>
                    Email: <b>repairtechlab@gmail.com</b>
                </Typography>
                <Typography variant="h6" sx={{ pt: 1, pb: 2 }}>
                    Адреса: <b>м.Київ, вул.Костянтинівська 32, офіс 7</b>
                </Typography>
            </Container>
            <Box
                sx={{
                    height: "40vh",
                    borderRadius: "4px",
                    overflow: "hidden",
                }}
            >
                <Map />
            </Box>
        </Box>
    );
}

import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Map from "../components/Map";

export default function Contact() {
    return (
        <Container sx={{ display: "flex", flexDirection: "column" }}>
            <Typography color="secondary" variant="h3" sx={{ pt: 3 }}>
                Контакти
            </Typography>
            <Typography variant="h5" sx={{ pt: 2 }}>
                Телефон: +380739809080
            </Typography>
            <Typography variant="h5" sx={{ pt: 1 }}>
                Email: repairtechlab@gmail.com
            </Typography>
            <Typography variant="h5" sx={{ pt: 1, pb: 2 }}>
                Адреса: м.Київ, вул.Костянтинівська 32, офіс 7
            </Typography>
            <Box
                sx={{
                    height: "40vh",
                    maxWidth: "600px",
                    borderRadius: "4px",
                    overflow: "hidden",
                }}
            >
                <Map />
            </Box>
        </Container>
    );
}

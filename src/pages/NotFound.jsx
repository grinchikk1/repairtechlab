import React from "react";
import { Box, Typography, Link } from "@mui/material";
import ButtonOutline from "../components/ButtonOutline";

export default function NotFound() {
    return (
        <Box
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            sx={{ height: "calc(100vh - 120px)" }}
        >
            <Typography variant="h1">404</Typography>
            <Typography variant="h4" sx={{ pb: 2 }}>
                Сторінку не знайдено
            </Typography>
            <ButtonOutline
                text={
                    <Link
                        color="inherit"
                        href="/"
                        sx={{ textDecoration: "none" }}
                    >
                        Головна сторінка
                    </Link>
                }
            />
        </Box>
    );
}

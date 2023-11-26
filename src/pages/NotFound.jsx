import React from "react";
import { Box, Typography, Button, Link } from "@mui/material";

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
            <Button variant="outlined" type="button">
                <Link color="inherit" href="/" sx={{ textDecoration: "none" }}>
                    Головна сторінка
                </Link>
            </Button>
        </Box>
    );
}

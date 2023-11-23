import React from "react";
import { Box, Typography, Button, Link } from "@mui/material";

export default function NotFound() {
    return (
        <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            sx={{ p: 10 }}
        >
            <Typography variant="h1" color="secondary">
                404
            </Typography>
            <Typography variant="h4" color="secondary" sx={{ pb: 2 }}>
                Сторінку не знайдено
            </Typography>
            <Button variant="outlined" type="button">
                <Link
                    color="secondary"
                    href="/"
                    sx={{ textDecoration: "none" }}
                >
                    Головна сторінка
                </Link>
            </Button>
        </Box>
    );
}

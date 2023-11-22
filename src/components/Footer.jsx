import React from "react";
import { Container, Typography } from "@mui/material";

export default function Footer() {
    return (
        <Container
            maxWidth="xl"
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-around",
                height: "60px",
                color: "#fff",
                background:
                    "linear-gradient(89.98deg, #707070 .02%, #808080 93.08%)",
            }}
        >
            <Typography sx={{ fontSize: { xs: 10, sm: 14, md: 18 } }}>
                Repair Tech Lab
            </Typography>
            <Typography sx={{ fontSize: { xs: 10, sm: 14, md: 18 } }}>
                All Rights Reserved
            </Typography>
            <Typography sx={{ fontSize: { xs: 10, sm: 14, md: 18 } }}>
                Developed by Dmytro Hrinchenko
            </Typography>
        </Container>
    );
}

import React from "react";
import { Container, Link, Typography } from "@mui/material";

export default function Footer() {
    return (
        <Container
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

            <Link
                color="inherit"
                sx={{
                    fontSize: { xs: 10, sm: 14, md: 18 },
                    textDecoration: "none",
                }}
                href="https://linkedin.com/in/dmytro-hrinchenko-5b577a283/"
                target="_blank"
            >
                Developed by Dmytro Hrinchenko
            </Link>
        </Container>
    );
}

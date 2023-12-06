import { Box, Typography, Grid } from "@mui/material";
import React from "react";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Map from "../components/Map";

export default function Contact() {
    return (
        <Box
            sx={{
                p: 4,
                textAlign: "center",
            }}
        >
            <Typography
                color="secondary"
                variant="h4"
                fontWeight="bold"
                sx={{ pt: 3, pb: 3 }}
            >
                Звʼяжіться з нами
            </Typography>
            <Grid container spacing={2}>
                <Grid item xs={12} md={4} sx={{ pb: 2, pr: 2 }}>
                    <a
                        href="tel:+380739809080"
                        style={{
                            textDecoration: "none",
                            color: "inherit",
                        }}
                    >
                        <Box
                            sx={{
                                ":hover": {
                                    backgroundColor: "rgba(0, 0, 0, 0.1)",
                                    borderRadius: "12px",
                                },
                            }}
                        >
                            <PhoneOutlinedIcon />
                            <Typography
                                variant="h5"
                                fontWeight="bold"
                                sx={{ p: 1 }}
                            >
                                Телефон
                            </Typography>
                            <Typography variant="body1" color="primary">
                                +38 073 980 90 80
                            </Typography>
                        </Box>
                    </a>
                </Grid>
                <Grid item xs={12} md={4} sx={{ pb: 2, pr: 2 }}>
                    <a
                        href="mailto:repairtechlab@gmail.com"
                        style={{
                            textDecoration: "none",
                            color: "inherit",
                        }}
                    >
                        <Box
                            sx={{
                                ":hover": {
                                    backgroundColor: "rgba(0, 0, 0, 0.1)",
                                    borderRadius: "12px",
                                },
                            }}
                        >
                            <MailOutlineIcon />
                            <Typography
                                variant="h5"
                                fontWeight="bold"
                                sx={{ p: 1 }}
                            >
                                Email
                            </Typography>
                            <Typography variant="body1" color="primary">
                                repairtechlab@gmail.com
                            </Typography>
                        </Box>
                    </a>
                </Grid>
                <Grid item xs={12} md={4} sx={{ pb: 2, pr: 2 }}>
                    <a
                        href="https://maps.google.com?q=м.Київ, вул.Костянтинівська 32"
                        target="_blank"
                        rel="noopener noreferrer"
                        style={{
                            textDecoration: "none",
                            color: "inherit",
                        }}
                    >
                        <Box
                            sx={{
                                ":hover": {
                                    backgroundColor: "rgba(0, 0, 0, 0.1)",
                                    borderRadius: "12px",
                                },
                            }}
                        >
                            <LocationOnOutlinedIcon />
                            <Typography
                                variant="h5"
                                fontWeight="bold"
                                sx={{ p: 1 }}
                            >
                                Адреса
                            </Typography>
                            <Typography>
                                м.Київ, вул.Костянтинівська 32, офіс 7
                            </Typography>
                        </Box>
                    </a>
                </Grid>
            </Grid>
            <Box
                sx={{
                    height: "40vh",
                    borderRadius: "4px",
                    pt: 4,
                    maxWidth: "800px",
                    margin: "0 auto",
                    overflow: "hidden",
                }}
            >
                <Map />
            </Box>
        </Box>
    );
}

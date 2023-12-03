import React from "react";
import { Button, Container, Grid, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Home() {
    const navigate = useNavigate();
    return (
        <Container
            disableGutters
            maxWidth="xl"
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                pt: 10,
                pb: 2,
            }}
        >
            <Typography variant="h1" sx={{ fontSize: { xs: 26, md: 36 } }}>
                Ремонт техніки Apple
            </Typography>
            <Grid
                container
                spacing={3}
                sx={{
                    pt: 1,
                    width: "100%",
                }}
            >
                <Grid item xs={12} sm={6} sx={{ pr: 3 }}>
                    <Typography variant="h6">
                        <b>Repair Tech Lab</b> – сервісний центр у самому центрі
                        міста Києва. Наша мета – бути найкращими у сфері
                        сервісного обслуговування.
                    </Typography>
                    <Typography variant="h6" sx={{ pt: 3, pb: 3 }}>
                        <i>✓ Ремонт Iphone, Mac, Ipad, Ipod, AppleWatch.</i>
                        <br />
                        <i>✓ MacOS, iOS, watchOS, iPadOS.</i>
                        <br />
                        <i>✓ Будьте завжди на звʼязку.</i>
                    </Typography>
                    <Typography variant="body1">
                        Бажаєте зробити запис на ремонт або задати питання?
                    </Typography>

                    <Button
                        variant="outlined"
                        sx={{ mt: 2 }}
                        onClick={() => navigate("/make_an_appointment")}
                    >
                        <motion.div
                            whileHover={{ scale: 1.2 }}
                            whileTap={{ scale: 0.8 }}
                            transition={{
                                type: "spring",
                                stiffness: 400,
                                damping: 17,
                            }}
                        >
                            Натисніть
                        </motion.div>
                    </Button>
                </Grid>
                <Grid item xs={12} sm={6} sx={{ pr: 3 }}>
                    <img
                        src="../iphone15-pro-64.webp"
                        alt="title-img-iphone"
                        width="100%"
                        height="100%"
                        style={{
                            borderRadius: "12px",
                            objectFit: "center",
                        }}
                    />
                </Grid>
            </Grid>
        </Container>
    );
}

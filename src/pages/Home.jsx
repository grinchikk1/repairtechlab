import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ButtonOutline from "../components/ButtonOutline";

const overlayStyles = {
    position: "absolute",
    objectFit: "cover",
    top: 0,
    left: 0,
    zIndex: 2,
    width: "100%",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.4)",
};

const textContainerStyles = {
    zIndex: 2,
    color: "#fff",
    textAlign: "center",
};

function Home() {
    const navigate = useNavigate();

    return (
        <Container disableGutters maxWidth="xl" sx={{ position: "relative" }}>
            <Box
                sx={{
                    background: "url(./Iphone.jpeg) center/cover no-repeat",
                    position: "absolute",
                    top: 0,
                    left: 0,
                    zIndex: 1,
                    width: "100%",
                    height: "100vh",
                }}
            />
            <Box
                sx={{
                    height: "100vh",
                    width: "100%",
                    overflow: "hidden",
                    display: "flex",
                    justifyContent: "center",
                }}
            >
                <Box sx={overlayStyles} />
                <Box sx={textContainerStyles}>
                    <Typography
                        variant="h1"
                        sx={{
                            fontSize: { xs: 50, md: 100 },
                            p: 3,
                            pt: 15,
                            pb: 10,
                        }}
                    >
                        Ми проведемо діагностику та відремонтуємо ваш пристрій
                    </Typography>
                    <ButtonOutline
                        text="Запис на ремонт"
                        color="#fff"
                        onClick={() => navigate("/make_an_appointment")}
                    />
                </Box>
            </Box>
            <Container sx={{ width: "100%" }}>
                <Typography variant="h5" sx={{ pt: 3, pb: 3 }}>
                    <b>Repair Tech Lab</b> – сервісний центр у самому центрі
                    міста Києва. Наша мета – бути найкращими у сфері сервісного
                    обслуговування.
                </Typography>
                <Typography variant="h5" sx={{ pt: 3, pb: 5 }}>
                    <i>✓ Ремонт Iphone, Mac, Ipad, Ipod, AppleWatch.</i>
                    <br />
                    <i>✓ MacOS, iOS, watchOS, iPadOS.</i>
                    <br />
                    <i>✓ Знижка на всі послуги 5% через запис на сайті.</i>
                </Typography>
            </Container>
        </Container>
    );
}

export default Home;

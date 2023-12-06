import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ButtonOutline from "../components/ButtonOutline";

const videoStyles = {
    position: "absolute",
    top: 0,
    left: 0,
    zIndex: 1,
    width: "100%",
    height: "100vh",
    objectFit: "cover",
};

const overlayStyles = {
    position: "absolute",
    objectFit: "cover",
    top: 0,
    left: 0,
    zIndex: 2,
    width: "100%",
    height: "100vh",
    backgroundColor: "rgba(0,0,0,0.6)",
};

const textContainerStyles = {
    zIndex: 2,
    color: "#fff",
    textAlign: "center",
};

function Home() {
    const navigate = useNavigate();

    return (
        <Container disableGutters maxWidth="xl">
            <video
                src="./BG_video_fire_laptop.mp4"
                type="video/mp4"
                autoPlay
                muted
                loop
                style={videoStyles}
            />
            <Box
                sx={{
                    height: "100vh",
                    width: "100%",
                    overflow: "hidden",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    position: "relative",
                }}
            >
                <Box sx={overlayStyles} />
                <Box sx={textContainerStyles}>
                    <Typography
                        variant="h1"
                        sx={{ fontSize: { xs: 26, md: 36 } }}
                    >
                        Ремонт техніки Apple
                    </Typography>
                    <Typography variant="h6" sx={{ pt: 3, pb: 3 }}>
                        <b>Repair Tech Lab</b> – сервісний центр у самому центрі
                        міста Києва. Наша мета – бути найкращими у сфері
                        сервісного обслуговування.
                    </Typography>
                    <Typography variant="h6" sx={{ pt: 3, pb: 3 }}>
                        <i>✓ Ремонт Iphone, Mac, Ipad, Ipod, AppleWatch.</i>
                        <br />
                        <i>✓ MacOS, iOS, watchOS, iPadOS.</i>
                        <br />
                        <i>✓ Знижка на всі послуги 5% через запис на сайті.</i>
                    </Typography>
                    <Typography variant="body1" sx={{ mb: 3 }}>
                        Бажаєте зробити запис на ремонт або задати питання?
                    </Typography>
                    <ButtonOutline
                        text="Натисніть"
                        color="#fff"
                        onClick={() => navigate("/make_an_appointment")}
                    />
                </Box>
            </Box>
        </Container>
    );
}

export default Home;

import React from "react";
import { Container, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import ButtonOutline from "../components/ButtonOutline";

function Home() {
    const navigate = useNavigate();

    return (
        <Container
            disableGutters
            maxWidth="xl"
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                color: "white",
                fontSize: "60px",
                background: "url(/Iphone.jpeg) center/cover no-repeat",
                backgroundAttachment: "fixed",
                gap: 2,
            }}
        >
            <Typography
                variant="h1"
                sx={{
                    textAlign: "center",
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

import React from "react";
import { Container, Typography } from "@mui/material";

export default function About() {
    return (
        <Container
            disableGutters
            maxWidth="xl"
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                p: 4,
            }}
        >
            <Typography variant="h5" sx={{ textAlign: "center" }}>
                Професійний сервісний центр
            </Typography>
            <Container disableGutters>
                <ul>
                    <Typography variant="h6" sx={{ pb: 1 }}>
                        Діагностика безкоштовна*
                    </Typography>
                    <li style={{ padding: 5 }}>Ремонт електронних книг</li>
                    <li style={{ padding: 5 }}>Ремонт ноутбуків</li>
                    <li style={{ padding: 5 }}>Ремонт планшетів</li>
                    <li style={{ padding: 5 }}>Ремонт смартфонів</li>
                    <li style={{ padding: 5 }}>Ремонт смарт-годинників</li>
                    <li style={{ padding: 5 }}>Ремонт моноблоків</li>
                    <li style={{ padding: 5 }}>Ремонт відеокарт</li>
                </ul>
                <Container>
                    <Typography variant="h6">
                        - Також у нас можна придбати різні комплектуючі до
                        вашого гаджета за приємними цінами.
                    </Typography>
                    <Typography variant="h6">
                        - Можлива швидка заміна деталей, якщо вони є в наявності
                        на складі.
                    </Typography>
                </Container>
            </Container>
        </Container>
    );
}

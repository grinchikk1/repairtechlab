import React from "react";
import { Container, Typography, Button, Box } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Services() {
    const navigate = useNavigate();
    return (
        <Container
            disableGutters
            maxWidth="xl"
            sx={{
                display: "flex",
                position: "relative",
                flexDirection: "column",
                alignItems: "start",
                fontSize: "60px",
                p: 4,
            }}
        >
            <Box>
                <Typography variant="h3" sx={{ pb: 2 }}>
                    Чим ми займаємось?
                </Typography>
                <Box>
                    <Typography variant="h6" sx={{ pb: 6, pl: 2 }}>
                        Ми пропонуємо послуги з професійного ремонту мобільної
                        та компʼютерної техніки : <br /> - БЕЗКОШТОВНА
                        ДІАГНОСТИКА ПРИСТРОЮ; <br />- Заміна розʼємів живлення
                        (micro-usb, type-c, lightning); <br />- Заміна скла
                        дисплея; <br />- Заміна дисплея; <br />- Заміна
                        акумулятора (без помилки); <br />- Заміна заднього скла
                        корпуса; <br />- Заміна корпуса; <br />- Заміна камери
                        та скла камери; <br />- Відновлення Face-id/Touch-id;
                        <br />- Відновлення після падіння/залиття; <br />-
                        Збільшення памʼяті пристрою; <br />- Заміна матриці,
                        клавіатури, розʼємів живлення, розʼємів USB та багато
                        іншого.
                    </Typography>
                </Box>
                <Typography variant="h5" sx={{ pb: 2, pl: 2 }}>
                    Для звʼязку з нами натисніть -
                    <Button
                        disableRipple
                        size="small"
                        variant="text"
                        onClick={() => navigate("/contact")}
                        sx={{ color: "#000", fontStyle: "italic" }}
                    >
                        контакти
                    </Button>
                </Typography>
                <Typography variant="h5" sx={{ pb: 2, pl: 2 }}>
                    Або ж відправте форму і ми з вами звʼяжемось -
                    <Button
                        size="small"
                        variant="text"
                        onClick={() => navigate("/make_an_appointment")}
                        sx={{ color: "#000", fontStyle: "italic" }}
                    >
                        запис на ремонт
                    </Button>
                </Typography>
            </Box>
        </Container>
    );
}

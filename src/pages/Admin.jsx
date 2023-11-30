import React, { useEffect, useState } from "react";
import {
    Box,
    Container,
    Typography,
    IconButton,
    CardContent,
    Card,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { getData, deleteData } from "../api/firebaseFetch";

export default function Admin() {
    const [form, setForm] = useState("");
    const [expandedTextId, setExpandedTextId] = useState(null);

    useEffect(() => {
        const gget = async () => {
            const res = await getData();
            setForm(res);
        };
        gget();
    }, []);

    const handleDelete = async (id) => {
        // eslint-disable-next-line no-alert
        const confirmed = window.confirm(
            "Ви впевнені, що хочете видалити цей запис?"
        );
        if (confirmed) {
            await deleteData(id);
            setForm((prevForm) => prevForm.filter((card) => card.id !== id));
        }
    };

    const handleToggleText = (id) => {
        setExpandedTextId((prevId) => (prevId === id ? null : id));
    };

    return (
        <Container
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                p: 4,
                pt: 6,
            }}
        >
            <Typography
                color="secondary"
                variant="h1"
                sx={{ pb: 4, pt: 4, fontSize: { xs: 20, md: 30 } }}
            >
                Адміністративна сторінка
            </Typography>
            <Box
                sx={{
                    display: "flex",
                    justifyContent: "center",
                    flexWrap: "wrap",
                    gap: 2,
                }}
            >
                {form && form.length > 0 ? (
                    form.map((card) => (
                        <Card
                            key={card.id}
                            variant="outlined"
                            sx={{ width: "300px" }}
                        >
                            <CardContent
                                sx={{
                                    display: "flex",
                                    position: "relative",
                                    flexDirection: "column",
                                    overflowY: "auto",
                                    pt: 4,
                                    gap: 2,
                                }}
                            >
                                <Typography level="title-md">
                                    <b>Імʼя: </b> {card.data.name}
                                </Typography>
                                <Typography level="title-md">
                                    <b>Пошта: </b> {card.data.email}
                                </Typography>
                                <Box
                                    sx={{
                                        whiteSpace: "pre-line",
                                        pr: 2,
                                        maxHeight:
                                            expandedTextId === card.id
                                                ? "none"
                                                : "1.2em",
                                        overflowY:
                                            expandedTextId === card.id
                                                ? "auto"
                                                : "hidden",
                                    }}
                                >
                                    <b>Текст: </b>
                                    {card.data.textField}
                                </Box>
                                <IconButton
                                    onClick={() => handleDelete(card.id)}
                                    disableRipple
                                    sx={{
                                        position: "absolute",
                                        top: 0,
                                        right: 0,
                                        p: 1,
                                        cursor: "pointer",
                                    }}
                                >
                                    <ClearIcon color="error" />
                                </IconButton>
                                <IconButton
                                    onClick={() => handleToggleText(card.id)}
                                    disableRipple
                                    sx={{
                                        position: "absolute",
                                        top: 120,
                                        right: "8px",
                                        cursor: "pointer",
                                    }}
                                >
                                    <ExpandMoreIcon
                                        fontSize="small"
                                        sx={{
                                            color:
                                                expandedTextId === card.id
                                                    ? "#707070"
                                                    : "#000",
                                            transform:
                                                expandedTextId === card.id
                                                    ? "rotate(180deg)"
                                                    : "rotate(0deg)",
                                            transition:
                                                "transform 0.2s ease-in-out",
                                        }}
                                    />
                                </IconButton>
                                <Typography
                                    variant="body1"
                                    color="primary"
                                    sx={{
                                        position: "absolute",
                                        fontSize: "12px",
                                        p: 1.6,
                                        left: 0,
                                        top: 0,
                                    }}
                                >
                                    <i>
                                        {new Date(
                                            card.data.date.toMillis()
                                        ).toLocaleString()}
                                    </i>
                                </Typography>
                            </CardContent>
                        </Card>
                    ))
                ) : (
                    <Typography variant="h6">No data available</Typography>
                )}
            </Box>
        </Container>
    );
}

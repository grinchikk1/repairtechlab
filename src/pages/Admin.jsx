import React, { useEffect } from "react";
import {
    Box,
    Container,
    Typography,
    IconButton,
    CardContent,
    Card,
    AccordionDetails,
    AccordionSummary,
    Accordion,
    CircularProgress,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import ClearIcon from "@mui/icons-material/Clear";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDispatch, useSelector } from "react-redux";
import { getForm, deleteForm } from "../redux/slice/formSlice";

export default function Admin() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const { form, status } = useSelector((state) => state.form);

    useEffect(() => {
        dispatch(getForm());
    }, [dispatch]);

    const handleDelete = async (id) => {
        // eslint-disable-next-line no-alert
        const confirmed = window.confirm(
            "Ви впевнені, що хочете видалити цей запис?"
        );
        if (confirmed) {
            dispatch(deleteForm(id));
        }
    };

    if (status === "loading") {
        return (
            <Box sx={{ textAlign: "center", mt: 8 }}>
                <CircularProgress color="secondary" />
            </Box>
        );
    }

    if (status === "failed") {
        return navigate("/profile");
    }

    if (status === "succeeded" && form)
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
                                    <Accordion
                                        elevation={0}
                                        sx={{
                                            ".MuiAccordionSummary-content.Mui-expanded":
                                                { margin: 0 },
                                            ".MuiAccordionSummary-root.Mui-expanded":
                                                { minHeight: 0 },
                                        }}
                                    >
                                        <AccordionSummary
                                            expandIcon={<ExpandMoreIcon />}
                                            aria-controls="text-content"
                                            sx={{
                                                p: 0,
                                            }}
                                        >
                                            <Typography>
                                                Повідомлення
                                            </Typography>
                                        </AccordionSummary>
                                        <AccordionDetails>
                                            <Typography>
                                                {card.data.textField}
                                            </Typography>
                                        </AccordionDetails>
                                    </Accordion>
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
                                                card.data.date
                                            ).toLocaleString()}
                                        </i>
                                    </Typography>
                                </CardContent>
                            </Card>
                        ))
                    ) : (
                        <Typography variant="h6">
                            Данних не знайдено.
                        </Typography>
                    )}
                </Box>
            </Container>
        );
}

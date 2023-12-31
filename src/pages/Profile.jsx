/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import {
    Container,
    Typography,
    Paper,
    Avatar,
    Box,
    List,
    ListItem,
    ListItemButton,
    ListItemIcon,
    ListItemText,
    CircularProgress,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import ChatIcon from "@mui/icons-material/Chat";
import LogoutIcon from "@mui/icons-material/Logout";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { Context } from "../context/AuthContext";
import { fetchUser, clearUser } from "../redux/slice/userSlice";
import { auth } from "../firebaseConfig";
import ButtonOutline from "../components/ButtonOutline";

export default function Profile() {
    const { isAdmin, user } = useContext(Context);

    const { customer, status } = useSelector((state) => state.customer);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            dispatch(clearUser());
            navigate("/login");
        } catch (error) {
            throw new Error(error.message);
        }
    };

    const handleUpdateProfile = async () => {};

    useEffect(() => {
        dispatch(fetchUser(user.email));
    }, []);

    if (status === "loading") {
        return (
            <Box sx={{ textAlign: "center", mt: 8 }}>
                <CircularProgress color="secondary" />
            </Box>
        );
    }

    if (status === "failed") {
        return (
            <Box sx={{ textAlign: "center", mt: 8 }}>
                <Typography variant="h4" sx={{ p: 1 }}>
                    Користувача не знайдено.
                </Typography>
                <ButtonOutline
                    text="На сторінку логіну"
                    onClick={handleSignOut}
                />
            </Box>
        );
    }

    if (status === "succeeded" && customer)
        return (
            <Container
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    p: 4,
                }}
            >
                <Typography
                    variant="h4"
                    sx={{ pt: 2, fontSize: { xs: 26, md: 36 } }}
                >
                    Профіль користувача
                </Typography>
                <Paper
                    elevation={6}
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "space-between",
                        height: "160px",
                        minWidth: "320px",
                        borderRadius: "10px",
                        overflow: "hidden",
                        mt: 2,
                        mb: 2,
                        p: 2,
                    }}
                >
                    <Box
                        sx={{
                            display: "flex",
                            gap: 3,
                        }}
                    >
                        <Avatar sx={{ width: 83, height: 83 }}>
                            {customer.name.charAt(0)}
                        </Avatar>
                        <Box>
                            <Typography variant="h5">
                                {customer.name}
                            </Typography>
                            <Typography variant="h6">
                                {customer.email}
                            </Typography>
                            <Typography variant="h6">
                                {customer.phone}
                            </Typography>
                        </Box>
                    </Box>
                    <ButtonOutline
                        onClick={handleUpdateProfile}
                        text="Редагувати профіль"
                    />
                </Paper>
                <List sx={{ minWidth: "320px", pt: 2 }}>
                    {isAdmin && (
                        <ListItem disablePadding>
                            <ListItemButton
                                divider
                                disableGutters
                                onClick={() => navigate("/admin")}
                            >
                                <ListItemIcon>
                                    <AdminPanelSettingsIcon />
                                </ListItemIcon>
                                <ListItemText primary="Панель Адміністратора" />
                            </ListItemButton>
                        </ListItem>
                    )}
                    <ListItem disablePadding>
                        <ListItemButton divider disableGutters>
                            <ListItemIcon>
                                <ChatIcon />
                            </ListItemIcon>
                            <ListItemText primary="Чат" />
                        </ListItemButton>
                    </ListItem>
                    <ListItem disablePadding>
                        <ListItemButton
                            divider
                            disableGutters
                            onClick={handleSignOut}
                        >
                            <ListItemIcon>
                                <LogoutIcon />
                            </ListItemIcon>
                            <ListItemText primary="Вийти" />
                        </ListItemButton>
                    </ListItem>
                </List>
            </Container>
        );
}

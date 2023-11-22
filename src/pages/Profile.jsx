import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import {
    Container,
    Button,
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
import ChatIcon from "@mui/icons-material/Chat";
import LogoutIcon from "@mui/icons-material/Logout";
import AdminPanelSettingsIcon from "@mui/icons-material/AdminPanelSettings";
import { Context } from "../context/AuthContext";
// import { getUser } from "../api/firebaseFetch";
import { auth } from "../firebaseConfig";

export default function Profile() {
    const { isAdmin } = useContext(Context);
    // const [user, setUser] = useState(null);
    const [isLoad, setIsLoad] = useState(false);
    const navigate = useNavigate();

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            navigate("/login");
        } catch (error) {
            throw new Error(error.message);
        }
    };

    const handleUpdateProfile = async () => {};

    const fetchUserInfo = async () => {
        setIsLoad(true);
        // const res = await getUser("demonchikk7@gmail.com");
        // setUser(res.data().data);
        setTimeout(() => {
            setIsLoad(false);
        }, 800);
    };

    useEffect(() => {
        fetchUserInfo();
    }, []);

    if (isLoad) {
        return (
            <Box sx={{ textAlign: "center", mt: 5 }}>
                <CircularProgress color="secondary" />
            </Box>
        );
    }

    return (
        <Container
            disableGutters
            sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}
        >
            <Typography variant="h5" sx={{ pt: 2 }}>
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
                    <Avatar sx={{ width: 83, height: 83 }}>H</Avatar>
                    <Box>
                        <Typography variant="h6">Username</Typography>
                        <Typography variant="h7">
                            {/* {user && user.email} */}
                        </Typography>
                    </Box>
                </Box>
                <Button
                    color="secondary"
                    variant="outlined"
                    disableElevation
                    onClick={handleUpdateProfile}
                    type="button"
                >
                    Редагувати профіль
                </Button>
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
                            <ListItemText primary="Панель Адміністратор" />
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

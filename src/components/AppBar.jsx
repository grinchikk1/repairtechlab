import React, { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import {
    styled,
    AppBar,
    Box,
    Toolbar,
    IconButton,
    Menu,
    MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import InstagramIcon from "@mui/icons-material/Instagram";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { useTime, useTransform, motion } from "framer-motion";
import { Context } from "../context/AuthContext";
import LogoAnim from "./LogoAnim";

const StyledLink = styled(NavLink)({
    fontSize: "18px",
    fontWeight: 400,
    textDecoration: "none",
    color: "#000",
    padding: "10px",
    margin: "5px",
    borderBottom: "1px solid transparent",
    "&:hover": {
        borderColor: "#000",
    },
    "&.active": {
        borderColor: "#000",
    },
});

const StyledLinkMobile = styled(NavLink)({
    display: "flex",
    alignItems: "center",
    fontSize: "14px",
    textDecoration: "none",
    color: "#000",
});

const menuLinks = [
    { id: "menu-home", text: "Головна", url: "/" },
    { id: "menu-service", text: "Послуги", url: "/services" },
    { id: "menu-about", text: "Про нас", url: "/about" },
    { id: "menu-contact", text: "Контакти", url: "/contact" },
    { id: "menu-write", text: "Запис на ремонт", url: "/make_an_appointment" },
];

export default function PrimaryAppBar() {
    const [isOpen, setOpen] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const { user } = useContext(Context);
    const time = useTime();
    const rotate = useTransform(time, [0, 6000], [0, 360], { clamp: false });

    const handleClickMenu = (event) => {
        setAnchorEl(event.currentTarget);
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <AppBar elevation={0} position="sticky">
            <Toolbar>
                <IconButton
                    size="small"
                    edge="start"
                    color="secondary"
                    aria-label="open drawer"
                    onClick={handleClickMenu}
                    sx={{
                        mr: 2,
                        display: { xs: "flex", md: "none" },
                        textAlign: "center",
                    }}
                >
                    <MenuIcon />
                </IconButton>
                <motion.div
                    style={{
                        display: "flex",
                        alignItems: "center",
                    }}
                >
                    <StyledLinkMobile to="/">
                        <motion.img
                            src="/logo.png"
                            alt="logo"
                            height="40px"
                            style={{
                                rotate,
                            }}
                        />
                        <LogoAnim />
                    </StyledLinkMobile>
                </motion.div>
                <Box sx={{ flexGrow: 1 }} />
                <Box
                    sx={{
                        display: {
                            xs: "none",
                            md: "flex",
                            alignItems: "center",
                        },
                    }}
                >
                    {menuLinks.map((link) => (
                        <StyledLink key={link.id} to={link.url}>
                            {link.text}
                        </StyledLink>
                    ))}
                </Box>
                <IconButton
                    disableRipple
                    size="small"
                    aria-label="instagram profile"
                >
                    <StyledLinkMobile
                        to="https://www.instagram.com/repairtechlab/"
                        target="_blank"
                    >
                        <InstagramIcon sx={{ color: "#141414" }} />
                    </StyledLinkMobile>
                </IconButton>
                <IconButton
                    disableRipple
                    size="small"
                    aria-label={user ? "profile" : "login"}
                >
                    <StyledLinkMobile to={user ? "/profile" : "/login"}>
                        <AccountCircleIcon sx={{ color: "#141414" }} />
                    </StyledLinkMobile>
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{ vertical: "top", horizontal: "left" }}
                    keepMounted
                    open={isOpen}
                    onClose={handleClose}
                >
                    {menuLinks.map((link) => (
                        <MenuItem
                            onClick={handleClose}
                            key={link.id}
                            sx={{ backgroundColor: "#fff" }}
                        >
                            <StyledLinkMobile to={link.url}>
                                {link.text}
                            </StyledLinkMobile>
                        </MenuItem>
                    ))}
                </Menu>
            </Toolbar>
        </AppBar>
    );
}

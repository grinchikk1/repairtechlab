import { colors } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    typography: {
        fontFamily: "Playfair Display",
    },
    palette: {
        primary: {
            main: "#fff",
        },
        secondary: {
            main: "#000",
        },
        error: {
            main: colors.red[700],
        },
        action: {
            hover: "#fff",
        },
        // warning: {},
        // info: {},
        // success: {},
    },
    spacing: 10,
    shape: {
        borderRadius: 4,
    },
    components: {
        MuiMenuItem: {
            styleOverrides: {
                root: {
                    cursor: "auto",
                    ":hover": {
                        backgroundColor: "rgba(0, 0, 0, 0.1)",
                    },
                },
            },
        },
        MuiList: {
            styleOverrides: {
                root: {
                    padding: 0,
                    border: "none",
                },
            },
        },
        MuiListItemButton: {
            styleOverrides: {
                root: {
                    ":hover": {
                        backgroundColor: "transparent",
                    },
                },
            },
        },
        MuiButton: {
            variants: [
                {
                    props: { variant: "outlined" },
                    style: {
                        border: "1px solid #000",
                        color: "#000",
                        "&:hover": {
                            boxShadow: "0 1px 2px 1px #555",
                        },
                    },
                },
                {
                    props: { variant: "text" },
                    style: { border: "3px solid #707070" },
                },
            ],
        },
        MuiOutlinedInput: {
            styleOverrides: {
                root: {
                    borderRadius: "0px",
                    color: "#000",
                },
                notchedOutline: {
                    border: "none",
                },
                input: {
                    padding: "8px",
                },
                adornedEnd: { padding: 0 },
            },
        },
    },
});

export default theme;

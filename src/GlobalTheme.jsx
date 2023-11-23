import { colors } from "@mui/material";
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
    typography: {
        fontFamily: "Playfair Display",
    },
    palette: {
        primary: {
            main: "#707070",
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
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: "#fff",
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
                        borderRadius: "12px",
                        color: "#000",
                        "&:hover": {
                            color: "#fff",
                            backgroundColor: "#000",
                        },
                        padding: "12px 16px",
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
                    borderRadius: "12px",
                    color: "#000",
                    border: "1px solid #000",
                    "&:hover": {
                        backgroundColor: "rgba(0, 0, 0, 0.1)",
                    },
                },
                notchedOutline: {
                    border: "none",
                },
                input: {
                    padding: "12px 16px",
                    borderRadius: "12px",
                },
                adornedEnd: { padding: 0 },
            },
        },
    },
});

export default theme;

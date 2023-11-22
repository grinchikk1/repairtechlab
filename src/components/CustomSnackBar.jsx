import React from "react";
import PropTypes from "prop-types";
import { Snackbar, Alert, AlertTitle } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import InfoIcon from "@mui/icons-material/Info";

function CustomSnackbar({ open, onClose, text, titleText, severity }) {
    const customIconMapping = {
        success: <CheckCircleIcon fontSize="inherit" />,
        error: <ErrorIcon fontSize="inherit" />,
        info: <InfoIcon fontSize="inherit" />,
    };

    return (
        <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open={open}
            autoHideDuration={3000}
            onClose={onClose}
        >
            <Alert
                onClose={onClose}
                severity={severity}
                iconMapping={customIconMapping}
            >
                <AlertTitle>{titleText}</AlertTitle>
                {text}
            </Alert>
        </Snackbar>
    );
}

CustomSnackbar.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    titleText: PropTypes.string.isRequired,
    severity: PropTypes.string.isRequired,
};

export default CustomSnackbar;

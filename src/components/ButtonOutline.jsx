import React from "react";
import { Button } from "@mui/material";
import { motion } from "framer-motion";

export default function ButtonOutline({
    onClick,
    text,
    color = "#000",
    type = "button",
}) {
    return (
        <Button
            disableElevation
            variant="outlined"
            type={type}
            onClick={onClick}
            sx={{ color }}
        >
            <motion.div
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                transition={{
                    type: "spring",
                    stiffness: 400,
                    damping: 20,
                }}
            >
                {text}
            </motion.div>
        </Button>
    );
}

import React from "react";
import { motion } from "framer-motion";
import { Typography } from "@mui/material";

export default function LogoAnim() {
    const characters = "RepairTechLab";

    return (
        <Typography
            variant="h2"
            sx={{
                display: "flex",
                ml: 1,
                fontSize: { sm: "20px", md: "28px" },
                fontWeight: 700,
            }}
            color="secondary"
        >
            {characters.split("").map((char, index) => (
                <motion.p
                    // eslint-disable-next-line react/no-array-index-key
                    key={index}
                    whileHover={{ scale: 1.2 }}
                    transition={{
                        type: "spring",
                        stiffness: 400,
                        damping: 17,
                    }}
                >
                    {char}
                </motion.p>
            ))}
        </Typography>
    );
}

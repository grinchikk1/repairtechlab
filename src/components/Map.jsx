import React from "react";
import GoogleMapReact from "google-map-react";
import { Typography, Box } from "@mui/material";
import LocationOnIcon from "@mui/icons-material/LocationOn";

function LocationPin({ text }) {
    return (
        <Box display="flex">
            <LocationOnIcon color="secondary" />
            <Typography variant="body1" color="secondary">
                {text}
            </Typography>
        </Box>
    );
}

function Map() {
    return (
        <GoogleMapReact
            bootstrapURLKeys={{
                key: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
                language: "uk",
            }}
            defaultCenter={{
                lat: 50.46900145771578,
                lng: 30.50905436812287,
            }}
            defaultZoom={17}
        >
            <LocationPin lat={50.46900145771578} lng={30.50905436812287} />
        </GoogleMapReact>
    );
}

export default Map;

import React from "react";
import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";
import Navbar from "../components/navigation/Navbar";
import Footer from "../components/navigation/Footer";

const MainLayout = () => {
    return (
        <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                minHeight: "100vh",
                width: "100%",
                maxWidth: "100%",
                overflow: "hidden",
                backgroundColor: "background.default",
            }}
        >
            <Navbar />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    width: "100%",
                    padding: 0,
                    position: "relative",
                    zIndex: 1,
                }}
            >
                <Outlet />
            </Box>
            <Footer />
        </Box>
    );
};

export default MainLayout;

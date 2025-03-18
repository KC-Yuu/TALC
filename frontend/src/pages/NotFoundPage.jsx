import React from "react";
import { Box, Typography, Button, Container } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

const NotFoundPage = () => {
    return (
        <Container maxWidth="md">
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    minHeight: "60vh",
                    textAlign: "center",
                    py: 8,
                }}
            >
                <Typography variant="h1" component="h1" gutterBottom>
                    404
                </Typography>
                <Typography variant="h4" component="h2" gutterBottom>
                    Page non trouvée
                </Typography>
                <Typography
                    variant="body1"
                    paragraph
                    sx={{ mb: 4, maxWidth: "600px" }}
                >
                    La page que vous recherchez n'existe pas ou a été déplacée.
                </Typography>
                <Button
                    variant="contained"
                    color="primary"
                    component={RouterLink}
                    to="/"
                    size="large"
                >
                    Retour à l'accueil
                </Button>
            </Box>
        </Container>
    );
};

export default NotFoundPage;

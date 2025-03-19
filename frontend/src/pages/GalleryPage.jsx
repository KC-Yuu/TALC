import React, { useState, useEffect } from "react";
import {
    Typography,
    Grid,
    Box,
    CircularProgress,
    Alert,
    Tabs,
    Tab,
} from "@mui/material";
import GalleryItem from "../components/gallery/GalleryItem";
import axios from "axios";
// Import des données fictives
import { mediaItems as mockMediaItems } from "../mocks";

const GalleryPage = () => {
    const [mediaItems, setMediaItems] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [tabValue, setTabValue] = useState(0);

    const handleTabChange = (event, newValue) => {
        setTabValue(newValue);
    };

    useEffect(() => {
        const fetchMediaItems = async () => {
            try {
                setLoading(true);
                // En production, nous utiliserons l'API
                // const response = await axios.get('/api/media/');
                // setMediaItems(response.data);

                // Données fictives pour le développement
                setTimeout(() => {
                    setMediaItems(mockMediaItems);
                    setLoading(false);
                }, 1000);
            } catch (err) {
                console.error(
                    "Erreur lors de la récupération des médias:",
                    err
                );
                setError(
                    "Impossible de charger la galerie. Veuillez réessayer plus tard."
                );
                setLoading(false);
            }
        };

        fetchMediaItems();
    }, []);

    // Filtrer les médias en fonction de l'onglet sélectionné
    const filteredMedia =
        tabValue === 0
            ? mediaItems
            : mediaItems.filter((item) => {
                  if (tabValue === 1) return item.category === "performances";
                  if (tabValue === 2)
                      return (
                          item.category === "répétitions" ||
                          item.category === "cours" ||
                          item.category === "ateliers"
                      );
                  return true;
              });

    return (
        <Box>
            <Typography
                variant="h3"
                component="h1"
                gutterBottom
                className="dancing-font"
            >
                Notre Galerie
            </Typography>
            <Typography variant="body1" paragraph sx={{ mb: 4 }}>
                Découvrez les moments forts de notre groupe de danse à travers
                nos photos et vidéos.
            </Typography>

            <Tabs
                value={tabValue}
                onChange={handleTabChange}
                indicatorColor="secondary"
                textColor="secondary"
                sx={{ mb: 4 }}
            >
                <Tab label="Tous" />
                <Tab label="Performances" />
                <Tab label="Entraînements" />
            </Tabs>

            {loading ? (
                <Box sx={{ display: "flex", justifyContent: "center", my: 8 }}>
                    <CircularProgress />
                </Box>
            ) : error ? (
                <Alert severity="error" sx={{ mt: 2 }}>
                    {error}
                </Alert>
            ) : (
                <Grid container spacing={3}>
                    {filteredMedia.map((item) => (
                        <Grid item xs={12} sm={6} md={4} key={item.id}>
                            <GalleryItem item={item} />
                        </Grid>
                    ))}
                </Grid>
            )}
        </Box>
    );
};

export default GalleryPage;

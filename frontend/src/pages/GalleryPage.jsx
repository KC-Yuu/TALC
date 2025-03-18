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
                    setMediaItems([
                        {
                            id: 1,
                            title: "Spectacle de fin d'année",
                            description:
                                "Notre spectacle annuel au théâtre municipal",
                            type: "image",
                            url: "https://source.unsplash.com/random/800x600/?dance,performance",
                            created_at: "2023-06-15T20:00:00Z",
                            category: "performances",
                        },
                        {
                            id: 2,
                            title: "Répétition hebdomadaire",
                            description: "Séance d'entraînement du mercredi",
                            type: "image",
                            url: "https://source.unsplash.com/random/800x600/?dance,practice",
                            created_at: "2023-05-10T18:30:00Z",
                            category: "répétitions",
                        },
                        {
                            id: 3,
                            title: "Workshop avec chorégraphe invité",
                            description:
                                "Session spéciale avec un chorégraphe professionnel",
                            type: "image",
                            url: "https://source.unsplash.com/random/800x600/?dance,workshop",
                            created_at: "2023-04-22T14:00:00Z",
                            category: "ateliers",
                        },
                        {
                            id: 4,
                            title: "Festival de danse contemporaine",
                            description:
                                "Notre participation au festival régional",
                            type: "image",
                            url: "https://source.unsplash.com/random/800x600/?contemporary,dance",
                            created_at: "2023-03-18T19:00:00Z",
                            category: "performances",
                        },
                        {
                            id: 5,
                            title: "Cours de hip-hop",
                            description: "Nouveau cours ouvert aux débutants",
                            type: "image",
                            url: "https://source.unsplash.com/random/800x600/?hiphop,dance",
                            created_at: "2023-02-05T17:30:00Z",
                            category: "cours",
                        },
                        {
                            id: 6,
                            title: "Démonstration place du marché",
                            description:
                                "Performance publique lors de la fête de la ville",
                            type: "image",
                            url: "https://source.unsplash.com/random/800x600/?street,dance",
                            created_at: "2023-01-14T15:00:00Z",
                            category: "performances",
                        },
                    ]);
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

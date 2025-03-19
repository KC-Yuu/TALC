import React from "react";
import {
    Container,
    Typography,
    Grid,
    Card,
    CardContent,
    Box,
    Divider,
    Chip,
    Avatar,
} from "@mui/material";
import { LocationOn, Schedule, Person } from "@mui/icons-material";
import groups from "../mocks/groups";

const GroupsPage = () => {
    // Regrouper les groupes par tranche d'âge
    const groupsByAgeCategory = {
        Enfants: groups.filter((group) => {
            const ageRange = group.ageRange.toLowerCase();
            return (
                ageRange.includes("ans") &&
                !ageRange.includes("19") &&
                !ageRange.includes("adultes")
            );
        }),
        "Lycéens et Étudiants": groups.filter((group) => {
            const name = group.name.toLowerCase();
            return name.includes("lycéen") || name.includes("étudiant");
        }),
        Adultes: groups.filter((group) => {
            const ageRange = group.ageRange.toLowerCase();
            const name = group.name.toLowerCase();
            return (
                ageRange.includes("adultes") ||
                name.includes("adultes") ||
                ageRange.includes("19-20")
            );
        }),
    };

    return (
        <Container maxWidth="lg" sx={{ py: 6 }}>
            <Box sx={{ mb: 6, textAlign: "center" }}>
                <Typography
                    variant="h2"
                    component="h1"
                    gutterBottom
                    sx={{
                        fontWeight: 700,
                        color: "primary.main",
                        mb: 2,
                    }}
                >
                    Nos Groupes de Danse
                </Typography>
                <Typography
                    variant="h6"
                    color="text.secondary"
                    sx={{ maxWidth: 800, mx: "auto" }}
                >
                    Découvrez tous nos groupes de danse classés par tranches
                    d'âge, avec leurs horaires et lieux de cours.
                </Typography>
            </Box>

            {Object.entries(groupsByAgeCategory).map(
                ([category, categoryGroups]) => (
                    <Box key={category} sx={{ mb: 8 }}>
                        <Typography
                            variant="h4"
                            component="h2"
                            sx={{
                                mb: 3,
                                pb: 1,
                                borderBottom: "2px solid",
                                borderColor: "primary.light",
                                color: "primary.dark",
                                fontWeight: 600,
                            }}
                        >
                            {category}
                        </Typography>

                        <Grid container spacing={3}>
                            {categoryGroups.map((group) => (
                                <Grid item xs={12} md={6} lg={4} key={group.id}>
                                    <Card
                                        elevation={2}
                                        sx={{
                                            height: "100%",
                                            display: "flex",
                                            flexDirection: "column",
                                            transition: "all 0.3s ease",
                                            "&:hover": {
                                                transform: "translateY(-5px)",
                                                boxShadow: 6,
                                            },
                                            borderRadius: 2,
                                        }}
                                    >
                                        <CardContent sx={{ flexGrow: 1 }}>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    justifyContent:
                                                        "space-between",
                                                    alignItems: "center",
                                                    mb: 2,
                                                }}
                                            >
                                                <Typography
                                                    variant="h5"
                                                    component="h3"
                                                    sx={{
                                                        fontWeight: 600,
                                                        color: "primary.main",
                                                    }}
                                                >
                                                    {group.name}
                                                </Typography>
                                                <Chip
                                                    label={group.ageRange}
                                                    color="primary"
                                                    size="small"
                                                    sx={{ fontWeight: 500 }}
                                                />
                                            </Box>

                                            <Typography
                                                variant="body2"
                                                color="text.secondary"
                                                sx={{ mb: 2 }}
                                            >
                                                {group.description}
                                            </Typography>

                                            <Divider sx={{ my: 2 }} />

                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    mb: 1.5,
                                                }}
                                            >
                                                <Person
                                                    color="primary"
                                                    sx={{ mr: 1, fontSize: 20 }}
                                                />
                                                <Typography variant="body2">
                                                    <strong>Professeur:</strong>{" "}
                                                    {group.instructor}
                                                </Typography>
                                            </Box>

                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    mb: 1.5,
                                                }}
                                            >
                                                <LocationOn
                                                    color="error"
                                                    sx={{ mr: 1, fontSize: 20 }}
                                                />
                                                <Typography variant="body2">
                                                    <strong>Lieu:</strong>{" "}
                                                    {group.location}
                                                </Typography>
                                            </Box>

                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                }}
                                            >
                                                <Schedule
                                                    color="info"
                                                    sx={{ mr: 1, fontSize: 20 }}
                                                />
                                                <Typography variant="body2">
                                                    <strong>Horaire:</strong>{" "}
                                                    {group.schedule}
                                                </Typography>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                )
            )}
        </Container>
    );
};

export default GroupsPage;

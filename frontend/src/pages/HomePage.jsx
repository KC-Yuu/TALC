import React, { useState, useEffect } from "react";
import {
    Typography,
    Grid,
    Box,
    Container,
    CircularProgress,
    Alert,
    Paper,
    Button,
    Divider,
    Card,
    CardContent,
    CardMedia,
    Avatar,
    Chip,
    Stack,
    useTheme,
    alpha,
} from "@mui/material";
import {
    ArrowForward,
    Event,
    Favorite,
    CalendarToday,
    ArrowDownward,
    Star,
    LocationOn,
    AccessTime,
} from "@mui/icons-material";
import PostCard from "../components/posts/PostCard";
import HeroSection from "../components/home/HeroSection";
import { Link as RouterLink } from "react-router-dom";
import axios from "axios";
import {
    posts as mockPosts,
    events as mockEvents,
    testimonials as mockTestimonials,
} from "../mocks";

const HomePage = () => {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const theme = useTheme();

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setLoading(true);
                // Dans un environnement de développement, nous utilisons des données fictives
                // En production, nous utiliserons l'API
                // const response = await axios.get('/api/posts/');
                // setPosts(response.data);

                // Données fictives pour le développement
                setTimeout(() => {
                    setPosts(mockPosts);
                    setLoading(false);
                }, 1000);
            } catch (err) {
                console.error("Erreur lors de la récupération des posts:", err);
                setError(
                    "Impossible de charger les posts. Veuillez réessayer plus tard."
                );
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    // Données pour la section des événements à venir
    const upcomingEvents = mockEvents;

    // Données pour la section témoignages
    const testimonials = mockTestimonials;

    const scrollToContent = () => {
        window.scrollTo({
            top: window.innerHeight * 0.9,
            behavior: "smooth",
        });
    };

    return (
        <Box
            className="home-page-container"
            sx={{
                width: "100%",
                maxWidth: "100%",
                overflowX: "hidden",
                margin: 0,
                padding: 0,
            }}
        >
            <Box
                sx={{
                    width: "100%",
                    padding: 0,
                    margin: 0,
                    overflow: "hidden",
                }}
            >
                <HeroSection />

                {/* Section À propos */}
                <Container maxWidth="lg">
                    <Box
                        sx={{
                            py: { xs: 6, md: 10 },
                            display: "flex",
                            flexDirection: { xs: "column", md: "row" },
                            alignItems: "center",
                            gap: 6,
                            position: "relative",
                            overflow: "hidden",
                        }}
                    >
                        <Box
                            sx={{
                                position: "absolute",
                                width: "300px",
                                height: "300px",
                                borderRadius: "50%",
                                filter: "blur(60px)",
                                top: "-100px",
                                left: "-100px",
                                zIndex: -1,
                            }}
                        />
                        <Box
                            sx={{
                                flex: 1,
                                animation: "slideUp 0.8s ease-out",
                            }}
                        >
                            <Typography
                                variant="h2"
                                component="h2"
                                gutterBottom
                                sx={{
                                    fontWeight: 700,
                                    mb: 3,
                                    position: "relative",
                                    display: "inline-block",
                                    "&::after": {
                                        content: '""',
                                        position: "absolute",
                                        bottom: -10,
                                        left: 0,
                                        width: 80,
                                        height: 4,
                                        backgroundColor: "secondary.main",
                                        borderRadius: 2,
                                    },
                                }}
                            >
                                Notre Passion
                            </Typography>
                            <Typography
                                variant="h5"
                                color="text.secondary"
                                sx={{
                                    mb: 3,
                                    fontWeight: 300,
                                    lineHeight: 1.6,
                                }}
                            >
                                Bienvenue dans l'univers de TALC
                            </Typography>
                            <Typography
                                variant="body1"
                                paragraph
                                sx={{
                                    mb: 4,
                                    lineHeight: 1.8,
                                    fontSize: "1.1rem",
                                }}
                            >
                                Fondé en 2010, TALC est un groupe de danse
                                passionné qui réunit des danseurs de tous
                                niveaux. Notre philosophie est simple : la danse
                                est un langage universel qui permet à chacun de
                                s'exprimer librement. Que vous soyez débutant ou
                                expérimenté, rejoignez-nous pour partager cette
                                passion commune.
                            </Typography>
                            <Button
                                variant="contained"
                                color="secondary"
                                size="large"
                                endIcon={<ArrowForward />}
                                component={RouterLink}
                                to="/gallery"
                                className="btn-gradient"
                                sx={{
                                    px: 4,
                                    py: 1.5,
                                    borderRadius: 8,
                                    fontWeight: 600,
                                    boxShadow:
                                        "0 8px 20px rgba(233, 30, 99, 0.3)",
                                }}
                            >
                                Découvrir notre univers
                            </Button>
                        </Box>
                        <Box
                            sx={{
                                flex: 1,
                                display: "flex",
                                justifyContent: "center",
                                animation: "fadeIn 1s ease-out",
                            }}
                        >
                            <Paper
                                elevation={16}
                                sx={{
                                    borderRadius: 4,
                                    overflow: "hidden",
                                    transform: "rotate(2deg)",
                                    width: "100%",
                                    maxWidth: 500,
                                    position: "relative",
                                    "&::before": {
                                        content: '""',
                                        position: "absolute",
                                        top: 0,
                                        left: 0,
                                        width: "100%",
                                        height: "100%",
                                        background:
                                            "linear-gradient(135deg, rgba(142, 36, 170, 0.3) 0%, rgba(233, 30, 99, 0.3) 100%)",
                                        zIndex: 2,
                                        opacity: 0.4,
                                    },
                                }}
                            >
                                <img
                                    src="https://images.pexels.com/photos/2188012/pexels-photo-2188012.jpeg"
                                    alt="TALC Dance Group"
                                    style={{
                                        width: "100%",
                                        height: "auto",
                                        display: "block",
                                        objectFit: "cover",
                                    }}
                                />
                            </Paper>
                        </Box>
                    </Box>
                </Container>

                {/* Section Événements à venir */}
                <Box
                    sx={{
                        py: { xs: 6, md: 10 },
                        background:
                            "linear-gradient(to right, rgba(142, 36, 170, 0.05), rgba(233, 30, 99, 0.05))",
                        position: "relative",
                        overflow: "hidden",
                    }}
                >
                    <Container maxWidth="lg">
                        <Box sx={{ textAlign: "center", mb: 6 }}>
                            <Chip
                                label="ÉVÉNEMENTS"
                                color="secondary"
                                sx={{
                                    mb: 2,
                                    fontWeight: 600,
                                    fontSize: "0.85rem",
                                    px: 2,
                                    py: 2.5,
                                    borderRadius: 5,
                                }}
                                icon={<Event />}
                            />
                            <Typography
                                variant="h3"
                                component="h2"
                                gutterBottom
                                sx={{
                                    fontWeight: 700,
                                    mb: 2,
                                }}
                            >
                                NOS PROCHAINS RENDEZ-VOUS
                            </Typography>
                            <Typography
                                variant="h6"
                                color="text.secondary"
                                sx={{
                                    maxWidth: 700,
                                    mx: "auto",
                                    fontWeight: 400,
                                    mb: 5,
                                }}
                            >
                                Retrouvez-nous lors de nos prochains événements
                                et partagez avec nous des moments inoubliables
                            </Typography>
                        </Box>

                        <Grid container spacing={4}>
                            {upcomingEvents.map((event) => (
                                <Grid item xs={12} md={4} key={event.id}>
                                    <Card
                                        sx={{
                                            height: "100%",
                                            display: "flex",
                                            flexDirection: "column",
                                            borderRadius: 4,
                                            overflow: "hidden",
                                            boxShadow:
                                                "0 10px 30px rgba(0,0,0,0.1)",
                                            transition: "all 0.3s ease",
                                            "&:hover": {
                                                transform: "translateY(-10px)",
                                                boxShadow:
                                                    "0 15px 35px rgba(0,0,0,0.15)",
                                            },
                                        }}
                                    >
                                        <Box sx={{ position: "relative" }}>
                                            <CardMedia
                                                component="img"
                                                height="200"
                                                image={event.image}
                                                alt={event.title}
                                            />
                                            <Box
                                                sx={{
                                                    position: "absolute",
                                                    top: 16,
                                                    right: 16,
                                                    backgroundColor:
                                                        "secondary.main",
                                                    color: "white",
                                                    borderRadius: 2,
                                                    px: 2,
                                                    py: 1,
                                                    fontWeight: 600,
                                                    fontSize: "0.875rem",
                                                    boxShadow:
                                                        "0 4px 10px rgba(0,0,0,0.1)",
                                                }}
                                            >
                                                <CalendarToday
                                                    fontSize="small"
                                                    sx={{ mr: 0.5 }}
                                                />
                                                {event.date}
                                            </Box>
                                            <Box
                                                sx={{
                                                    position: "absolute",
                                                    bottom: 16,
                                                    left: 16,
                                                    backgroundColor:
                                                        "background.paper",
                                                    color: "text.primary",
                                                    borderRadius: 2,
                                                    px: 2,
                                                    py: 1,
                                                    display: "flex",
                                                    alignItems: "center",
                                                    fontSize: "0.875rem",
                                                    boxShadow:
                                                        "0 4px 10px rgba(0,0,0,0.1)",
                                                }}
                                            >
                                                <LocationOn
                                                    fontSize="small"
                                                    sx={{ mr: 0.5 }}
                                                />
                                                {event.location}
                                            </Box>
                                        </Box>
                                        <CardContent sx={{ p: 3, flexGrow: 1 }}>
                                            <Typography
                                                variant="h5"
                                                component="h3"
                                                gutterBottom
                                                sx={{
                                                    fontWeight: 600,
                                                    mb: 1.5,
                                                }}
                                            >
                                                {event.title}
                                            </Typography>
                                            <Box
                                                sx={{
                                                    display: "flex",
                                                    alignItems: "center",
                                                    mt: 2,
                                                }}
                                            >
                                                <Button
                                                    variant="outlined"
                                                    color="secondary"
                                                    size="small"
                                                    sx={{
                                                        borderRadius: 6,
                                                        px: 2,
                                                        fontWeight: 500,
                                                        "&:hover": {
                                                            backgroundColor:
                                                                "rgba(233, 30, 99, 0.08)",
                                                        },
                                                    }}
                                                >
                                                    En savoir plus
                                                </Button>
                                            </Box>
                                        </CardContent>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>

                        <Box sx={{ textAlign: "center", mt: 6 }}>
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                component={RouterLink}
                                to="/events"
                                endIcon={<ArrowForward />}
                                sx={{
                                    px: 4,
                                    py: 1.5,
                                    borderRadius: 8,
                                    fontWeight: 600,
                                    boxShadow:
                                        "0 8px 20px rgba(142, 36, 170, 0.3)",
                                }}
                            >
                                Voir tous nos événements
                            </Button>
                        </Box>
                    </Container>
                </Box>
            </Box>

            {/* Section Témoignages */}
            <Container maxWidth="lg">
                <Box sx={{ py: { xs: 6, md: 10 } }}>
                    <Box sx={{ textAlign: "center", mb: 6 }}>
                        <Chip
                            label="TÉMOIGNAGES"
                            color="primary"
                            sx={{
                                mb: 2,
                                fontWeight: 600,
                                fontSize: "0.85rem",
                                px: 2,
                                py: 2.5,
                                borderRadius: 5,
                            }}
                            icon={<Star />}
                        />
                        <Typography
                            variant="h3"
                            component="h2"
                            gutterBottom
                            sx={{
                                fontWeight: 700,
                                mb: 2,
                            }}
                        >
                            Ce que disent les gens
                        </Typography>
                        <Typography
                            variant="h6"
                            color="text.secondary"
                            sx={{
                                maxWidth: 700,
                                mx: "auto",
                                fontWeight: 400,
                                mb: 5,
                            }}
                        >
                            Découvrez les expériences de ceux qui partagent
                            notre passion pour la danse
                        </Typography>
                    </Box>

                    <Grid container spacing={4} justifyContent="center">
                        {testimonials.map((testimonial) => (
                            <Grid item xs={12} md={6} key={testimonial.id}>
                                <Paper
                                    elevation={4}
                                    sx={{
                                        p: 4,
                                        borderRadius: 4,
                                        height: "100%",
                                        position: "relative",
                                        overflow: "hidden",
                                        transition: "all 0.3s ease",
                                        "&:hover": {
                                            transform: "translateY(-5px)",
                                            boxShadow:
                                                "0 12px 30px rgba(0,0,0,0.12)",
                                        },
                                        "&::before": {
                                            content: '"\u201C"',
                                            position: "absolute",
                                            top: 10,
                                            left: 20,
                                            fontSize: "8rem",
                                            color: alpha(
                                                theme.palette.primary.main,
                                                0.07
                                            ),
                                            fontFamily: "Georgia, serif",
                                            lineHeight: 1,
                                            zIndex: 0,
                                        },
                                    }}
                                >
                                    <Box
                                        sx={{ position: "relative", zIndex: 1 }}
                                    >
                                        <Typography
                                            variant="body1"
                                            paragraph
                                            sx={{
                                                mb: 4,
                                                fontStyle: "italic",
                                                lineHeight: 1.8,
                                                fontSize: "1.1rem",
                                            }}
                                        >
                                            {testimonial.content}
                                        </Typography>

                                        <Box
                                            sx={{
                                                display: "flex",
                                                alignItems: "center",
                                            }}
                                        >
                                            <Avatar
                                                src={testimonial.avatar}
                                                alt={testimonial.name}
                                                sx={{
                                                    width: 60,
                                                    height: 60,
                                                    mr: 2,
                                                    border: "3px solid",
                                                    borderColor:
                                                        "secondary.light",
                                                }}
                                            />
                                            <Box>
                                                <Typography
                                                    variant="h6"
                                                    sx={{ fontWeight: 600 }}
                                                >
                                                    {testimonial.name}
                                                </Typography>
                                                <Typography
                                                    variant="body2"
                                                    color="text.secondary"
                                                >
                                                    {testimonial.role}
                                                </Typography>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Paper>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>

            {/* Section Actualités récentes */}
            <Box
                sx={{
                    py: { xs: 6, md: 10 },
                    background:
                        "linear-gradient(to right, rgba(142, 36, 170, 0.05), rgba(233, 30, 99, 0.05))",
                }}
            >
                <Container maxWidth="lg">
                    <Box sx={{ textAlign: "center", mb: 6 }}>
                        <Chip
                            label="ACTUALITÉS"
                            color="secondary"
                            sx={{
                                mb: 2,
                                fontWeight: 600,
                                fontSize: "0.85rem",
                                px: 2,
                                py: 2.5,
                                borderRadius: 5,
                            }}
                            icon={<Favorite />}
                        />
                        <Typography
                            variant="h3"
                            component="h2"
                            gutterBottom
                            sx={{
                                fontWeight: 700,
                                mb: 2,
                            }}
                        >
                            Nos dernières actualités
                        </Typography>
                        <Typography
                            variant="h6"
                            color="text.secondary"
                            sx={{
                                maxWidth: 700,
                                mx: "auto",
                                fontWeight: 400,
                                mb: 5,
                            }}
                        >
                            Restez informés des dernières nouvelles et
                            événements de notre groupe
                        </Typography>
                    </Box>

                    {loading ? (
                        <Box
                            sx={{
                                display: "flex",
                                justifyContent: "center",
                                my: 8,
                            }}
                        >
                            <CircularProgress color="secondary" />
                        </Box>
                    ) : error ? (
                        <Alert severity="error" sx={{ mt: 2 }}>
                            {error}
                        </Alert>
                    ) : (
                        <Grid container spacing={4}>
                            {posts.map((post) => (
                                <Grid item xs={12} md={4} key={post.id}>
                                    <PostCard post={post} />
                                </Grid>
                            ))}
                        </Grid>
                    )}

                    <Box sx={{ textAlign: "center", mt: 6 }}>
                        <Button
                            variant="contained"
                            color="secondary"
                            size="large"
                            component={RouterLink}
                            to="/blog"
                            endIcon={<ArrowForward />}
                            sx={{
                                px: 4,
                                py: 1.5,
                                borderRadius: 8,
                                fontWeight: 600,
                                boxShadow: "0 8px 20px rgba(233, 30, 99, 0.3)",
                            }}
                        >
                            Voir toutes les actualités
                        </Button>
                    </Box>
                </Container>
            </Box>

            {/* Section Appel à l'action */}
            <Box
                sx={{
                    py: { xs: 8, md: 12 },
                    position: "relative",
                    overflow: "hidden",
                }}
            >
                <Box
                    sx={{
                        position: "absolute",
                        width: "500px",
                        height: "500px",
                        borderRadius: "50%",
                        background: alpha(theme.palette.secondary.main, 0.05),
                        filter: "blur(80px)",
                        top: "-200px",
                        right: "-200px",
                        zIndex: -1,
                    }}
                />
                <Box
                    sx={{
                        position: "absolute",
                        width: "400px",
                        height: "400px",
                        borderRadius: "50%",
                        background: alpha(theme.palette.primary.main, 0.05),
                        filter: "blur(80px)",
                        bottom: "-150px",
                        left: "-150px",
                        zIndex: -1,
                    }}
                />
                <Container maxWidth="md">
                    <Paper
                        elevation={8}
                        sx={{
                            p: { xs: 4, md: 6 },
                            borderRadius: 4,
                            textAlign: "center",
                            background:
                                "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)",
                            backdropFilter: "blur(10px)",
                            boxShadow: "0 15px 50px rgba(0,0,0,0.1)",
                        }}
                    >
                        <Typography
                            variant="h3"
                            component="h2"
                            gutterBottom
                            sx={{
                                fontWeight: 700,
                                mb: 3,
                                background:
                                    "linear-gradient(45deg, #8e24aa, #e91e63)",
                                WebkitBackgroundClip: "text",
                                WebkitTextFillColor: "transparent",
                            }}
                        >
                            Rejoignez notre communauté
                        </Typography>
                        <Typography
                            variant="h6"
                            sx={{
                                mb: 4,
                                fontWeight: 400,
                                maxWidth: 700,
                                mx: "auto",
                                color: "text.secondary",
                                lineHeight: 1.6,
                            }}
                        >
                            Que vous soyez débutant ou danseur expérimenté, nous
                            vous accueillons à bras ouverts. Venez partager
                            votre passion pour la danse avec nous !
                        </Typography>
                        <Stack
                            direction={{ xs: "column", sm: "row" }}
                            spacing={2}
                            justifyContent="center"
                            sx={{ mt: 4 }}
                        >
                            <Button
                                variant="contained"
                                color="primary"
                                size="large"
                                component={RouterLink}
                                to="/register"
                                sx={{
                                    px: 4,
                                    py: 1.5,
                                    borderRadius: 8,
                                    fontWeight: 600,
                                    borderWidth: 2,
                                    "&:hover": {
                                        borderWidth: 2,
                                    },
                                }}
                            >
                                Nous contacter
                            </Button>
                        </Stack>
                    </Paper>
                </Container>
            </Box>
        </Box>
    );
};

export default HomePage;

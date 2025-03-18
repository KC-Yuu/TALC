import React from "react";
import { Link as RouterLink } from "react-router-dom";
import {
    Box,
    Container,
    Grid,
    Typography,
    Link,
    IconButton,
    Divider,
    Paper,
    Stack,
} from "@mui/material";
import {
    Facebook as FacebookIcon,
    Instagram as InstagramIcon,
    YouTube as YouTubeIcon,
    LocationOn,
    Email,
    Phone,
} from "@mui/icons-material";

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <Box
            component="footer"
            sx={{
                py: 6,
                mt: "auto",
                background: "linear-gradient(45deg, #5c007a 0%, #8e24aa 100%)",
                color: "white",
                boxShadow: "0 -4px 20px rgba(0,0,0,0.1)",
                position: "relative",
                overflow: "hidden",
                "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    backgroundImage:
                        "radial-gradient(circle at 20% 150%, rgba(233, 30, 99, 0.15) 0%, transparent 50%)",
                    zIndex: 1,
                },
            }}
        >
            <Container maxWidth="lg" sx={{ position: "relative", zIndex: 2 }}>
                <Grid container spacing={5}>
                    <Grid item xs={12} sm={4}>
                        <Paper
                            elevation={0}
                            sx={{
                                p: 3,
                                backgroundColor: "rgba(255,255,255,0.05)",
                                backdropFilter: "blur(10px)",
                                borderRadius: 3,
                                height: "100%",
                                transition: "transform 0.3s ease",
                                "&:hover": {
                                    transform: "translateY(-5px)",
                                },
                            }}
                        >
                            <Typography
                                variant="h5"
                                gutterBottom
                                className="dancing-font"
                                sx={{
                                    fontWeight: 700,
                                    mb: 2,
                                    background:
                                        "linear-gradient(45deg, #fff, #e0e0e0)",
                                    WebkitBackgroundClip: "text",
                                    WebkitTextFillColor: "transparent",
                                }}
                            >
                                TALC
                            </Typography>
                            <Typography
                                variant="body2"
                                sx={{ mb: 3, lineHeight: 1.7 }}
                            >
                                Groupe de danse passionné par l'art et
                                l'expression corporelle. Rejoignez notre
                                communauté pour partager votre passion.
                            </Typography>
                            <Stack direction="row" spacing={1} sx={{ mt: 3 }}>
                                <IconButton
                                    color="inherit"
                                    aria-label="facebook"
                                    component="a"
                                    href="https://facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        backgroundColor:
                                            "rgba(255,255,255,0.1)",
                                        "&:hover": {
                                            backgroundColor:
                                                "rgba(255,255,255,0.2)",
                                            transform: "translateY(-3px)",
                                        },
                                        transition: "all 0.3s ease",
                                    }}
                                >
                                    <FacebookIcon />
                                </IconButton>
                                <IconButton
                                    color="inherit"
                                    aria-label="instagram"
                                    component="a"
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        backgroundColor:
                                            "rgba(255,255,255,0.1)",
                                        "&:hover": {
                                            backgroundColor:
                                                "rgba(255,255,255,0.2)",
                                            transform: "translateY(-3px)",
                                        },
                                        transition: "all 0.3s ease",
                                    }}
                                >
                                    <InstagramIcon />
                                </IconButton>
                                <IconButton
                                    color="inherit"
                                    aria-label="youtube"
                                    component="a"
                                    href="https://youtube.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{
                                        backgroundColor:
                                            "rgba(255,255,255,0.1)",
                                        "&:hover": {
                                            backgroundColor:
                                                "rgba(255,255,255,0.2)",
                                            transform: "translateY(-3px)",
                                        },
                                        transition: "all 0.3s ease",
                                    }}
                                >
                                    <YouTubeIcon />
                                </IconButton>
                            </Stack>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Paper
                            elevation={0}
                            sx={{
                                p: 3,
                                backgroundColor: "rgba(255,255,255,0.05)",
                                backdropFilter: "blur(10px)",
                                borderRadius: 3,
                                height: "100%",
                                transition: "transform 0.3s ease",
                                "&:hover": {
                                    transform: "translateY(-5px)",
                                },
                            }}
                        >
                            <Typography
                                variant="h6"
                                gutterBottom
                                sx={{
                                    fontWeight: 600,
                                    mb: 3,
                                    position: "relative",
                                    "&::after": {
                                        content: '""',
                                        position: "absolute",
                                        bottom: -8,
                                        left: 0,
                                        width: 40,
                                        height: 3,
                                        backgroundColor: "secondary.main",
                                        borderRadius: 4,
                                    },
                                }}
                            >
                                Liens Rapides
                            </Typography>
                            <Stack spacing={1.5}>
                                <Link
                                    component={RouterLink}
                                    to="/"
                                    color="inherit"
                                    sx={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        transition: "all 0.2s ease",
                                        "&:hover": {
                                            color: "secondary.light",
                                            transform: "translateX(5px)",
                                        },
                                    }}
                                >
                                    Accueil
                                </Link>
                                <Link
                                    component={RouterLink}
                                    to="/gallery"
                                    color="inherit"
                                    sx={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        transition: "all 0.2s ease",
                                        "&:hover": {
                                            color: "secondary.light",
                                            transform: "translateX(5px)",
                                        },
                                    }}
                                >
                                    Galerie
                                </Link>
                                <Link
                                    component={RouterLink}
                                    to="/login"
                                    color="inherit"
                                    sx={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        transition: "all 0.2s ease",
                                        "&:hover": {
                                            color: "secondary.light",
                                            transform: "translateX(5px)",
                                        },
                                    }}
                                >
                                    Connexion
                                </Link>
                            </Stack>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} sm={4}>
                        <Paper
                            elevation={0}
                            sx={{
                                p: 3,
                                backgroundColor: "rgba(255,255,255,0.05)",
                                backdropFilter: "blur(10px)",
                                borderRadius: 3,
                                height: "100%",
                                transition: "transform 0.3s ease",
                                "&:hover": {
                                    transform: "translateY(-5px)",
                                },
                            }}
                        >
                            <Typography
                                variant="h6"
                                gutterBottom
                                sx={{
                                    fontWeight: 600,
                                    mb: 3,
                                    position: "relative",
                                    "&::after": {
                                        content: '""',
                                        position: "absolute",
                                        bottom: -8,
                                        left: 0,
                                        width: 40,
                                        height: 3,
                                        backgroundColor: "secondary.main",
                                        borderRadius: 4,
                                    },
                                }}
                            >
                                Contact
                            </Typography>
                            <Stack spacing={2}>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <LocationOn
                                        sx={{
                                            mr: 1.5,
                                            color: "secondary.light",
                                        }}
                                    />
                                    <Typography variant="body2">
                                        123 Avenue de la Danse, 75000 Paris
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <Email
                                        sx={{
                                            mr: 1.5,
                                            color: "secondary.light",
                                        }}
                                    />
                                    <Typography variant="body2">
                                        contact@talc-danse.fr
                                    </Typography>
                                </Box>
                                <Box
                                    sx={{
                                        display: "flex",
                                        alignItems: "center",
                                    }}
                                >
                                    <Phone
                                        sx={{
                                            mr: 1.5,
                                            color: "secondary.light",
                                        }}
                                    />
                                    <Typography variant="body2">
                                        +33 1 23 45 67 89
                                    </Typography>
                                </Box>
                            </Stack>
                        </Paper>
                    </Grid>
                </Grid>

                <Divider sx={{ my: 4, borderColor: "rgba(255,255,255,0.1)" }} />

                <Box
                    sx={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: { xs: "column", sm: "row" },
                        textAlign: "center",
                    }}
                >
                    <Typography
                        variant="body2"
                        sx={{
                            opacity: 0.8,
                            letterSpacing: 0.5,
                        }}
                    >
                        © {currentYear} TALC. Tous droits réservés.
                    </Typography>
                    <Typography
                        variant="body2"
                        sx={{
                            ml: { xs: 0, sm: 2 },
                            mt: { xs: 1, sm: 0 },
                            opacity: 0.6,
                        }}
                    >
                        Conçu avec passion pour la danse
                    </Typography>
                </Box>
            </Container>
        </Box>
    );
};

export default Footer;

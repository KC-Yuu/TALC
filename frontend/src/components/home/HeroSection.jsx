import React from "react";
import {
    Box,
    Typography,
    Button,
    Container,
    Stack,
    useTheme,
    alpha,
    Paper,
    Grid,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import { ArrowDownward } from "@mui/icons-material";

const HeroSection = () => {
    const theme = useTheme();

    const scrollToContent = () => {
        window.scrollTo({
            top: window.innerHeight * 0.9,
            behavior: "smooth",
        });
    };

    return (
        <Box
            sx={{
                position: "relative",
                height: "100vh",
                width: "100%",
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                padding: 0,
                margin: 0,
                "&::before": {
                    content: '""',
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    background: "linear-gradient(to right, rgba(142, 36, 170, 0.9), rgba(233, 30, 99, 0.9))",
                    zIndex: 1,
                }
            }}
        >
            {/* Background image */}
            <Box
                component="img"
                src="https://images.pexels.com/photos/358010/pexels-photo-358010.jpeg"
                alt="Dance background"
                sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    objectPosition: "center",
                    zIndex: 0,
                }}
            />
            
            {/* Content */}
            <Container 
                maxWidth="lg" 
                sx={{ 
                    position: "relative", 
                    zIndex: 2, 
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    height: "100%"
                }}
            >
                <Grid container spacing={4} alignItems="center" justifyContent="center">
                    {/* Text content - centered on mobile, left on desktop */}
                    <Grid item xs={12} md={6} sx={{ textAlign: { xs: "center", md: "left" } }}>
                        <Typography
                            variant="h1"
                            component="h1"
                            sx={{
                                color: "white",
                                fontWeight: 700,
                                fontSize: { xs: "3rem", md: "4rem", lg: "5rem" },
                                mb: 2,
                                textShadow: "0 2px 10px rgba(0,0,0,0.3)",
                                fontFamily: "'Dancing Script', cursive",
                            }}
                        >
                            TALC
                        </Typography>
                        <Typography
                            variant="h4"
                            sx={{
                                color: "white",
                                mb: 4,
                                fontWeight: 300,
                                textShadow: "0 2px 10px rgba(0,0,0,0.3)",
                                maxWidth: "600px",
                                mx: { xs: "auto", md: 0 }
                            }}
                        >
                            Passionné par l'art et l'expression corporelle
                        </Typography>
                        <Stack 
                            direction={{ xs: "column", sm: "row" }} 
                            spacing={2}
                            sx={{ 
                                justifyContent: { xs: "center", md: "flex-start" } 
                            }}
                        >
                            <Button
                                variant="contained"
                                size="large"
                                component={RouterLink}
                                to="/gallery"
                                sx={{
                                    bgcolor: "white",
                                    color: "white",
                                    px: 4,
                                    py: 1.5,
                                    borderRadius: 8,
                                    fontWeight: 600,
                                    fontSize: "1rem",
                                    "&:hover": {
                                        bgcolor: "white",
                                        transform: "translateY(-3px)",
                                        boxShadow: "0 12px 25px rgba(0,0,0,0.3)",
                                    }
                                }}
                            >
                                Découvrir notre galerie
                            </Button>
                            <Button
                                variant="outlined"
                                size="large"
                                component={RouterLink}
                                to="/register"
                                sx={{
                                    color: "white",
                                    borderColor: "white",
                                    px: 4,
                                    py: 1.5,
                                    borderRadius: 8,
                                    fontWeight: 600,
                                    fontSize: "1rem",
                                    borderWidth: 2,
                                    "&:hover": {
                                        borderColor: "white",
                                        borderWidth: 2,
                                        bgcolor: alpha(theme.palette.common.white, 0.1),
                                    }
                                }}
                            >
                                Rejoindre la communauté
                            </Button>
                        </Stack>
                    </Grid>
                    
                    {/* Right side with dancing figures - visible only on desktop */}
                    <Grid item xs={12} md={6} sx={{ 
                        position: "relative", 
                        display: { xs: "none", md: "flex" },
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%"
                    }}>
                        <Box sx={{ 
                            position: "relative",
                            width: "100%",
                            height: "400px"
                        }}>
                            <Box
                                sx={{
                                    position: "absolute",
                                    right: { md: "10%", lg: "20%" },
                                    bottom: { md: "10%", lg: "20%" },
                                    opacity: 0.9,
                                    transform: "rotate(10deg)",
                                    animation: "float 6s ease-in-out infinite",
                                    "@keyframes float": {
                                        "0%": { transform: "translateY(0px) rotate(10deg)" },
                                        "50%": { transform: "translateY(-20px) rotate(15deg)" },
                                        "100%": { transform: "translateY(0px) rotate(10deg)" }
                                    }
                                }}
                            >
                                <img 
                                    src="https://i.postimg.cc/13rvzxs1/0aa0e4af72cd7c58db04feaa2febb1cd-removebg-preview.png" 
                                    alt="Silhouette de danseur"
                                    style={{ 
                                        width: "120px", 
                                        height: "auto", 
                                        filter: "brightness(0) invert(1)",
                                        opacity: 0.9
                                    }}
                                />
                            </Box>
                            
                            <Box
                                sx={{
                                    position: "absolute",
                                    left: { md: "10%", lg: "20%" },
                                    top: { md: "10%", lg: "20%" },
                                    opacity: 0.9,
                                    transform: "rotate(-5deg)",
                                    animation: "float2 7s ease-in-out infinite",
                                    "@keyframes float2": {
                                        "0%": { transform: "translateY(0px) rotate(-5deg)" },
                                        "50%": { transform: "translateY(-30px) rotate(-10deg)" },
                                        "100%": { transform: "translateY(0px) rotate(-5deg)" }
                                    }
                                }}
                            >
                                <img 
                                    src="https://i.postimg.cc/rs2VgRb4/b3afae4a599aebda49798fdf8fdfd5c8-removebg-preview.png" 
                                    alt="Silhouette de danseur"
                                    style={{ 
                                        width: "220px", 
                                        height: "auto", 
                                        filter: "brightness(0) invert(1)",
                                        opacity: 0.9
                                    }}
                                />
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
                
                {/* Scroll down indicator */}
                <Box
                    sx={{
                        position: "absolute",
                        bottom: 40,
                        left: "50%",
                        transform: "translateX(-50%)",
                        textAlign: "center",
                        cursor: "pointer",
                        animation: "bounce 2s infinite",
                        "@keyframes bounce": {
                            "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0) translateX(-50%)" },
                            "40%": { transform: "translateY(-20px) translateX(-50%)" },
                            "60%": { transform: "translateY(-10px) translateX(-50%)" }
                        }
                    }}
                    onClick={scrollToContent}
                >
                    <Typography
                        variant="body2"
                        sx={{
                            color: "white",
                            mb: 1,
                        }}
                    >
                        Découvrir plus
                    </Typography>
                    <ArrowDownward sx={{ color: "white" , mb: 5}} />
                </Box>
            </Container>
        </Box>
    );
};

export default HeroSection;

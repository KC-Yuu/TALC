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
    TextField,
    InputAdornment,
    MenuItem,
    Select,
    FormControl,
    InputLabel,
    Pagination,
    Stack,
    Chip,
    useTheme,
    alpha,
} from "@mui/material";
import {
    Search,
    FilterList,
    Favorite,
    SortOutlined,
} from "@mui/icons-material";
import PostCard from "../components/posts/PostCard";
import { posts as mockPosts } from "../mocks";

const NewsPage = () => {
    const [posts, setPosts] = useState([]);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [sortBy, setSortBy] = useState("date-desc");
    const [page, setPage] = useState(1);
    const [postsPerPage] = useState(6);
    const theme = useTheme();

    // Récupération des posts
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setLoading(true);
                // Dans un environnement de développement, nous utilisons des données fictives
                // En production, nous utiliserons l'API
                // const response = await axios.get('/api/posts/');
                // setPosts(response.data);

                // Simuler plus de posts pour la pagination
                const extendedPosts = [...mockPosts];
                for (let i = 4; i <= 15; i++) {
                    extendedPosts.push({
                        id: i,
                        title: `Actualité ${i}`,
                        content: `Contenu de l'actualité ${i}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`,
                        image: `https://source.unsplash.com/random/800x600?dance&sig=${i}`,
                        author:
                            i % 2 === 0 ? "Thomas Martin" : "Sophie Leclerc",
                        created_at: new Date(
                            Date.now() - i * 24 * 60 * 60 * 1000
                        ).toISOString(),
                        likes: Math.floor(Math.random() * 50),
                    });
                }

                setTimeout(() => {
                    setPosts(extendedPosts);
                    setFilteredPosts(extendedPosts);
                    setLoading(false);
                }, 1000);
            } catch (err) {
                console.error("Erreur lors de la récupération des posts:", err);
                setError(
                    "Impossible de charger les actualités. Veuillez réessayer plus tard."
                );
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    // Filtrage et tri des posts
    useEffect(() => {
        if (!posts.length) return;

        let result = [...posts];

        // Filtrage par recherche
        if (searchTerm) {
            result = result.filter(
                (post) =>
                    post.title
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                    post.content
                        .toLowerCase()
                        .includes(searchTerm.toLowerCase()) ||
                    post.author.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }

        // Tri des posts
        switch (sortBy) {
            case "date-asc":
                result.sort(
                    (a, b) => new Date(a.created_at) - new Date(b.created_at)
                );
                break;
            case "date-desc":
                result.sort(
                    (a, b) => new Date(b.created_at) - new Date(a.created_at)
                );
                break;
            case "likes":
                result.sort((a, b) => b.likes - a.likes);
                break;
            case "title":
                result.sort((a, b) => a.title.localeCompare(b.title));
                break;
            default:
                break;
        }

        setFilteredPosts(result);
    }, [posts, searchTerm, sortBy]);

    // Gestion de la pagination
    const handlePageChange = (event, value) => {
        setPage(value);
        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    // Calcul des posts à afficher pour la page actuelle
    const indexOfLastPost = page * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
    const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

    return (
        <Box
            sx={{
                width: "100%",
                py: { xs: 4, md: 6 },
                background:
                    "linear-gradient(to right, rgba(142, 36, 170, 0.05), rgba(233, 30, 99, 0.05))",
            }}
        >
            <Container maxWidth="lg">
                {/* En-tête de la page */}
                <Box sx={{ textAlign: "center", mb: 6 }}>
                    <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
                        <Chip
                            label="ACTUALITÉS"
                            color="secondary"
                            sx={{
                                fontWeight: 600,
                                fontSize: "0.85rem",
                                px: 2,
                                py: 2.5,
                                borderRadius: 5,
                            }}
                            icon={<Favorite />}
                        />
                    </Box>
                    <Typography
                        variant="h2"
                        component="h1"
                        gutterBottom
                        sx={{
                            fontWeight: 700,
                            mb: 2,
                            position: "relative",
                            display: "inline-block",
                            "&::after": {
                                content: '""',
                                position: "absolute",
                                bottom: -10,
                                left: "50%",
                                transform: "translateX(-50%)",
                                width: 80,
                                height: 4,
                                backgroundColor: "secondary.main",
                                borderRadius: 2,
                            },
                        }}
                    >
                        Toutes nos actualités
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
                        Restez informés des dernières nouvelles et actualités des
                        groupes
                    </Typography>
                </Box>

                {/* Barre de recherche et filtres */}
                <Paper
                    elevation={3}
                    sx={{
                        p: 3,
                        mb: 4,
                        borderRadius: 3,
                        background:
                            "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)",
                    }}
                >
                    <Grid container spacing={2} alignItems="center">
                        <Grid item xs={12} md={6}>
                            <TextField
                                fullWidth
                                placeholder="Rechercher une actualité..."
                                variant="outlined"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                InputProps={{
                                    startAdornment: (
                                        <InputAdornment position="start">
                                            <Search />
                                        </InputAdornment>
                                    ),
                                    sx: { borderRadius: 8 },
                                }}
                            />
                        </Grid>
                        <Grid
                            item
                            xs={12}
                            md={6}
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: {
                                    xs: "flex-start",
                                    md: "flex-end",
                                },
                            }}
                        >
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 2,
                                }}
                            >
                                <SortOutlined color="action" sx={{ mr: 1 }} />
                                <FormControl
                                    variant="outlined"
                                    size="small"
                                    sx={{ minWidth: 200 }}
                                >
                                    <InputLabel id="sort-label">
                                        Trier par
                                    </InputLabel>
                                    <Select
                                        labelId="sort-label"
                                        value={sortBy}
                                        onChange={(e) =>
                                            setSortBy(e.target.value)
                                        }
                                        label="Trier par"
                                    >
                                        <MenuItem value="date-desc">
                                            Date (récent → ancien)
                                        </MenuItem>
                                        <MenuItem value="date-asc">
                                            Date (ancien → récent)
                                        </MenuItem>
                                        <MenuItem value="likes">
                                            Popularité
                                        </MenuItem>
                                        <MenuItem value="title">
                                            Titre (A-Z)
                                        </MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                    </Grid>
                </Paper>

                {/* Affichage des posts */}
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
                ) : filteredPosts.length === 0 ? (
                    <Paper
                        elevation={2}
                        sx={{
                            p: 4,
                            textAlign: "center",
                            borderRadius: 3,
                            my: 4,
                        }}
                    >
                        <Typography variant="h6" gutterBottom>
                            Aucune actualité trouvée
                        </Typography>
                        <Typography color="text.secondary">
                            Essayez de modifier vos critères de recherche
                        </Typography>
                    </Paper>
                ) : (
                    <>
                        <Box sx={{ mb: 2 }}>
                            <Typography variant="body2" color="text.secondary">
                                {filteredPosts.length} actualité
                                {filteredPosts.length > 1 ? "s" : ""} trouvée
                                {filteredPosts.length > 1 ? "s" : ""}
                            </Typography>
                        </Box>

                        <Grid container spacing={4}>
                            {currentPosts.map((post) => (
                                <Grid item xs={12} md={4} key={post.id}>
                                    <PostCard post={post} />
                                </Grid>
                            ))}
                        </Grid>

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "center",
                                    mt: 6,
                                }}
                            >
                                <Pagination
                                    count={totalPages}
                                    page={page}
                                    onChange={handlePageChange}
                                    color="secondary"
                                    size="large"
                                    showFirstButton
                                    showLastButton
                                    sx={{
                                        "& .MuiPaginationItem-root": {
                                            fontWeight: 600,
                                        },
                                    }}
                                />
                            </Box>
                        )}
                    </>
                )}
            </Container>
        </Box>
    );
};

export default NewsPage;

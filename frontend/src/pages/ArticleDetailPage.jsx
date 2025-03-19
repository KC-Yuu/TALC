import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
    Typography,
    Box,
    Container,
    Paper,
    Avatar,
    Divider,
    TextField,
    Button,
    CircularProgress,
    Grid,
    Chip,
    IconButton,
    Stack,
    Alert,
    Card,
    CardContent,
} from "@mui/material";
import {
    ArrowBack,
    Favorite,
    FavoriteBorder,
    ThumbUp,
    ThumbUpOutlined,
    EmojiEmotions,
    EmojiEmotionsOutlined,
    Send,
    AccessTime,
    Person,
} from "@mui/icons-material";
import { format } from "date-fns";
import { fr } from "date-fns/locale";
import { posts as mockPosts } from "../mocks";

const reactions = [
    {
        name: "J'aime",
        icon: ThumbUp,
        outlinedIcon: ThumbUpOutlined,
        color: "#2196f3",
    },
    {
        name: "J'adore",
        icon: Favorite,
        outlinedIcon: FavoriteBorder,
        color: "#e91e63",
    },
    {
        name: "Haha",
        icon: EmojiEmotions,
        outlinedIcon: EmojiEmotionsOutlined,
        color: "#ff9800",
    },
];

const ArticleDetailPage = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [article, setArticle] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState("");
    const [userReaction, setUserReaction] = useState(null);
    const [reactionCounts, setReactionCounts] = useState({
        "J'aime": 0,
        "J'adore": 0,
        Haha: 0,
    });

    useEffect(() => {
        const fetchArticle = async () => {
            try {
                setLoading(true);
                // En production, nous utiliserons l'API
                // const response = await axios.get(`/api/posts/${id}`);
                // setArticle(response.data);

                // Simuler la récupération d'un article
                setTimeout(() => {
                    // Chercher dans les posts mockés
                    const foundPost = [...mockPosts].find(
                        (post) => post.id.toString() === id.toString()
                    );

                    // Si non trouvé dans les posts mockés, chercher dans les posts étendus
                    if (!foundPost) {
                        const extendedPost = {
                            id: parseInt(id),
                            title: `Actualité ${id}`,
                            content: `Contenu de l'actualité ${id}. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
                            image: `https://source.unsplash.com/random/800x600?dance&sig=${id}`,
                            author:
                                parseInt(id) % 2 === 0
                                    ? "Thomas Martin"
                                    : "Sophie Leclerc",
                            created_at: new Date(
                                Date.now() - parseInt(id) * 24 * 60 * 60 * 1000
                            ).toISOString(),
                            likes: Math.floor(Math.random() * 50),
                        };
                        setArticle(extendedPost);
                    } else {
                        setArticle(foundPost);
                    }

                    // Simuler des commentaires
                    const mockComments = [
                        {
                            id: 1,
                            author: "Marie Dupont",
                            content: "Super article, merci pour le partage !",
                            created_at: new Date(
                                Date.now() - 3 * 60 * 60 * 1000
                            ).toISOString(),
                            avatar: "https://i.pravatar.cc/150?img=1",
                        },
                        {
                            id: 2,
                            author: "Jean Lefebvre",
                            content: "Très intéressant, j'ai beaucoup appris.",
                            created_at: new Date(
                                Date.now() - 8 * 60 * 60 * 1000
                            ).toISOString(),
                            avatar: "https://i.pravatar.cc/150?img=2",
                        },
                    ];
                    setComments(mockComments);

                    // Simuler des réactions
                    setReactionCounts({
                        "J'aime": Math.floor(Math.random() * 20),
                        "J'adore": Math.floor(Math.random() * 15),
                        Haha: Math.floor(Math.random() * 10),
                    });

                    setLoading(false);
                }, 1000);
            } catch (err) {
                console.error(
                    "Erreur lors de la récupération de l'article:",
                    err
                );
                setError(
                    "Impossible de charger l'article. Veuillez réessayer plus tard."
                );
                setLoading(false);
            }
        };

        fetchArticle();
    }, [id]);

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (!newComment.trim()) return;

        const newCommentObj = {
            id: comments.length + 1,
            author: "Utilisateur Connecté", // À remplacer par le nom de l'utilisateur connecté
            content: newComment,
            created_at: new Date().toISOString(),
            avatar: "https://i.pravatar.cc/150?img=5", // À remplacer par l'avatar de l'utilisateur
        };

        setComments([...comments, newCommentObj]);
        setNewComment("");
    };

    const handleReaction = (reactionName) => {
        // Si l'utilisateur a déjà cette réaction, la supprimer
        if (userReaction === reactionName) {
            setUserReaction(null);
            setReactionCounts({
                ...reactionCounts,
                [reactionName]: reactionCounts[reactionName] - 1,
            });
        }
        // Si l'utilisateur a une autre réaction, changer pour la nouvelle
        else if (userReaction) {
            setReactionCounts({
                ...reactionCounts,
                [userReaction]: reactionCounts[userReaction] - 1,
                [reactionName]: reactionCounts[reactionName] + 1,
            });
            setUserReaction(reactionName);
        }
        // Si l'utilisateur n'a pas encore réagi
        else {
            setReactionCounts({
                ...reactionCounts,
                [reactionName]: reactionCounts[reactionName] + 1,
            });
            setUserReaction(reactionName);
        }
    };

    const formatDate = (dateString) => {
        try {
            return format(new Date(dateString), "d MMMM yyyy 'à' HH:mm", {
                locale: fr,
            });
        } catch (error) {
            return "Date inconnue";
        }
    };

    if (loading) {
        return (
            <Box sx={{ display: "flex", justifyContent: "center", my: 8 }}>
                <CircularProgress color="secondary" />
            </Box>
        );
    }

    if (error) {
        return (
            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Alert severity="error">{error}</Alert>
                <Button
                    startIcon={<ArrowBack />}
                    onClick={() => navigate("/blog")}
                    sx={{ mt: 2 }}
                >
                    Retour aux actualités
                </Button>
            </Container>
        );
    }

    if (!article) {
        return (
            <Container maxWidth="lg" sx={{ py: 4 }}>
                <Alert severity="warning">Article non trouvé</Alert>
                <Button
                    startIcon={<ArrowBack />}
                    onClick={() => navigate("/blog")}
                    sx={{ mt: 2 }}
                >
                    Retour aux actualités
                </Button>
            </Container>
        );
    }

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
                {/* Bouton retour */}
                <Button
                    startIcon={<ArrowBack />}
                    onClick={() => navigate("/blog")}
                    sx={{ mb: 4 }}
                >
                    Retour aux actualités
                </Button>

                {/* Article */}
                <Paper
                    elevation={3}
                    sx={{
                        p: { xs: 3, md: 5 },
                        borderRadius: 3,
                        mb: 4,
                        background:
                            "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)",
                    }}
                >
                    {/* Image de l'article */}
                    <Box
                        sx={{
                            width: "100%",
                            height: { xs: 200, sm: 300, md: 400 },
                            borderRadius: 2,
                            overflow: "hidden",
                            mb: 4,
                        }}
                    >
                        <img
                            src={article.image}
                            alt={article.title}
                            style={{
                                width: "100%",
                                height: "100%",
                                objectFit: "cover",
                            }}
                        />
                    </Box>

                    {/* Titre et métadonnées */}
                    <Box sx={{ mb: 4 }}>
                        <Typography
                            variant="h3"
                            component="h1"
                            gutterBottom
                            sx={{ fontWeight: 700 }}
                        >
                            {article.title}
                        </Typography>

                        <Box
                            sx={{
                                display: "flex",
                                alignItems: "center",
                                flexWrap: "wrap",
                                gap: 2,
                                mb: 2,
                            }}
                        >
                            <Box sx={{ display: "flex", alignItems: "center" }}>
                                <Avatar
                                    src={`https://i.pravatar.cc/150?u=${article.author}`}
                                    sx={{ mr: 1 }}
                                />
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    <Person
                                        fontSize="small"
                                        sx={{
                                            verticalAlign: "middle",
                                            mr: 0.5,
                                        }}
                                    />
                                    {article.author}
                                </Typography>
                            </Box>

                            <Typography variant="body2" color="text.secondary">
                                <AccessTime
                                    fontSize="small"
                                    sx={{ verticalAlign: "middle", mr: 0.5 }}
                                />
                                {formatDate(article.created_at)}
                            </Typography>
                        </Box>
                    </Box>

                    {/* Contenu de l'article */}
                    <Typography
                        variant="body1"
                        paragraph
                        sx={{ lineHeight: 1.8 }}
                    >
                        {article.content}
                    </Typography>

                    {/* Section des réactions */}
                    <Box sx={{ mt: 4 }}>
                        <Divider sx={{ mb: 2 }} />
                        <Typography
                            variant="subtitle1"
                            gutterBottom
                            sx={{ fontWeight: 600 }}
                        >
                            Réactions
                        </Typography>

                        <Stack direction="row" spacing={1} sx={{ mb: 2 }}>
                            {reactions.map((reaction) => {
                                const isActive = userReaction === reaction.name;
                                const Icon = isActive
                                    ? reaction.icon
                                    : reaction.outlinedIcon;

                                return (
                                    <Chip
                                        key={reaction.name}
                                        icon={
                                            <Icon
                                                style={{
                                                    color: isActive
                                                        ? reaction.color
                                                        : "inherit",
                                                }}
                                            />
                                        }
                                        label={`${reaction.name} (${
                                            reactionCounts[reaction.name]
                                        })`}
                                        onClick={() =>
                                            handleReaction(reaction.name)
                                        }
                                        variant={
                                            isActive ? "filled" : "outlined"
                                        }
                                        sx={{
                                            borderColor: isActive
                                                ? reaction.color
                                                : undefined,
                                            backgroundColor: isActive
                                                ? `${reaction.color}20`
                                                : undefined,
                                            "&:hover": {
                                                backgroundColor: isActive
                                                    ? `${reaction.color}30`
                                                    : undefined,
                                            },
                                        }}
                                    />
                                );
                            })}
                        </Stack>
                    </Box>
                </Paper>

                {/* Section des commentaires */}
                <Paper
                    elevation={3}
                    sx={{
                        p: { xs: 3, md: 5 },
                        borderRadius: 3,
                        mb: 4,
                        background:
                            "linear-gradient(135deg, rgba(255,255,255,0.95) 0%, rgba(255,255,255,0.9) 100%)",
                    }}
                >
                    <Typography
                        variant="h5"
                        gutterBottom
                        sx={{ fontWeight: 600 }}
                    >
                        Commentaires ({comments.length})
                    </Typography>

                    {/* Formulaire de commentaire */}
                    <Box
                        component="form"
                        onSubmit={handleCommentSubmit}
                        sx={{ mb: 4 }}
                    >
                        <TextField
                            fullWidth
                            multiline
                            rows={3}
                            placeholder="Ajouter un commentaire..."
                            value={newComment}
                            onChange={(e) => setNewComment(e.target.value)}
                            variant="outlined"
                            sx={{ mb: 2 }}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            color="secondary"
                            endIcon={<Send />}
                            disabled={!newComment.trim()}
                        >
                            Publier
                        </Button>
                    </Box>

                    {/* Liste des commentaires */}
                    {comments.length > 0 ? (
                        <Stack spacing={3}>
                            {comments.map((comment) => (
                                <Card
                                    key={comment.id}
                                    variant="outlined"
                                    sx={{ borderRadius: 2 }}
                                >
                                    <CardContent>
                                        <Box sx={{ display: "flex", mb: 2 }}>
                                            <Avatar
                                                src={comment.avatar}
                                                sx={{ mr: 2 }}
                                            />
                                            <Box>
                                                <Typography
                                                    variant="subtitle1"
                                                    sx={{ fontWeight: 600 }}
                                                >
                                                    {comment.author}
                                                </Typography>
                                                <Typography
                                                    variant="caption"
                                                    color="text.secondary"
                                                >
                                                    {formatDate(
                                                        comment.created_at
                                                    )}
                                                </Typography>
                                            </Box>
                                        </Box>
                                        <Typography variant="body2">
                                            {comment.content}
                                        </Typography>
                                    </CardContent>
                                </Card>
                            ))}
                        </Stack>
                    ) : (
                        <Box sx={{ textAlign: "center", py: 3 }}>
                            <Typography color="text.secondary">
                                Aucun commentaire pour le moment. Soyez le
                                premier à commenter !
                            </Typography>
                        </Box>
                    )}
                </Paper>
            </Container>
        </Box>
    );
};

export default ArticleDetailPage;

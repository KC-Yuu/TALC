import React, { useState } from "react";
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Box,
    Avatar,
    IconButton,
    CardActionArea,
    Chip,
    Divider
} from "@mui/material";
import { Favorite, FavoriteBorder, Comment, Share } from "@mui/icons-material";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

const PostCard = ({ post }) => {
    const [liked, setLiked] = useState(false);
    
    // Formatage de la date
    const formattedDate = post.created_at
        ? format(new Date(post.created_at), "dd MMMM yyyy", { locale: fr })
        : "";

    const handleLike = () => {
        setLiked(!liked);
    };

    return (
        <Card
            className="post-card"
            sx={{ 
                height: "100%", 
                display: "flex", 
                flexDirection: "column",
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: "0 8px 24px rgba(0,0,0,0.08)",
                position: "relative",
                '&::after': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '4px',
                    height: '100%',
                    background: 'linear-gradient(to bottom, #8e24aa, #e91e63)',
                    opacity: 0.8
                }
            }}
        >
            <CardActionArea>
                {post.image && (
                    <Box sx={{ position: 'relative', overflow: 'hidden' }}>
                        <CardMedia
                            component="img"
                            height="220"
                            image={post.image}
                            alt={post.title}
                            sx={{
                                transition: 'transform 0.5s ease',
                                '&:hover': {
                                    transform: 'scale(1.05)'
                                }
                            }}
                        />
                    </Box>
                )}
                <CardContent sx={{ flexGrow: 1, px: 3, pt: 2.5 }}>
                    <Typography 
                        gutterBottom 
                        variant="h5" 
                        component="h2"
                        sx={{ 
                            fontWeight: 600,
                            color: 'text.primary',
                            mb: 1.5
                        }}
                    >
                        {post.title}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        paragraph
                        sx={{ 
                            lineHeight: 1.7,
                            mb: 2.5
                        }}
                    >
                        {post.content}
                    </Typography>
                    
                    <Divider sx={{ my: 2 }} />
                    
                    <Box sx={{ display: "flex", alignItems: "center", justifyContent: "space-between", mt: 2 }}>
                        <Box sx={{ display: "flex", alignItems: "center" }}>
                            <Avatar
                                sx={{ 
                                    width: 38, 
                                    height: 38, 
                                    mr: 1.5,
                                    border: '2px solid',
                                    borderColor: 'primary.light'
                                }}
                                alt={post.author}
                                src="/static/images/avatar/1.jpg"
                            />
                            <Box>
                                <Typography 
                                    variant="subtitle2" 
                                    component="span"
                                    sx={{ fontWeight: 600 }}
                                >
                                    {post.author}
                                </Typography>
                                <Typography
                                    variant="caption"
                                    color="text.secondary"
                                    display="block"
                                >
                                    {formattedDate}
                                </Typography>
                            </Box>
                        </Box>
                        <Chip 
                            label="Actualité" 
                            size="small"
                            color="primary"
                            variant="outlined"
                            sx={{ 
                                borderRadius: 4,
                                fontWeight: 500,
                                fontSize: '0.7rem'
                            }}
                        />
                    </Box>
                </CardContent>
            </CardActionArea>
            <Box 
                sx={{ 
                    display: "flex", 
                    alignItems: "center", 
                    justifyContent: "space-between",
                    px: 3, 
                    py: 1.5,
                    borderTop: '1px solid',
                    borderColor: 'divider'
                }}
            >
                <Box sx={{ display: "flex", alignItems: "center" }}>
                    <IconButton 
                        aria-label="ajouter aux favoris" 
                        size="small"
                        onClick={handleLike}
                        color={liked ? "secondary" : "default"}
                        sx={{ 
                            transition: 'transform 0.2s ease',
                            '&:hover': { transform: 'scale(1.1)' }
                        }}
                    >
                        {liked ? <Favorite fontSize="small" /> : <FavoriteBorder fontSize="small" />}
                    </IconButton>
                    <Typography variant="body2" color="text.secondary" sx={{ ml: 0.5 }}>
                        {liked ? post.likes + 1 : post.likes}
                    </Typography>
                </Box>
                <Box>
                    <IconButton 
                        aria-label="commenter" 
                        size="small"
                        sx={{ 
                            mx: 1,
                            transition: 'transform 0.2s ease',
                            '&:hover': { transform: 'scale(1.1)' }
                        }}
                    >
                        <Comment fontSize="small" />
                    </IconButton>
                    <IconButton 
                        aria-label="partager" 
                        size="small"
                        sx={{ 
                            transition: 'transform 0.2s ease',
                            '&:hover': { transform: 'scale(1.1)' }
                        }}
                    >
                        <Share fontSize="small" />
                    </IconButton>
                </Box>
            </Box>
        </Card>
    );
};

export default PostCard;

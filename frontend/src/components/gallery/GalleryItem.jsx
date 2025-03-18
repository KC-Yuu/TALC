import React, { useState } from "react";
import {
    Card,
    CardContent,
    CardMedia,
    Typography,
    Box,
    IconButton,
    Dialog,
    DialogContent,
    Chip,
    Fade,
    Backdrop,
    DialogTitle,
    DialogActions,
    Button,
} from "@mui/material";
import {
    ZoomIn,
    PlayArrow,
    Close,
    CalendarToday,
    Category,
} from "@mui/icons-material";
import { format } from "date-fns";
import { fr } from "date-fns/locale";

const GalleryItem = ({ item }) => {
    const [open, setOpen] = useState(false);
    const [hovered, setHovered] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    // Formatage de la date
    const formattedDate = item.created_at
        ? format(new Date(item.created_at), "dd MMMM yyyy", { locale: fr })
        : "";

    return (
        <>
            <Card
                className="gallery-image"
                sx={{
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    position: "relative",
                    overflow: "hidden",
                    borderRadius: 3,
                    boxShadow: "0 8px 20px rgba(0,0,0,0.06)",
                    transition: "all 0.4s ease",
                    "&:hover": {
                        boxShadow: "0 12px 28px rgba(0,0,0,0.15)",
                        transform: "translateY(-8px)",
                    },
                }}
                onMouseEnter={() => setHovered(true)}
                onMouseLeave={() => setHovered(false)}
            >
                <Box sx={{ position: "relative", overflow: "hidden" }}>
                    <CardMedia
                        component="img"
                        height="240"
                        image={item.url}
                        alt={item.title}
                        sx={{
                            transition: "transform 0.6s ease",
                            transform: hovered ? "scale(1.08)" : "scale(1)",
                        }}
                    />
                    <Fade in={hovered}>
                        <Box
                            sx={{
                                position: "absolute",
                                top: 0,
                                left: 0,
                                right: 0,
                                bottom: 0,
                                backgroundColor: "rgba(0,0,0,0.3)",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            <IconButton
                                onClick={handleOpen}
                                sx={{
                                    backgroundColor: "rgba(142, 36, 170, 0.8)",
                                    color: "white",
                                    p: 2,
                                    transition: "all 0.3s ease",
                                    "&:hover": {
                                        backgroundColor:
                                            "rgba(142, 36, 170, 1)",
                                        transform: "scale(1.1)",
                                    },
                                }}
                            >
                                {item.type === "video" ? (
                                    <PlayArrow fontSize="large" />
                                ) : (
                                    <ZoomIn fontSize="large" />
                                )}
                            </IconButton>
                        </Box>
                    </Fade>
                    <Box
                        sx={{
                            position: "absolute",
                            top: 12,
                            left: 12,
                        }}
                    >
                        <Chip
                            label={item.category}
                            color="secondary"
                            size="small"
                            sx={{
                                fontWeight: 600,
                                boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
                            }}
                            icon={<Category fontSize="small" />}
                        />
                    </Box>
                </Box>
                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                    <Typography
                        gutterBottom
                        variant="h6"
                        component="h3"
                        sx={{
                            fontWeight: 600,
                            mb: 1.5,
                            color: "text.primary",
                        }}
                    >
                        {item.title}
                    </Typography>
                    <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{
                            mb: 2,
                            lineHeight: 1.6,
                        }}
                    >
                        {item.description}
                    </Typography>
                    <Box
                        sx={{
                            display: "flex",
                            alignItems: "center",
                            mt: 1.5,
                            color: "text.secondary",
                        }}
                    >
                        <CalendarToday
                            fontSize="small"
                            sx={{ mr: 1, fontSize: 16 }}
                        />
                        <Typography variant="caption" sx={{ fontWeight: 500 }}>
                            {formattedDate}
                        </Typography>
                    </Box>
                </CardContent>
            </Card>

            <Dialog
                open={open}
                onClose={handleClose}
                maxWidth="lg"
                fullWidth
                TransitionComponent={Fade}
                TransitionProps={{ timeout: 500 }}
                BackdropComponent={Backdrop}
                BackdropProps={{
                    timeout: 500,
                    sx: { backgroundColor: "rgba(0,0,0,0.85)" },
                }}
                PaperProps={{
                    elevation: 24,
                    sx: { borderRadius: 2, overflow: "hidden" },
                }}
            >
                <DialogTitle
                    sx={{
                        display: "flex",
                        justifyContent: "space-between",
                        alignItems: "center",
                        bgcolor: "background.paper",
                        borderBottom: "1px solid",
                        borderColor: "divider",
                    }}
                >
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ fontWeight: 600 }}
                    >
                        {item.title}
                    </Typography>
                    <IconButton onClick={handleClose} size="large">
                        <Close />
                    </IconButton>
                </DialogTitle>
                <DialogContent sx={{ p: 0, bgcolor: "background.paper" }}>
                    {item.type === "video" ? (
                        <video
                            controls
                            width="100%"
                            src={item.url}
                            poster={item.thumbnail}
                            style={{ display: "block" }}
                        />
                    ) : (
                        <img
                            src={item.url}
                            alt={item.title}
                            style={{ width: "100%", height: "auto" }}
                        />
                    )}
                </DialogContent>
            </Dialog>
        </>
    );
};

export default GalleryItem;

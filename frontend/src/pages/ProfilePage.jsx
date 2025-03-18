import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {
    Container,
    Box,
    Typography,
    TextField,
    Button,
    Paper,
    Avatar,
    Grid,
    Divider,
    Alert,
    CircularProgress,
} from "@mui/material";
import { AuthContext } from "../context/AuthContext";

const ProfilePage = () => {
    const { currentUser, logout } = useContext(AuthContext);
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        username: currentUser?.username || "",
        email: currentUser?.email || "",
        currentPassword: "",
        newPassword: "",
        confirmPassword: "",
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formError, setFormError] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    // Rediriger vers la page de connexion si l'utilisateur n'est pas connecté
    React.useEffect(() => {
        if (!currentUser) {
            navigate("/login");
        }
    }, [currentUser, navigate]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setFormError("");
        setSuccessMessage("");

        // Simulation de mise à jour du profil
        setIsSubmitting(true);

        // Simuler un délai de traitement
        setTimeout(() => {
            setSuccessMessage("Votre profil a été mis à jour avec succès.");
            setIsSubmitting(false);
        }, 1500);

        // En production, nous utiliserions l'API
        // try {
        //     const response = await axios.put('/api/users/profile/', formData);
        //     setSuccessMessage('Votre profil a été mis à jour avec succès.');
        // } catch (err) {
        //     setFormError(err.response?.data?.message || 'Erreur lors de la mise à jour du profil');
        // } finally {
        //     setIsSubmitting(false);
        // }
    };

    const handleLogout = () => {
        logout();
        navigate("/");
    };

    if (!currentUser) {
        return <CircularProgress />; // Afficher un loader pendant la redirection
    }

    return (
        <Container maxWidth="md">
            <Paper elevation={3} sx={{ p: 4, mt: 4 }}>
                <Box sx={{ display: "flex", alignItems: "center", mb: 4 }}>
                    <Avatar
                        sx={{
                            width: 80,
                            height: 80,
                            mr: 3,
                            bgcolor: "secondary.main",
                        }}
                        alt={currentUser.username}
                        src={currentUser.avatar}
                    >
                        {currentUser.username?.charAt(0).toUpperCase()}
                    </Avatar>
                    <Box>
                        <Typography variant="h4" component="h1" gutterBottom>
                            Profil de {currentUser.username}
                        </Typography>
                        <Typography variant="body1" color="text.secondary">
                            Membre depuis {new Date().getFullYear()}
                        </Typography>
                    </Box>
                </Box>

                {successMessage && (
                    <Alert severity="success" sx={{ mb: 3 }}>
                        {successMessage}
                    </Alert>
                )}

                {formError && (
                    <Alert severity="error" sx={{ mb: 3 }}>
                        {formError}
                    </Alert>
                )}

                <Box component="form" onSubmit={handleSubmit} noValidate>
                    <Typography variant="h6" gutterBottom sx={{ mt: 2 }}>
                        Informations personnelles
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Nom d'utilisateur"
                                name="username"
                                value={formData.username}
                                onChange={handleChange}
                                disabled={isSubmitting}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Email"
                                name="email"
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                disabled={isSubmitting}
                            />
                        </Grid>
                    </Grid>

                    <Divider sx={{ my: 4 }} />

                    <Typography variant="h6" gutterBottom>
                        Changer de mot de passe
                    </Typography>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                fullWidth
                                label="Mot de passe actuel"
                                name="currentPassword"
                                type="password"
                                value={formData.currentPassword}
                                onChange={handleChange}
                                disabled={isSubmitting}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Nouveau mot de passe"
                                name="newPassword"
                                type="password"
                                value={formData.newPassword}
                                onChange={handleChange}
                                disabled={isSubmitting}
                            />
                        </Grid>
                        <Grid item xs={12} sm={6}>
                            <TextField
                                fullWidth
                                label="Confirmer le nouveau mot de passe"
                                name="confirmPassword"
                                type="password"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                disabled={isSubmitting}
                            />
                        </Grid>
                    </Grid>

                    <Box
                        sx={{
                            mt: 4,
                            display: "flex",
                            justifyContent: "space-between",
                        }}
                    >
                        <Button
                            variant="outlined"
                            color="error"
                            onClick={handleLogout}
                            disabled={isSubmitting}
                        >
                            Se déconnecter
                        </Button>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            disabled={isSubmitting}
                        >
                            {isSubmitting ? (
                                <CircularProgress size={24} />
                            ) : (
                                "Enregistrer les modifications"
                            )}
                        </Button>
                    </Box>
                </Box>
            </Paper>
        </Container>
    );
};

export default ProfilePage;

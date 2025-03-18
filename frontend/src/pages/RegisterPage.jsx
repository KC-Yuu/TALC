import React, { useState, useContext } from "react";
import { useNavigate, Link as RouterLink } from "react-router-dom";
import {
    Container,
    Box,
    Typography,
    TextField,
    Button,
    Paper,
    Link,
    Alert,
    CircularProgress,
    Grid,
} from "@mui/material";
import { AuthContext } from "../context/AuthContext";

const RegisterPage = () => {
    const [formData, setFormData] = useState({
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formError, setFormError] = useState("");

    const { register, error } = useContext(AuthContext);
    const navigate = useNavigate();

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

        // Validation
        if (
            !formData.username ||
            !formData.email ||
            !formData.password ||
            !formData.confirmPassword
        ) {
            setFormError("Veuillez remplir tous les champs");
            return;
        }

        if (formData.password !== formData.confirmPassword) {
            setFormError("Les mots de passe ne correspondent pas");
            return;
        }

        if (formData.password.length < 8) {
            setFormError("Le mot de passe doit contenir au moins 8 caractères");
            return;
        }

        setIsSubmitting(true);
        const success = await register({
            username: formData.username,
            email: formData.email,
            password: formData.password,
        });
        setIsSubmitting(false);

        if (success) {
            navigate("/");
        }
    };

    return (
        <Container maxWidth="sm">
            <Paper elevation={3} sx={{ p: 4, mt: 8 }}>
                <Typography
                    variant="h4"
                    component="h1"
                    align="center"
                    gutterBottom
                >
                    Créer un compte
                </Typography>

                {(error || formError) && (
                    <Alert severity="error" sx={{ mb: 3 }}>
                        {formError || error}
                    </Alert>
                )}

                <Box component="form" onSubmit={handleSubmit} noValidate>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="username"
                                label="Nom d'utilisateur"
                                name="username"
                                autoComplete="username"
                                value={formData.username}
                                onChange={handleChange}
                                disabled={isSubmitting}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                id="email"
                                label="Adresse email"
                                name="email"
                                autoComplete="email"
                                value={formData.email}
                                onChange={handleChange}
                                disabled={isSubmitting}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="password"
                                label="Mot de passe"
                                type="password"
                                id="password"
                                autoComplete="new-password"
                                value={formData.password}
                                onChange={handleChange}
                                disabled={isSubmitting}
                            />
                        </Grid>
                        <Grid item xs={12}>
                            <TextField
                                required
                                fullWidth
                                name="confirmPassword"
                                label="Confirmer le mot de passe"
                                type="password"
                                id="confirmPassword"
                                value={formData.confirmPassword}
                                onChange={handleChange}
                                disabled={isSubmitting}
                            />
                        </Grid>
                    </Grid>

                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        sx={{ mt: 3, mb: 2 }}
                        disabled={isSubmitting}
                    >
                        {isSubmitting ? (
                            <CircularProgress size={24} />
                        ) : (
                            "S'inscrire"
                        )}
                    </Button>

                    <Box sx={{ textAlign: "center", mt: 2 }}>
                        <Typography variant="body2">
                            Déjà un compte ?{" "}
                            <Link
                                component={RouterLink}
                                to="/login"
                                variant="body2"
                            >
                                Se connecter
                            </Link>
                        </Typography>
                    </Box>
                </Box>
            </Paper>
        </Container>
    );
};

export default RegisterPage;

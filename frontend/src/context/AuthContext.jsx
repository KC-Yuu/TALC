import React, { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        // Vérifier si l'utilisateur est déjà connecté au chargement
        const checkUserLoggedIn = async () => {
            const token = localStorage.getItem("token");
            if (token) {
                try {
                    // Configuration de l'en-tête d'autorisation
                    axios.defaults.headers.common[
                        "Authorization"
                    ] = `Bearer ${token}`;

                    // Récupérer les informations de l'utilisateur
                    const response = await axios.get("/api/users/me/");
                    setCurrentUser(response.data);
                } catch (err) {
                    console.error(
                        "Erreur lors de la vérification de l'authentification:",
                        err
                    );
                    localStorage.removeItem("token");
                    delete axios.defaults.headers.common["Authorization"];
                }
            }
            setLoading(false);
        };

        checkUserLoggedIn();
    }, []);

    const login = async (email, password) => {
        try {
            setError(null);
            const response = await axios.post("/api/users/login/", {
                email,
                password,
            });
            const { token, user } = response.data;

            // Stocker le token dans le localStorage
            localStorage.setItem("token", token);

            // Configurer axios pour inclure le token dans les futures requêtes
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

            setCurrentUser(user);
            return true;
        } catch (err) {
            setError(
                err.response?.data?.message || "Erreur lors de la connexion"
            );
            return false;
        }
    };

    const register = async (userData) => {
        try {
            setError(null);
            const response = await axios.post("/api/users/register/", userData);
            const { token, user } = response.data;

            localStorage.setItem("token", token);
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;

            setCurrentUser(user);
            return true;
        } catch (err) {
            setError(
                err.response?.data?.message || "Erreur lors de l'inscription"
            );
            return false;
        }
    };

    const logout = () => {
        localStorage.removeItem("token");
        delete axios.defaults.headers.common["Authorization"];
        setCurrentUser(null);
    };

    const value = {
        currentUser,
        loading,
        error,
        login,
        register,
        logout,
    };

    return (
        <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

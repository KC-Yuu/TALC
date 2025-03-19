import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import theme from "./theme";
import "./App.css";

// Layouts
import MainLayout from "./layouts/MainLayout";

// Pages
import HomePage from "./pages/HomePage";
import GalleryPage from "./pages/GalleryPage";
import GroupsPage from "./pages/GroupsPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import ProfilePage from "./pages/ProfilePage";
import NewsPage from "./pages/NewsPage";
import NotFoundPage from "./pages/NotFoundPage";

// Context
import { AuthProvider } from "./context/AuthContext";

// Import the ArticleDetailPage component
import ArticleDetailPage from "./pages/ArticleDetailPage";

// In your routes configuration, add:


function App() {
    return (
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <AuthProvider>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<MainLayout />}>
                            <Route index element={<HomePage />} />
                            <Route path="gallery" element={<GalleryPage />} />
                            <Route path="groups" element={<GroupsPage />} />
                            <Route path="profile" element={<ProfilePage />} />
                            <Route path="blog" element={<NewsPage />} />
                            <Route path="*" element={<NotFoundPage />} />
                            <Route path="/actualites/:id" element={<ArticleDetailPage />} />
                        </Route>
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                    </Routes>
                </BrowserRouter>
            </AuthProvider>
        </ThemeProvider>
    );
}

export default App;

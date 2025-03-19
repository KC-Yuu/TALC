import React, { useContext, useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import {
    AppBar,
    Box,
    Container,
    Toolbar,
    Typography,
    Button,
    IconButton,
    Menu,
    MenuItem,
    Avatar,
    Drawer,
    List,
    ListItem,
    ListItemText,
    ListItemIcon,
    useMediaQuery,
    useTheme,
} from "@mui/material";
import {
    Menu as MenuIcon,
    Home as HomeIcon,
    Photo as PhotoIcon,
    Login as LoginIcon,
    Logout as LogoutIcon,
    AccountCircle,
    Groups as GroupsIcon,
} from "@mui/icons-material";
import { AuthContext } from "../../context/AuthContext";

const Navbar = () => {
    const { currentUser, logout } = useContext(AuthContext);
    const navigate = useNavigate();
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    // État pour le menu utilisateur
    const [anchorEl, setAnchorEl] = useState(null);
    const [mobileOpen, setMobileOpen] = useState(false);

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleDrawerToggle = () => {
        setMobileOpen(!mobileOpen);
    };

    const handleLogout = () => {
        logout();
        handleClose();
        navigate("/");
    };

    const menuItems = [
        { text: "Accueil", icon: <HomeIcon />, path: "/" },
        { text: "Galerie", icon: <PhotoIcon />, path: "/gallery" },
        { text: "Groupes", icon: <GroupsIcon />, path: "/groups" },
    ];

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ my: 2 }} className="dancing-font">
                TALC
            </Typography>
            <List>
                {menuItems.map((item) => (
                    <ListItem
                        button
                        component={RouterLink}
                        to={item.path}
                        key={item.text}
                    >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                    </ListItem>
                ))}
                {!currentUser ? (
                    <ListItem button component={RouterLink} to="/login">
                        <ListItemIcon>
                            <LoginIcon />
                        </ListItemIcon>
                        <ListItemText primary="Connexion" />
                    </ListItem>
                ) : (
                    <>
                        <ListItem button component={RouterLink} to="/profile">
                            <ListItemIcon>
                                <AccountCircle />
                            </ListItemIcon>
                            <ListItemText primary="Profil" />
                        </ListItem>
                        <ListItem button onClick={handleLogout}>
                            <ListItemIcon>
                                <LogoutIcon />
                            </ListItemIcon>
                            <ListItemText primary="Déconnexion" />
                        </ListItem>
                    </>
                )}
            </List>
        </Box>
    );

    return (
        <>
            <AppBar
                position="sticky"
                elevation={0}
                sx={{
                    backgroundColor: "rgba(255, 255, 255, 0.85)",
                    backdropFilter: "blur(8px)",
                    color: "text.primary",
                    borderBottom: "1px solid",
                    borderColor: "divider",
                    transition: "all 0.3s ease",
                }}
            >
                <Container maxWidth="xl">
                    <Toolbar sx={{ py: 1 }}>
                        {isMobile && (
                            <IconButton
                                color="inherit"
                                aria-label="open drawer"
                                edge="start"
                                onClick={handleDrawerToggle}
                                sx={{ mr: 2 }}
                            >
                                <MenuIcon />
                            </IconButton>
                        )}

                        <Typography
                            variant="h5"
                            component={RouterLink}
                            to="/"
                            sx={{
                                flexGrow: 1,
                                textDecoration: "none",
                                color: "primary.main",
                                fontWeight: 700,
                                letterSpacing: 1,
                                display: "flex",
                                alignItems: "center",
                                "&:hover": {
                                    color: "primary.dark",
                                    transform: "scale(1.02)",
                                    transition: "all 0.3s ease",
                                },
                            }}
                            className="dancing-font"
                        >
                            TALC
                        </Typography>

                        {!isMobile && (
                            <Box sx={{ display: "flex", mx: 2 }}>
                                {menuItems.map((item) => (
                                    <Button
                                        key={item.text}
                                        component={RouterLink}
                                        to={item.path}
                                        color="inherit"
                                        startIcon={item.icon}
                                        sx={{
                                            mx: 1,
                                            position: "relative",
                                            "&::after": {
                                                content: '""',
                                                position: "absolute",
                                                width: "0%",
                                                height: "2px",
                                                bottom: 0,
                                                left: "50%",
                                                transform: "translateX(-50%)",
                                                backgroundColor: "primary.main",
                                                transition: "width 0.3s ease",
                                            },
                                            "&:hover::after": {
                                                width: "80%",
                                            },
                                            "&:hover": {
                                                backgroundColor: "transparent",
                                                color: "primary.main",
                                            },
                                        }}
                                    >
                                        {item.text}
                                    </Button>
                                ))}
                            </Box>
                        )}

                        {!isMobile && !currentUser ? (
                            <Button
                                color="primary"
                                variant="outlined"
                                component={RouterLink}
                                to="/login"
                                startIcon={<LoginIcon />}
                                sx={{
                                    borderWidth: 2,
                                    px: 2,
                                    py: 0.8,
                                    borderRadius: 6,
                                    fontWeight: 500,
                                    "&:hover": {
                                        borderWidth: 2,
                                        transform: "translateY(-2px)",
                                        boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
                                    },
                                }}
                            >
                                Connexion
                            </Button>
                        ) : (
                            !isMobile && (
                                <Box>
                                    <IconButton
                                        aria-label="account of current user"
                                        aria-controls="menu-appbar"
                                        aria-haspopup="true"
                                        onClick={handleMenu}
                                        color="primary"
                                        sx={{
                                            ml: 1,
                                            border: "2px solid",
                                            borderColor: "primary.light",
                                            transition: "all 0.3s ease",
                                            "&:hover": {
                                                backgroundColor:
                                                    "primary.light",
                                                color: "white",
                                                transform: "translateY(-2px)",
                                                boxShadow:
                                                    "0 4px 8px rgba(0,0,0,0.1)",
                                            },
                                        }}
                                    >
                                        <Avatar
                                            sx={{
                                                width: 32,
                                                height: 32,
                                                bgcolor: "primary.main",
                                                color: "white",
                                                fontWeight: "bold",
                                            }}
                                            alt={currentUser?.username}
                                            src={currentUser?.avatar}
                                        >
                                            {currentUser?.username
                                                ?.charAt(0)
                                                .toUpperCase()}
                                        </Avatar>
                                    </IconButton>
                                    <Menu
                                        id="menu-appbar"
                                        anchorEl={anchorEl}
                                        anchorOrigin={{
                                            vertical: "bottom",
                                            horizontal: "right",
                                        }}
                                        keepMounted
                                        transformOrigin={{
                                            vertical: "top",
                                            horizontal: "right",
                                        }}
                                        open={Boolean(anchorEl)}
                                        onClose={handleClose}
                                        PaperProps={{
                                            elevation: 3,
                                            sx: {
                                                mt: 1.5,
                                                borderRadius: 2,
                                                minWidth: 180,
                                                overflow: "visible",
                                                "&:before": {
                                                    content: '""',
                                                    display: "block",
                                                    position: "absolute",
                                                    top: 0,
                                                    right: 14,
                                                    width: 10,
                                                    height: 10,
                                                    bgcolor: "background.paper",
                                                    transform:
                                                        "translateY(-50%) rotate(45deg)",
                                                    zIndex: 0,
                                                },
                                            },
                                        }}
                                    >
                                        <MenuItem
                                            component={RouterLink}
                                            to="/profile"
                                            onClick={handleClose}
                                            sx={{
                                                py: 1.5,
                                                px: 2.5,
                                                "&:hover": {
                                                    backgroundColor:
                                                        "primary.light",
                                                    color: "white",
                                                },
                                            }}
                                        >
                                            <AccountCircle sx={{ mr: 1.5 }} />{" "}
                                            Profil
                                        </MenuItem>
                                        <MenuItem
                                            onClick={handleLogout}
                                            sx={{
                                                py: 1.5,
                                                px: 2.5,
                                                "&:hover": {
                                                    backgroundColor:
                                                        "error.light",
                                                    color: "white",
                                                },
                                            }}
                                        >
                                            <LogoutIcon sx={{ mr: 1.5 }} />{" "}
                                            Déconnexion
                                        </MenuItem>
                                    </Menu>
                                </Box>
                            )
                        )}
                    </Toolbar>
                </Container>
            </AppBar>
            <Drawer
                variant="temporary"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: "block", md: "none" },
                    "& .MuiDrawer-paper": {
                        boxSizing: "border-box",
                        width: 240,
                    },
                }}
            >
                {drawer}
            </Drawer>
        </>
    );
};

export default Navbar;

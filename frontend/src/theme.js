import { createTheme } from "@mui/material/styles";
import { alpha } from "@mui/material/styles";

const theme = createTheme({
    palette: {
        primary: {
            main: "#8e24aa", // Violet amélioré - couleur principale pour un groupe de danse
            light: "#c158dc",
            dark: "#5c007a",
            contrastText: "#fff",
        },
        secondary: {
            main: "#e91e63", // Rose vif - couleur secondaire
            light: "#ff6090",
            dark: "#b0003a",
            contrastText: "#fff",
        },
        tertiary: {
            main: "#00bcd4", // Cyan - couleur d'accent
            light: "#62efff",
            dark: "#008ba3",
            contrastText: "#fff",
        },
        background: {
            default: "#f8f9fa",
            paper: "#fff",
            dark: "#121212",
            light: "#fafafa",
        },
        text: {
            primary: "#212121",
            secondary: "#757575",
            disabled: "#9e9e9e",
        },
    },
    typography: {
        fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
        h1: {
            fontFamily: '"Dancing Script", cursive',
            fontWeight: 700,
            letterSpacing: "-0.01562em",
        },
        h2: {
            fontFamily: '"Dancing Script", cursive',
            fontWeight: 700,
            letterSpacing: "-0.00833em",
        },
        h3: {
            fontWeight: 600,
            letterSpacing: "0",
        },
        h4: {
            fontWeight: 600,
            letterSpacing: "0.00735em",
        },
        h5: {
            fontWeight: 500,
            letterSpacing: "0",
        },
        h6: {
            fontWeight: 500,
            letterSpacing: "0.0075em",
        },
        subtitle1: {
            fontWeight: 400,
            letterSpacing: "0.00938em",
        },
        subtitle2: {
            fontWeight: 500,
            letterSpacing: "0.00714em",
        },
        body1: {
            fontWeight: 400,
            letterSpacing: "0.00938em",
            lineHeight: 1.7,
        },
        body2: {
            fontWeight: 400,
            letterSpacing: "0.01071em",
            lineHeight: 1.6,
        },
        button: {
            textTransform: "none",
            fontWeight: 500,
            letterSpacing: "0.02857em",
        },
    },
    shape: {
        borderRadius: 10,
    },
    shadows: [
        "none",
        "0px 2px 1px -1px rgba(0,0,0,0.15),0px 1px 1px 0px rgba(0,0,0,0.10),0px 1px 3px 0px rgba(0,0,0,0.08)",
        "0px 3px 3px -2px rgba(0,0,0,0.15),0px 2px 2px 0px rgba(0,0,0,0.10),0px 1px 5px 0px rgba(0,0,0,0.08)",
        "0px 3px 4px -2px rgba(0,0,0,0.15),0px 3px 3px -2px rgba(0,0,0,0.10),0px 1px 8px 0px rgba(0,0,0,0.08)",
        "0px 2px 5px -1px rgba(0,0,0,0.15),0px 4px 6px rgba(0,0,0,0.10),0px 1px 10px 0px rgba(0,0,0,0.08)",
        "0px 3px 6px -1px rgba(0,0,0,0.15),0px 5px 8px rgba(0,0,0,0.10),0px 1px 14px 0px rgba(0,0,0,0.08)",
        "0px 3px 7px -2px rgba(0,0,0,0.15),0px 6px 10px 1px rgba(0,0,0,0.10),0px 1px 18px 0px rgba(0,0,0,0.08)",
        "0px 4px 8px -2px rgba(0,0,0,0.15),0px 7px 12px 1px rgba(0,0,0,0.10),0px 2px 16px 1px rgba(0,0,0,0.08)",
        "0px 5px 9px -2px rgba(0,0,0,0.15),0px 8px 16px 1px rgba(0,0,0,0.10),0px 3px 16px 2px rgba(0,0,0,0.08)",
        "0px 5px 10px -3px rgba(0,0,0,0.15),0px 8px 16px 2px rgba(0,0,0,0.10),0px 4px 18px 3px rgba(0,0,0,0.08)",
        "0px 6px 11px -3px rgba(0,0,0,0.15),0px 9px 18px 2px rgba(0,0,0,0.10),0px 4px 20px 3px rgba(0,0,0,0.08)",
        "0px 6px 12px -3px rgba(0,0,0,0.15),0px 10px 20px 2px rgba(0,0,0,0.10),0px 5px 22px 4px rgba(0,0,0,0.08)",
        "0px 7px 13px -4px rgba(0,0,0,0.15),0px 11px 22px 2px rgba(0,0,0,0.10),0px 5px 24px 4px rgba(0,0,0,0.08)",
        "0px 7px 14px -4px rgba(0,0,0,0.15),0px 11px 24px 3px rgba(0,0,0,0.10),0px 5px 26px 4px rgba(0,0,0,0.08)",
        "0px 7px 15px -4px rgba(0,0,0,0.15),0px 12px 26px 3px rgba(0,0,0,0.10),0px 6px 28px 5px rgba(0,0,0,0.08)",
        "0px 8px 16px -5px rgba(0,0,0,0.15),0px 13px 28px 3px rgba(0,0,0,0.10),0px 6px 30px 5px rgba(0,0,0,0.08)",
        "0px 8px 17px -5px rgba(0,0,0,0.15),0px 14px 30px 4px rgba(0,0,0,0.10),0px 7px 32px 6px rgba(0,0,0,0.08)",
        "0px 8px 18px -5px rgba(0,0,0,0.15),0px 15px 32px 4px rgba(0,0,0,0.10),0px 7px 34px 6px rgba(0,0,0,0.08)",
        "0px 9px 19px -5px rgba(0,0,0,0.15),0px 16px 34px 4px rgba(0,0,0,0.10),0px 7px 36px 6px rgba(0,0,0,0.08)",
        "0px 9px 20px -6px rgba(0,0,0,0.15),0px 17px 36px 5px rgba(0,0,0,0.10),0px 8px 38px 7px rgba(0,0,0,0.08)",
        "0px 10px 21px -6px rgba(0,0,0,0.15),0px 18px 38px 5px rgba(0,0,0,0.10),0px 8px 40px 7px rgba(0,0,0,0.08)",
        "0px 10px 22px -6px rgba(0,0,0,0.15),0px 19px 40px 5px rgba(0,0,0,0.10),0px 8px 42px 7px rgba(0,0,0,0.08)",
        "0px 10px 23px -6px rgba(0,0,0,0.15),0px 20px 42px 6px rgba(0,0,0,0.10),0px 9px 44px 8px rgba(0,0,0,0.08)",
        "0px 11px 24px -7px rgba(0,0,0,0.15),0px 21px 44px 6px rgba(0,0,0,0.10),0px 9px 46px 8px rgba(0,0,0,0.08)",
    ],
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                body: {
                    scrollBehavior: "smooth",
                    transition: "all 0.3s ease",
                },
                "::selection": {
                    backgroundColor: alpha("#8e24aa", 0.3),
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    borderRadius: 10,
                    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)",
                    transition: "all 0.3s ease",
                    textTransform: "none",
                    "&:hover": {
                        transform: "translateY(-2px)",
                        boxShadow: "0 6px 15px rgba(0, 0, 0, 0.15)",
                    },
                    "&:active": {
                        transform: "translateY(0)",
                    },
                },
                contained: {
                    "&.MuiButton-containedPrimary": {
                        background:
                            "linear-gradient(45deg, #8e24aa 30%, #c158dc 90%)",
                    },
                    "&.MuiButton-containedSecondary": {
                        background:
                            "linear-gradient(45deg, #e91e63 30%, #ff6090 90%)",
                    },
                },
                outlined: {
                    borderWidth: "2px",
                    "&:hover": {
                        borderWidth: "2px",
                    },
                },
            },
        },
        MuiCard: {
            styleOverrides: {
                root: {
                    borderRadius: 12,
                    boxShadow: "0 4px 12px rgba(0,0,0,0.05)",
                },
            },
        },
    },
});

export default theme;

import { createTheme, Theme, ThemeOptions } from "@mui/material/styles";

const themeOptions: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#5864FF",
    },
    background: {
      default: "rgba(60, 60, 60, 0.2)",
    },
  },
  typography: {
    htmlFontSize: 16,
    fontFamily: ["Exo", "Jura", "sans-serif"].join(","),

    h1: {
      fontSize: "4rem",
      fontFamily: "Jura",
      fontWeight: 700,
      textTransform: "uppercase",
      lineHeight: "102px",
      "@media (max-width:1366px)": {
        fontSize: "3.6rem",
        lineHeight: "92px",
      },
      "@media (max-width:470px)": {
        fontSize: "2.25rem",
        lineHeight: "57px",
      },
    },
    h2: {
      fontSize: "2.75rem",
      fontFamily: "Jura",
      fontWeight: 700,
      textTransform: "uppercase",
      color: "#FFFFFF",
      "@media (max-width:800px)": {
        fontSize: "2rem",
        lineHeight: "50px",
      },
    },
    allVariants: {
      color: "#FFFFFF",
    },
    subtitle1: {
      color: "#C9C9D3",
      fontWeight: 500,
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 770,
      md: 900,
      lg: 1366,
      xl: 1410,
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "50px",
          padding: "13px 26px",
          boxShadow: "none",
          textTransform: "none",
          fontFamily: "Jura",
          fontWeight: 700,
        },
      },
      variants: [
        {
          props: { variant: "outlined" },
          style: {
            border: `2px solid`,
            borderColor: `#5864FF`,
            color: "#FFFFFF",
            backgroundColor: "transparent",
            ":hover": {
              border: `2px solid`,
              borderColor: `#8790ff`,
              backgroundColor: "transparent",
            },
          },
        },
      ],
    },
    MuiContainer: {
      styleOverrides: {
        root: {
        
          "@media (max-width:1410px)": {
            padding: "0 10%",
          },
          
          "@media (max-width:900px)": {
            padding: "0 24px",
          },
        },
      },
    },
  },
};

const theme = createTheme(themeOptions);

export default theme;

import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Logo } from "../logo/Logo";
import { Button } from "@mui/material";
import { MobileMenu } from "../mobile-menu/MobileMenu";

const pages = [
  "Dashboard",
  "My positions",
  "Pools",
  "Swap",
  "FAQ",
  "Help",
  "Contact us",
];

export function MainMenu() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar
      position="absolute"
      sx={{ background: "transparent", boxShadow: "none" }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{ display: "flex", justifyContent: "space-between", pt: "20px" }}
        >
          <Logo />
          <Box sx={{ display: { xs: "flex", lg: "none" } }}>
            <MobileMenu
              handleOpenNavMenu={handleOpenNavMenu}
              handleCloseNavMenu={handleCloseNavMenu}
              anchorElNav={anchorElNav}
              pages={pages}
            />
          </Box>

          <Box sx={{ display: { xs: "none", lg: "flex" } }}>
            {pages.map((page) => (
              <Typography
                key={page}
                onClick={handleCloseNavMenu}
                variant="subtitle1"
                sx={{
                  my: 2,
                  px: "20px",
                  ":hover": {
                    cursor: "pointer",
                    textShadow: "#c9c9d394 0px 0px 15px",
                  },
                }}
              >
                {page}
              </Typography>
            ))}
            <Button
              variant="contained"
              sx={{ width: "fit-content", ml: "30px" }}
            >
              Connect wallet
            </Button>
          </Box>
        </Box>
      </Container>
    </AppBar>
  );
}
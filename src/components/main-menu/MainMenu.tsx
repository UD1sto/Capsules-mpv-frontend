import * as React from "react";
import { Logo } from "../logo/Logo";
import { Button, Container, Typography, Box, AppBar } from "@mui/material";
import { MobileMenu } from "../mobile-menu/MobileMenu";
import Link from "next/link";
import styles from "./styles.module.css";

const pages = [
  { path: "/dashboard", title: "Dashboard" },
  { path: "/add-liquidity", title: "My positions" },
  { path: "/stake", title: "Pools" },
  { path: "/swap", title: "Swap" },
  { path: "/faq", title: "FAQ" },
  { path: "/", title: "Help" },
  { path: "/contact-us", title: "Contact us" },
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
    <AppBar position="absolute" className={styles.appBar}>
      <Container maxWidth="xl">
        <Box className={styles.appBox}>
          
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
              <Link href={page.path} key={page.title}>
                <Typography
                  key={page.title}
                  onClick={handleCloseNavMenu}
                  variant="subtitle1"
                  className={styles.appLink}
                >
                  {page.title}
                </Typography>
              </Link>
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

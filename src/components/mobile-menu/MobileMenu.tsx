import * as React from "react";
import { Logo } from "../logo/Logo";
import {
  Button,
  Stack,
  MenuItem,
  Menu,
  Typography,
  IconButton,
  Box,
} from "@mui/material";
import { CloseIcon, MenuIcon } from "public/icons";
import Link from "next/link";
import styles from "./styles.module.css";

interface IMobileMenuProps {
  handleOpenNavMenu: (event: React.MouseEvent<HTMLElement>) => void;
  anchorElNav: null | HTMLElement;
  handleCloseNavMenu: () => void;
  pages: Array<any>;
}

export function MobileMenu({
  handleOpenNavMenu,
  anchorElNav,
  handleCloseNavMenu,
  pages,
}: IMobileMenuProps) {
  return (
    <Box>
      <IconButton
        size="large"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
      >
        <MenuIcon />
      </IconButton>

      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: "block", lg: "none" },
        }}
        PaperProps={{
          className: styles.paperBox,
        }}
      >
        <Stack
          className={styles.paperLight}
          sx={{
            background: (theme) => theme.palette.primary.main,
          }}
        ></Stack>

        <Stack className={styles.logoBox}>
          <Logo />
          <IconButton onClick={handleCloseNavMenu} sx={{ width: "40px" }}>
            <CloseIcon />
          </IconButton>
        </Stack>

        {pages.map((page) => (
          <Link href={page.path} key={page.title}>
            <MenuItem
              key={page.title}
              onClick={handleCloseNavMenu}
              className={styles.menuItem}
            >
              <Typography>{page.title}</Typography>
            </MenuItem>
          </Link>
        ))}

        <Stack className={styles.btnBox}>
          <Button variant="contained">Connect wallet</Button>
        </Stack>
      </Menu>
    </Box>
  );
}

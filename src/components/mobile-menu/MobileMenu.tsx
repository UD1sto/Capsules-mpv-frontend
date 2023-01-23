import * as React from "react";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import { Logo } from "../logo/Logo";
import { Button, Stack } from "@mui/material";
import { CloseIcon, MenuIcon } from "public/icons";
import Link from "next/link";

interface MobileMenuProps {
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
}: MobileMenuProps) {
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
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: "block", lg: "none" },
        }}
        PaperProps={{
          sx: {
            width: "100%",
            left: "0!important",
            height: "101%",
            maxWidth: "none",
            maxHeight: "none",
            top: "0!important",
            background: "#141414",
          },
        }}
      >
        <Stack
          sx={{
            position: "absolute",
            width: "250px",
            height: "250px",
            backgroundColor: "red",
            top: "calc(50% - 125px)",
            left: "calc(50vw - 125px)",
            background: (theme) => theme.palette.primary.main,
            opacity: "0.5",
            filter: "blur(175px)",
            borderRadius: "50px",
          }}
        ></Stack>
        <Stack
          direction={"row"}
          justifyContent="space-between"
          p={"16px 23px 70px"}
        >
          <Logo />
          <IconButton onClick={handleCloseNavMenu} sx={{ width: "40px" }}>
            <CloseIcon />
          </IconButton>
        </Stack>

        {pages.map((page) => (
          <Link href={page.path}>
            <MenuItem
              key={page.title}
              onClick={handleCloseNavMenu}
              sx={{
                padding: "25px 0",
                border: "1px solid  rgba(60, 60, 60, 0.2)",
              }}
            >
              <Typography
                textAlign="center"
                sx={{
                  textAlign: "center",
                  width: "100%",
                  textTransform: "uppercase",
                  fontWeight: 500,
                  fontSize: "1.5rem",
                  letterSpacing: "1px",
                }}
              >
                {page.title}
              </Typography>
            </MenuItem>
          </Link>
        ))}
        <Stack sx={{ alignItems: "center", m: "30px" }}>
          <Button variant="contained" sx={{ width: "fit-content" }}>
            Connect wallet
          </Button>
        </Stack>
      </Menu>
    </Box>
  );
}

import React from "react";
import { AppBar, Toolbar, IconButton, Typography, Button, Box, Collapse, Slide, useScrollTrigger } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import NextLink from "next/link";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}

function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <NextLink href={href || "#"} passHref legacyBehavior>
        <Typography component="a" variant="body2" sx={{ fontWeight: 500, display: "block", padding: "0.5rem 0" }}>
          {children}
        </Typography>
      </NextLink>
    </li>
  );
}

export function Navbar({ alwaysOpaque = false }: { alwaysOpaque?: boolean }) {
  const [open, setOpen] = React.useState(false);
  const trigger = useScrollTrigger();

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  const appBarColor = alwaysOpaque ? "white" : (trigger ? "white" : "transparent");
  const textColor = alwaysOpaque ? "text.primary" : (trigger ? "text.primary" : "white");
  const iconColor = alwaysOpaque ? "action.active" : (trigger ? "action.active" : "white");

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        backgroundColor: appBarColor,
        borderBottom: 0,
        color: textColor,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <NextLink href="/" passHref legacyBehavior>
          <Typography component="a" variant="h6" sx={{ color: textColor, flexGrow: 1, cursor: 'pointer' }}>
            Шмелиная Ферма
          </Typography>
        </NextLink>

        <Box sx={{ display: { xs: "none", lg: "flex" }, alignItems: "center", gap: 3 }}>
          <ul style={{ display: "flex", alignItems: "center", gap: "1.5rem" }}>
            <NavItem href="/">Home</NavItem>
            <NavItem href="/contact-us">Контакты</NavItem>
            <NavItem href="/catalog">Каталог Шмелей</NavItem>
          </ul>
          <Box sx={{ display: "flex", gap: 1 }}>
            <NextLink href="https://t.me/yourtelegram" passHref legacyBehavior>
              <IconButton component="a" target="_blank" rel="noopener noreferrer" sx={{ color: iconColor }}>
                <i className="fa-brands fa-telegram text-base" />
              </IconButton>
            </NextLink>
            <NextLink href="https://instagram.com/yourinstagram" passHref legacyBehavior>
              <IconButton component="a" target="_blank" rel="noopener noreferrer" sx={{ color: iconColor }}>
                <i className="fa-brands fa-instagram text-base" />
              </IconButton>
            </NextLink>
          </Box>
        </Box>

        <IconButton
          sx={{ marginLeft: "auto", display: { lg: "none" }, color: iconColor }}
          onClick={handleOpen}
        >
          {open ? (
            <CloseIcon sx={{ height: 24, width: 24 }} />
          ) : (
            <MenuIcon sx={{ height: 24, width: 24 }} />
          )}
        </IconButton>
      </Toolbar>

      <Collapse in={open}>
        <Box sx={{ container: { xs: "none", md: "initial" }, marginTop: 4, borderRadius: "8px", borderTop: "1px solid #e0e0e0", backgroundColor: "white", paddingX: 2, paddingY: 2.5 }}>
          <ul style={{ display: "flex", flexDirection: "column", gap: "1rem", color: "#424242" }}>
            <NavItem href="/">Home</NavItem>
            <NavItem href="/contact-us">Контакты</NavItem>
            <NavItem href="/catalog">Каталог Шмелей</NavItem>
          </ul>
          <Box sx={{ marginTop: 2, display: "flex", alignItems: "center", gap: 1 }}>
            <NextLink href="https://t.me/yourtelegram" passHref legacyBehavior>
              <IconButton component="a" target="_blank" rel="noopener noreferrer" sx={{ color: "#424242" }}>
                <i className="fa-brands fa-telegram text-base" />
              </IconButton>
            </NextLink>
            <NextLink href="https://instagram.com/yourinstagram" passHref legacyBehavior>
              <IconButton component="a" target="_blank" rel="noopener noreferrer" sx={{ color: "#424242" }}>
                <i className="fa-brands fa-instagram text-base" />
              </IconButton>
            </NextLink>
          </Box>
        </Box>
      </Collapse>
    </AppBar>
  );
}

export default Navbar;

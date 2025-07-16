import React from "react";
import {
  Navbar as MTNavbar,
  Collapse,
  IconButton,
  Typography,
  Button,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import Link from "next/link";

interface NavItemProps {
  children: React.ReactNode;
  href?: string;
}
function NavItem({ children, href }: NavItemProps) {
  return (
    <li>
      <a href={href || "#"} target="_self">
        <Typography
          variant="small"
          className="font-medium"
        >
          {children}
        </Typography>
      </a>
    </li>
  );
}

export function Navbar({ alwaysOpaque = false }: { alwaysOpaque?: boolean }) {
  const [open, setOpen] = React.useState(false);
  const [isScrolling, setIsScrolling] = React.useState(false);

  function handleOpen() {
    setOpen((cur) => !cur);
  }

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpen(false)
    );
  }, []);

  React.useEffect(() => {
    function handleScroll() {
      if (window.scrollY > 0) {
        setIsScrolling(true);
      } else {
        setIsScrolling(false);
      }
    }

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <MTNavbar
      fullWidth
      shadow={false}
      blurred={false}
      color={alwaysOpaque ? "white" : (isScrolling ? "white" : "transparent")}
      className="fixed top-0 z-50 border-0"
    >
      <div className="container mx-auto flex items-center justify-between">
        <a href="/">
          <Typography
            variant="h6"
            color={alwaysOpaque ? "gray" : (isScrolling ? "gray" : "white")}
          >
            Шмелиная Ферма
          </Typography>
        </a>
        <ul
          className={`ml-10 hidden items-center gap-6 lg:flex ${
            alwaysOpaque ? "text-gray-900" : (isScrolling ? "text-gray-900" : "text-white")
          }`}
        >
          <NavItem href="/">Home</NavItem>
          
          <NavItem href="/contact-us">Контакты</NavItem>
          <NavItem href="/catalog">
            Каталог Шмелей
          </NavItem>
        </ul>
        <div className="hidden gap-2 lg:flex lg:items-center">
          <Link href="https://t.me/yourtelegram" passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <IconButton
                variant="text"
                color={alwaysOpaque ? "gray" : (isScrolling ? "gray" : "white")}
                size="sm"
              >
                <i className="fa-brands fa-telegram text-base" />
              </IconButton>
            </a>
          </Link>
          <Link href="https://instagram.com/yourinstagram" passHref legacyBehavior>
            <a target="_blank" rel="noopener noreferrer">
              <IconButton
                variant="text"
                color={alwaysOpaque ? "gray" : (isScrolling ? "gray" : "white")}
                size="sm"
              >
                <i className="fa-brands fa-instagram text-base" />
              </IconButton>
            </a>
          </Link>
        </div>
        <IconButton
          variant="text"
          color={alwaysOpaque ? "gray" : (isScrolling ? "gray" : "white")}
          onClick={handleOpen}
          className="ml-auto inline-block lg:hidden"
        >
          {open ? (
            <XMarkIcon strokeWidth={2} className="h-6 w-6" />
          ) : (
            <Bars3Icon strokeWidth={2} className="h-6 w-6" />
          )}
        </IconButton>
      </div>
      <Collapse open={open}>
        <div className="container mx-auto mt-4 rounded-lg border-t border-blue-gray-50 bg-white px-6 py-5">
          <ul className="flex flex-col gap-4 text-blue-gray-900">
            <NavItem href="/">Home</NavItem>
            
            <NavItem href="/contact-us">Контакты</NavItem>
            <NavItem href="/catalog">
              Каталог Шмелей
            </NavItem>
          </ul>
          <div className="mt-4 flex items-center gap-2">
            <Link href="https://t.me/yourtelegram" passHref legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <IconButton variant="text" color="gray" size="sm">
                  <i className="fa-brands fa-telegram text-base" />
                </IconButton>
              </a>
            </Link>
            <Link href="https://instagram.com/yourinstagram" passHref legacyBehavior>
              <a target="_blank" rel="noopener noreferrer">
                <IconButton variant="text" color="gray" size="sm">
                  <i className="fa-brands fa-instagram text-base" />
                </IconButton>
              </a>
            </Link>
          </div>
        </div>
      </Collapse>
    </MTNavbar>
  );
}

export default Navbar;

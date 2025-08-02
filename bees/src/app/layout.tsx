import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import {Navbar, NavbarBrand, NavbarContent, NavbarItem, Link as HeroUILink} from "@heroui/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Bees Resale",
  description: "Website for reselling bumblebee colonies",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar shouldHideOnScroll isBordered height="6rem" maxWidth="full">
          <NavbarBrand>
            <p className="font-bold text-inherit">Bees Resale</p>
          </NavbarBrand>
          <NavbarContent className="hidden sm:flex gap-4" justify="center">
            <NavbarItem>
              <HeroUILink color="foreground" href="/">
                Home
              </HeroUILink>
            </NavbarItem>
            <NavbarItem>
              <HeroUILink color="foreground" href="/bees">
                Bumblebees
              </HeroUILink>
            </NavbarItem>
            <NavbarItem>
              <HeroUILink color="foreground" href="/contact">
                Contact Us
              </HeroUILink>
            </NavbarItem>
          </NavbarContent>
          <NavbarContent justify="end">
            {/* Future right-aligned items can go here */}
          </NavbarContent>
        </Navbar>
        {children}
        <footer className="bg-gray-800 text-white p-4 text-center mt-8">
          <p>&copy; {new Date().getFullYear()} Bees Resale. All rights reserved.</p>
        </footer>
      </body>
    </html>
  );
}

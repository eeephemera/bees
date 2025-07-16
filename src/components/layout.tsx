"use client";

import React from "react";
import { ThemeProvider } from "@material-tailwind/react";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <div className="overflow-x-hidden">
        {children}
      </div>
    </ThemeProvider>
  );
}

export default Layout;

"use client";
//using theme we want to change to theme of whole website and we can't directly use useContext in layout
//as for that we have to make it "use client" and we don't want that as that as metadata that improves seo 
//and that require server side rendering
import { ThemeContext } from "@/context/ThemeContex";
import React, { useContext, useEffect, useState } from "react";

const ThemeProvider = ({ children }) => {
  const { theme } = useContext(ThemeContext);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (mounted) {
    return <div className={theme}>{children}</div>;
  }
};

export default ThemeProvider;
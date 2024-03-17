"use client";

import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();
//store the theme in local storage and if local storage is empty that means u are visiting the page for the first time so use default theme "light"

const getFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    const value = localStorage.getItem("theme");
    return value || "light";
  }
};

export const ThemeContextProvider = ({ children }) => {
    //useState is taking value from upper function because if we use normal value on refresing the page it will retrun to same theme again.
  const [theme, setTheme] = useState(() => {
    return getFromLocalStorage();
  });

  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
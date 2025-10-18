import React, { useState, useEffect } from "react";

const ColorThemeChanger = () => {
  // State for color and theme
  const [bgColor, setBgColor] = useState("#ffffff");
  const [textColor, setTextColor] = useState("#000000");
  const [theme, setTheme] = useState("light");

  // Load saved preferences from localStorage
  useEffect(() => {
    const savedBg = localStorage.getItem("bgColor");
    const savedText = localStorage.getItem("textColor");
    const savedTheme = localStorage.getItem("theme");

    if (savedBg) setBgColor(savedBg);
    if (savedText) setTextColor(savedText);
    if (savedTheme) setTheme(savedTheme);
  }, []);

  // Save preferences to localStorage
  useEffect(() => {
    localStorage.setItem("bgColor", bgColor);
    localStorage.setItem("textColor", textColor);
    localStorage.setItem("theme", theme);
  }, [bgColor, textColor, theme]);

  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark");
      setBgColor("#1e1e1e");
      setTextColor("#ffffff");
    } else {
      setTheme("light");
      setBgColor("#ffffff");
      setTextColor("#000000");
    }
  };

  return (
    <div
      style={{
        backgroundColor: bgColor,
        color: textColor,
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        transition: "all 0.3s ease",
      }}
    >
      <h1>Color Picker & Theme Changer</h1>

      <div style={{ margin: "40px" }}>
        <label>Background Color: </label>
        <input
          type="color"
          value={bgColor}
          onChange={(e) => setBgColor(e.target.value)}
        />
      </div>

      <div style={{ margin: "20px" }}>
        <label>Text Color: </label>
        <input
          type="color"
          value={textColor}
          onChange={(e) => setTextColor(e.target.value)}
        />
      </div>

      <button
        onClick={toggleTheme}
        style={{
          padding: "10px 20px",
          cursor: "pointer",
          border: "none",
          borderRadius: "50px",
          backgroundColor: theme === "light" ? "#000000" : "#ffffff",
          color: theme === "light" ? "#ffffff" : "#000000",
          transition: "all 0.3s ease",
        }}
      >
        Toggle {theme === "light" ? "Dark" : "Light"} Mode
      </button>
    </div>
  );
};

export default ColorThemeChanger;

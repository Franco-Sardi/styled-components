import React, { useState, useEffect } from "react";

import GlobalStyle from "./GlobalStyle"
import Header from "./Components/Header";
import Container from "./Components/Container";
import { temaClaro,temaOscuro } from "./Components/UI/temas";
import { ThemeProvider } from "styled-components";
import { BtnTema } from "./Components/UI";
import SwitcherTema from "./Components/SwitcherTema";

function App() {
  const [theme, setTheme] = useState(getInitialTheme);

  useEffect(() => {
    localStorage.setItem("theme", JSON.stringify(theme));
  }, [theme]);

  function getInitialTheme() {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme ? JSON.parse(savedTheme) : temaClaro;
  }

  const themeToggle = () => {
    setTheme((theme) => !theme);
  };

  return (
    <ThemeProvider theme={theme ? temaClaro : temaOscuro}>
      <GlobalStyle />

      <BtnTema onClick={themeToggle}>
        <SwitcherTema theme={theme} />
      </BtnTema>

      <Header />

      <Container />
    </ThemeProvider>
  );
}

export default App;

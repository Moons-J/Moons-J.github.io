// NPM's
import React from 'react';
// import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route, RouterProvider } from "react-router-dom";


// Styles
import './App.css';

// Components

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { NavItem, Dropdown } from './components/Dropdown';

// Pages
import Home from './pages/Home';
import ErrorPage from "./pages/ErrorPage";
import AboutMe from "./pages/AboutMe";
import MyWork from "./pages/MyWork";
import useLocalStorage from "use-local-storage";

// Icons
import { ReactComponent as MenuIcon } from "./icons/menu.svg";


function App() {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <BrowserRouter>
        <Navbar isDark={isDark} setIsDark={setIsDark}>
          <NavItem icon={<MenuIcon />}>
            <Dropdown />
          </NavItem>
        </Navbar>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about-me" element={<AboutMe />} />
          <Route path="/my-work" element={<MyWork />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;

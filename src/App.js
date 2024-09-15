// NPM's
import React from 'react';
// import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";


// Styles
import './App.css';

// Components

import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { NavItem, DropdownMenu } from './components/NavItem';

// Pages
import Home from './pages/Home';
import ErrorPage from "./pages/ErrorPage";
import AboutMe from "./pages/AboutMe";
import MyWork from "./pages/MyWork";
import useLocalStorage from "use-local-storage";

// Icons
import { ReactComponent as MenuIcon } from "./icons/menu.svg";


function App() {
  // Router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "about-me",
      element: <AboutMe />,
    },
    {
      path: "my-work",
      element: <MyWork />,
    },
  ]);

  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
      <Navbar isDark={isDark} setIsDark={setIsDark}>
        <NavItem icon={<MenuIcon />}>
          <DropdownMenu></DropdownMenu>
        </NavItem>
      </Navbar>
      <RouterProvider router={router} />
      <Footer />
    </div>
  );
}

export default App;

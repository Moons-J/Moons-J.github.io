// NPM's
import React from 'react';
// import ReactDOM from 'react-dom/client';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import useLocalStorage from "use-local-storage";

// Styles
import './App.css';

// Components
import { Toggle } from './components/Toggle'
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { NavItem, DropdownMenu }from './components/NavItem';

// Pages
import Home from './pages/Home';
import ErrorPage from "./pages/ErrorPage";
import AboutMe from "./pages/AboutMe";
import MyWork from "./pages/MyWork";

// Icons
import { ReactComponent as MoonIcon } from "./icons/moon.svg";
import { ReactComponent as SunIcon } from "./icons/sun.svg";
import { ReactComponent as HomeIcon } from "./icons/home.svg";
import { ReactComponent as AboutMeIcon } from "./icons/about-me.svg";
import { ReactComponent as MyWorkIcon } from "./icons/my-work.svg";
import { ReactComponent as GitHubIcon } from "./icons/github.svg";
import { ReactComponent as LinkedInIcon } from "./icons/linkedin.svg";
import { ReactComponent as MenuIcon } from "./icons/menu.svg";


function App() {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);

  // Router
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
    {
      path: "AboutMe",
      element: <AboutMe />,
    },
    {
      path: "MyWork",
      element: <MyWork />,
    },
  ]);

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
        <Navbar>
          <NavItem icon={<MenuIcon />}>
            <DropdownMenu></DropdownMenu>
          </NavItem>
        </Navbar>
        <Toggle
          isChecked={isDark}
          handleChange={() => setIsDark(!isDark)} />
        <div className="container">
          <RouterProvider router={router} />
        </div>
        <Footer />
      </div>
  );
}

  export default App;

// NPM's
import React from 'react';
// import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
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
      path: "about-me",
      element: <AboutMe />,
    },
    {
      path: "my-work",
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

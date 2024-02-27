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
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import ErrorPage from "./pages/ErrorPage";

function App() {
  const preference = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [isDark, setIsDark] = useLocalStorage("isDark", preference);
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
      errorElement: <ErrorPage />,
    },
  ]);

  return (
    <div className="App" data-theme={isDark ? "dark" : "light"}>
    <Header />
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

import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from '../views/Home';
import About from '../views/About';
import Service from '../views/Service';
import Why from '../views/Why';
import Client from '../views/Client';
import Contact from '../views/Contact';
import Career from '../views/Career';
import RootLayout from '../RootLayout';

const ReactRoute = () => {

  const router = createBrowserRouter([
    {
      element: <RootLayout />,   // 👈 wrap everything
      children: [
        { path: "/", element: <Home /> },
        { path: "/about", element: <About /> },
        { path: "/service", element: <Service /> },
        { path: "/why_us", element: <Why /> },
        { path: "/client", element: <Client /> },
        { path: "/contact", element: <Contact /> },
        { path: "/career", element: <Career /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default ReactRoute
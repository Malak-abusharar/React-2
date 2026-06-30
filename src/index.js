import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./Pages/Home"
import Basic from "./Pages/Basic"
import Framework from "./Pages/Frameworks"
import Tips from "./Pages/Tips"
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <h1>Not Found</h1>,
  },
    {
    path: "/Basic",
    element: <Basic />,
  },
    {
    path: "/Framework",
    element: <Framework />,
  },
    {
    path: "/Tips",
    element: <Tips />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
   <RouterProvider router={router} />
  </React.StrictMode>
);


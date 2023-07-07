import React from "react";
import ReactDOM from "react-dom/client";
import Frontend from "./js/Layouts/Frontend.jsx";
import "./css/App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Error404 from "./js/Error/Error404.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Frontend />,
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

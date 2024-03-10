import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Home } from "./Pages/Home.tsx";
import { Login } from "./Pages/Login.tsx";
import {LandPage} from "./Pages/LandPage.tsx";

const router = createBrowserRouter([
  { path: "/home", element: <Home /> },
  { path: "/login", element: <Login /> },
  {path: "", element: <LandPage />}
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


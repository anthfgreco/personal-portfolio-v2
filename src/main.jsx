import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import HomePage from "./HomePage";
import ProjectsPage from "./ProjectsPage";
import ErrorPage from "./ErrorPage";
import { createHashRouter, RouterProvider } from "react-router-dom";

// use createHashRouter instead of createBrowserRouter to fix 404 error when refreshing /projects route
const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/projects",
        element: <ProjectsPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

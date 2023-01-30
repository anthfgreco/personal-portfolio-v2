import React from "react";
import ReactDOM from "react-dom/client";
import {
  createHashRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

import "./index.css";
import App from "./App";
import HomePage from "./HomePage";
import ProjectsPage from "./ProjectsPage";
import ErrorPage from "./ErrorPage";

// use createHashRouter instead of createBrowserRouter to fix 404 error when refreshing /projects route on GitHub pages
const router = createHashRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/projects" element={<ProjectsPage />}></Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

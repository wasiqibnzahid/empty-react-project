import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import LazyLoader from "../components/LazyLoader";
const HomePage = lazy(() => import("../pages/HomePage"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LazyLoader Component={HomePage} />,
  },
]);

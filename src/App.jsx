import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { LOCATIONS } from "@/constants";
import Home from "@/pages/Home";

import "@/assets/styles/css/resets.css";
import "@/assets/styles/css/globals.css";

const router = createBrowserRouter([
  {
    path: LOCATIONS.HOME,
    element: <Home />,
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

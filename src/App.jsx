import React, { useState } from "react";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout.jsx";
import Allergeni from "./pages/allergeni.jsx";
import Prodotti from "./pages/prodotti.jsx";
import HomePages from "./pages/homepages.jsx";
import Promozioni from "./pages/promozioni.jsx";
import { FaReacteurope } from "react-icons/fa";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <HomePages />,
      },

      {
        path: "allergeni",
        element: <Allergeni />,
      },
      {
        path: "prodotti/:name",
        element: <Prodotti />,

      },
      {
        path: "promozioni",
        element: <Promozioni />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={routes} />;
}

export default App;

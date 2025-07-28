import React from "react";
import "./App.css";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout.jsx";
import Allergeni from "./pages/allergeni.jsx";
import Prodotti from "./pages/prodotti.jsx";
import HomePages from "./pages/homepages.jsx";
import Promozioni from "./pages/promozioni.jsx";
import IntroPage from "./pages/IntroPage.jsx";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <IntroPage />, // Homepage iniziale senza layout
  },
  {
    path: "/home",
    element: <Navigate to="/app/home" replace />, // Redirect da /home a /app/home
  },
  {
    path: "/app",
    element: <Layout />, // Layout principale
    children: [
      {
        path: "home",
        element: <HomePages />,
      },
      {
        path: "allergeni",
        element: <Allergeni />,
      },
      {
        path: "prodotti",
        children: [
          {
            index: true,
            element: <Navigate to="burgers" replace /> // Redirect automatico a /app/prodotti/burgers
          },
          {
            path: ":name",
            element: <Prodotti />, // Pagina prodotti dinamica (es. burgers, salads, ecc.)
          }
        ]
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

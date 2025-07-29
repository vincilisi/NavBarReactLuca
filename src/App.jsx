import React from "react";
import "./App.css";
import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./components/layout.jsx";
import Allergeni from "./pages/allergeni.jsx";
import Prodotti from "./pages/prodotti.jsx";
import HomePages from "./pages/homepages.jsx";
import Promozioni from "./pages/promozioni.jsx";
import IntroPage from "./pages/IntroPage.jsx";
import Login from "./pages/login.jsx";
import PrivateRoute from "./components/privateRoute.jsx";
import { AuthProvider } from "./context/AuthContext.jsx";

const routes = createBrowserRouter([
  { path: "/", element: <IntroPage /> },
  { path: "/login", element: <Login /> },
  { path: "/home", element: <Navigate to="/app/home" replace /> },

  {
    path: "/app",
    element: <PrivateRoute />, // blocca se non loggato
    children: [
      {
        path: "",
        element: <Layout />,
        children: [
          { path: "home", element: <HomePages /> },
          { path: "allergeni", element: <Allergeni /> },
          {
            path: "prodotti",
            children: [
              { index: true, element: <Navigate to="burgers" replace /> },
              { path: ":name", element: <Prodotti /> },
            ],
          },
          { path: "promozioni", element: <Promozioni /> },
        ],
      },
    ],
  },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={routes} />
    </AuthProvider>
  );
}

export default App;

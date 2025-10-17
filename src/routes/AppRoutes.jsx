import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout";
import Home from "../pages/Home";
import Carrinho from "../pages/Carrinho";
import Perfil from "../pages/Perfil";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout/>,
    children: [
      { index: true, element: <Home /> },
      { path: "carrinho", element: <Carrinho /> },
      { path: "perfil", element: <Perfil /> },
    ],
  },
]);

export default router;
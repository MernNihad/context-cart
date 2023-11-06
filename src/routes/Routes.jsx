import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "../components/Layout/Layout";
import Home from "../components/Home/Home";
import Login from "../components/Login/Login";
import Card from "../components/Cards/Card";
import Cart from "../components/cart/carts";
import ProductView from "../ProductView/ProductView";

function Routes() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "shoes",
          element: <Card />,
        },
        {
          path: "clothes",
          element: <Home />,
        },
        {
          path: "kids",
          element: <Home />,
        },
        {
          path: "tradintional",
          element: <Home />,
        },
        {
          path: "cart",
          element: <Cart />,
        },
        {
          path: "productview/:id",
          element: <ProductView />,
        },
      ],
    },
    {
      path: "login",
      element: <Login />,
    },
  ]);

  return (
    <>
        <RouterProvider router={router} />
    </>
  );
}

export default Routes;

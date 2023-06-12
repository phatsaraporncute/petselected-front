import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NavbarAdmin from "../components/NavbarAdmin";
import AdminAdd from "../pages/AdminAdd";
import AdminEdit from "../pages/AdminEdit";
import AdminOrder from "../pages/AdminOrder";
import AdminProducts from "../pages/AdminProducts";
import HomePage from "../pages/HomePage";
import Login from "../pages/Login";
import OrderPage from "../pages/OrderPage";
import Product from "../pages/Product";
import Register from "../pages/Register";
import Shop from "../pages/Shop";

const router = createBrowserRouter([
  {
    path: "/admin",
    element: (
      <>
        <NavbarAdmin />
        <Outlet />
      </>
    ),
    children: [
      {
        path: "homepage",
        element: <HomePage />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "adminorder",
        element: <AdminOrder />,
      },
      {
        path: "adminproducts",
        element: <AdminProducts />,
      },
      {
        path: "adminedit",
        element: <AdminEdit />,
      },
      {
        path: "adminadd",
        element: <AdminAdd />,
      },
    ],
  },
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    ),

    children: [
      {
        path: "homepage",
        element: <HomePage />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
      {
        path: "register",
        element: <Register />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "product",
        element: <Product />,
      },
      {
        path: "order",
        element: <OrderPage />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}

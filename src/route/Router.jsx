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
import RedirectIfAdmin from "./RedirectIfAdmin";

const router = createBrowserRouter([
  {
    path: "/admin",
    element: (
      <>
        <NavbarAdmin />
        <Outlet />
        <Footer />
      </>
    ),
    children: [
      {
        index: true,
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
        path: "adminedit/:id",
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
        <RedirectIfAdmin>
          <Navbar />
          <Outlet />
          <Footer />
        </RedirectIfAdmin>
      </>
    ),

    children: [
      {
        path: "/",
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
        path: "product/:id",
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

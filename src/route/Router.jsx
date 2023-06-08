import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import Navbar from "../components/Navbar";
import HomePage from "../pages/HomePage";
import Shop from "../pages/Shop";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Outlet />
      </>
    ),
  },
  {
    children: [
      {
        path: "/homepage",
        element: <HomePage />,
      },
      {
        path: "/shop",
        element: <Shop />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}

import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
// import ErrorPage from "../pages/ErrorPage";
import About from "../pages/About";
import Products from "../pages/Products";
import Contact from "../pages/Contact";
import SingleProduct from "../pages/SingleProduct";
import DashboardLayout from "../layout/DashboardLayout";
import MyProfile from "../pages/Dashboard/MyProfile";
import ManageProduct from "../pages/Dashboard/ManageProduct";
import AddProduct from "../pages/Dashboard/AddProduct";
import AllOrder from "../pages/Dashboard/AllOrder";
import AllUser from "../pages/Dashboard/AllUser";
import Statistics from "../pages/Dashboard/Statistics";
import ChangePassword from "../pages/Dashboard/ChangePassword";
import UpdateProduct from "../pages/Dashboard/UpdateProduct";
import MyOrder from "../pages/Dashboard/MyOrder";
import UpdateProfile from "../pages/Dashboard/UpdateProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/products",
        element: <Products />,
      },
      {
        path: "/products/:id",
        element: <SingleProduct />,
      },
      {
        path: "/about-us",
        element: <About />,
      },
      {
        path: "/contact-us",
        element: <Contact />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <DashboardLayout />,
    children: [
      {
        path: "manage-products",
        element: <ManageProduct />,
      },
      {
        path: "update-product/:id",
        element: <UpdateProduct />,
      },
      {
        path: "add-product",
        element: <AddProduct />,
      },
      {
        path: "all-order",
        element: <AllOrder />,
      },
      {
        path: "all-user",
        element: <AllUser />,
      },
      {
        path: "statistics",
        element: <Statistics />,
      },
      {
        path: "my-order",
        element: <MyOrder />,
      },
      {
        path: "change-password",
        element: <ChangePassword />,
      },
      {
        path: "my-profile",
        element: <MyProfile />,
      },
      {
        path: "update-profile",
        element: <UpdateProfile />,
      },
    ],
  },
]);

export default router;

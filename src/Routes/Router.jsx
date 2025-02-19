import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Layouts/Home/Home";
import FoodMenu from "../Layouts/FoodMenu/FoodMenu";
import Order from "../Layouts/Order/Order";
import Login from "../Pages/Login";
import SignUp from "../Pages/SignUp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/menu",
        element: <FoodMenu></FoodMenu>,
      },
      {
        path: "/order",
        element: <Order></Order>,
      },
      {
        path: "/order/:category",
        element: <Order></Order>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signup",
        element: <SignUp></SignUp>,
      },
    ],
  },
]);

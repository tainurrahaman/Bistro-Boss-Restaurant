import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Layouts/Home/Home";
import FoodMenu from "../Layouts/FoodMenu/FoodMenu";
import Order from "../Layouts/Order/Order";

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
        path: "/order/:category",
        element: <Order></Order>,
      },
    ],
  },
]);

import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu";
import Orders from "../Pages/Orders/Orders/Orders";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "our-menu",
                element: <OurMenu></OurMenu>
            },
            {
                path: "orders",
                element: <Orders></Orders>
            }
        ]
    },
]);
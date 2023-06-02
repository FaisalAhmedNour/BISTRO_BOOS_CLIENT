import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import Home from "../Pages/Home/Home/Home";
import OurMenu from "../Pages/OurMenu/OurMenu";
import Orders from "../Pages/Orders/Orders/Orders";
import ContactUs from "../Pages/ContactUs/ContactUs/ContactUs";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
import PrivateRoute from "./PrivateRoute";

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
                path: "orders/:title",
                element: <Orders></Orders>
            },
            {
                path: "contact-us",
                element: <PrivateRoute><ContactUs></ContactUs></PrivateRoute>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "signup",
                element: <SignUp></SignUp>
            }
        ]
    },
]);
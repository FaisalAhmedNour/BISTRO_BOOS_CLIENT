import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../../Pages/Shared/Navbar/Navbar";
import Footer from "../../Pages/Shared/Footer/Footer";

const Main = () => {
    const location = useLocation();
    const noLoginLogOut = location.pathname.includes('login') || location.pathname.includes('signup');
    // console.log(noLoginLogOut)

    return (
        <div>
            {noLoginLogOut || <Navbar></Navbar>}
            <Outlet></Outlet>
            {noLoginLogOut || <Footer></Footer>}
        </div>
    );
};

export default Main;
import { Outlet } from "react-router-dom";
import Navbar from "../../Routes/Pages/Shared/Navbar/Navbar";
import Footer from "../../Routes/Pages/Shared/Footer/Footer";

const Main = () => {
    return (
        <div>
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;
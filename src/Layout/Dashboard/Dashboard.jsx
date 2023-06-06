import { NavLink, Outlet } from "react-router-dom";
import { FaCalendar, FaHamburger, FaHome, FaShoppingBag, FaShoppingCart, FaUsers, FaUtensils, FaWallet } from 'react-icons/fa';

const Dashboard = () => {

    // TODO: Admin or not 
    const isAdmin = true;

    return (
        <div className=" max-w-[1500px] mx-auto grid grid-cols-5 gap-0 bg-[#F6F6F6] min-h-screen">
            <div className=" max-w-[280px] border mr-0 bg-[#D1A054] pt-24">
                <h2 className="text-4xl font-bold text-center">Bistro Boss</h2>
                <h4 className="text-2xl font-semibold text-center">Restaurant</h4>
                <ul className="menu p-4 h-full sideBar">
                    {/* Sidebar content here */}
                    {
                        isAdmin ?
                            <>
                                <li className="text-xl font-semibold hover:text-white">
                                    <NavLink to='/home'>
                                        <FaHome></FaHome>
                                        Admin Home
                                    </NavLink>
                                </li>
                                <li className="text-xl font-semibold hover:text-white">
                                    <NavLink to='all-items'>
                                        <FaUtensils></FaUtensils>
                                        Add Items
                                    </NavLink>
                                </li>
                                <li className="text-xl font-semibold hover:text-white">
                                    <NavLink to='manage-items'>
                                        <FaHamburger></FaHamburger>
                                        Manage Items
                                    </NavLink>
                                </li>
                                <li className="text-xl font-semibold hover:text-white">
                                    <NavLink to='manage-bookings'>
                                        <FaWallet></FaWallet>
                                        Manage Bookings
                                    </NavLink>
                                </li>
                                <li className="text-xl font-semibold hover:text-white">
                                    <NavLink to='all-users'>
                                        <FaUsers></FaUsers>
                                        All users
                                    </NavLink>
                                </li>
                            </> :
                            <>
                                <li className="text-xl font-semibold hover:text-white">
                                    <NavLink to='/home'>
                                        <FaHome></FaHome>
                                        User Home
                                    </NavLink>
                                </li>
                                <li className="text-xl font-semibold hover:text-white">
                                    <NavLink to='reservations'>
                                        <FaCalendar></FaCalendar>
                                        Reservations
                                    </NavLink>
                                </li>
                                <li className="text-xl font-semibold hover:text-white">
                                    <NavLink to='history'>
                                        <FaWallet></FaWallet>
                                        payment history
                                    </NavLink>
                                </li>
                                <li className="text-xl font-semibold hover:text-white">
                                    <NavLink to='my-cart'>
                                        <FaShoppingCart></FaShoppingCart>
                                        My Cart
                                    </NavLink>
                                </li>
                                
                            </>
                    }
                    <div className="divider"></div>
                    <li className="text-xl font-semibold hover:text-white">
                        <NavLink to='/'>
                            <FaHome></FaHome>
                            Home
                        </NavLink>
                    </li>
                    <li className="text-xl font-semibold hover:text-white">
                        <NavLink to='/orders/salads'>
                            <FaHamburger></FaHamburger>
                            Shop
                        </NavLink>
                    </li>
                    <li className="text-xl font-semibold hover:text-white">
                        <NavLink to='/contact-us'>
                            <FaShoppingBag></FaShoppingBag>
                            Contact
                        </NavLink>
                    </li>
                </ul>
            </div>
            <div className="ms-0 col-span-4">
                {/* Page content here */}
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;

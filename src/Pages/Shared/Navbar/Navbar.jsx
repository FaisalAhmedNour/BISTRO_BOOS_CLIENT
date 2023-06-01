import { Link } from "react-router-dom";
import cartIcon from '../../../assets/icon/151-1511569_cart-notifications-free-shopping-cart-favicon-hd-png-removebg-preview.png'

const Navbar = () => {

    const listItems = <>
        <li className="uppercase font-semibold text-xl hover:text-[#EEFF25]">
            <Link to='/'>Home</Link>
        </li>
        <li className="uppercase font-semibold text-xl hover:text-[#EEFF25]">
            <a>Contact us</a>
        </li>
        <li className="uppercase font-semibold text-xl hover:text-[#EEFF25]">
            <a>DashBoard</a>
        </li>
        <li className="uppercase font-semibold text-xl hover:text-[#EEFF25]">
            <Link to='/our-menu'>Our menu</Link>
        </li>
        <li className="uppercase font-semibold text-xl hover:text-[#EEFF25]">
            <Link to='orders/salads'>
                Orders
                <img className="w-[60px]" src={cartIcon} />
            </Link>
        </li>
        <li className="uppercase font-semibold text-xl hover:text-[#EEFF25]">
            <a>sign out</a>
        </li>
    </>

    return (
        <>
            <div className="navbar fixed max-w-[1900px] z-10 bg-opacity-30 bg-black text-white">
                <div className="navbar-start">
                    <div className="dropdown">
                        <label tabIndex={0} className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                            {listItems}
                        </ul>
                    </div>
                    <div className="flex flex-col gap-0 items-center my-2">
                        <span className="ml-3 normal-case text-3xl font-bold">BISTRO BOSS</span>
                        <span className="ml-3 normal-case text-2xl text-justify font-semibold">Restaurant</span>
                    </div>
                </div>
                <div className="navbar-end mr-0 hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        {listItems}
                    </ul>
                </div>
                <div className=" mr-5">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
                        </div>
                    </label>
                </div>
            </div>
        </>
    );
};

export default Navbar;
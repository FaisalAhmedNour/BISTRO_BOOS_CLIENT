import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../../Hooks/useCart";

const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const [cart] = useCart();
    // console.log(user?.displayName);
    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .then(error => {
                console.log(error)
            })
    }

    const listItems = <>
        <li className="uppercase font-semibold text-xl hover:text-[#EEFF25]">
            <Link to='/'>Home</Link>
        </li>
        <li className="uppercase font-semibold text-xl hover:text-[#EEFF25]">
            <Link to='/contact-us'>Contact us</Link>
        </li>
        <li className="uppercase font-semibold text-xl hover:text-[#EEFF25]">
            <Link to='/our-menu'>Our menu</Link>
        </li>
        <li className="uppercase font-semibold text-xl hover:text-[#EEFF25]">
            <Link to='orders/salads'>
                Orders
                {/* <img className="w-[60px]" src={cartIcon} /> */}
            </Link>
        </li>
        <li className="uppercase font-semibold text-3xl hover:text-[#EEFF25]">
            <Link to='dashboard/my-cart'>
                <button className="flex relative">
                    <FaShoppingCart></FaShoppingCart>
                    <div className="badge badge-primary  border-none text-[#f1e03e] font-bold absolute left-5 bottom-4 mt-1">{cart?.length || 0}</div>
                </button>
            </Link>
        </li>
        {
            user ?
                <li className="uppercase font-semibold text-xl hover:text-[#EEFF25]" onClick={handleLogOut} >
                    <a>sign out</a>
                </li> :
                <li className="uppercase font-semibold text-xl hover:text-[#EEFF25]">
                    <Link to='/login'>Log in</Link>
                </li>
        }
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
                {
                    user &&
                    <div className=" mr-5 tooltip tooltip-left" data-tip={user?.displayName ? user.displayName : ''}>
                        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                            <div className="w-10 rounded-full">
                                <img src={user.photoURL ? user.photoURL : 'https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png'} />
                            </div>
                        </label>
                    </div>
                }
            </div>
        </>
    );
};

export default Navbar;
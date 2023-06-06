import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import useCart from "../../../Hooks/useCart";
import CartItem from "../CartItem/CartItem";

const MyCart = () => {

    const [cart] = useCart();
    const length = cart.length;
    const totalPrice = cart.reduce((sum, item) => item.price + sum, 0)

    return (
        <div>
            <Helmet>
                <title>Bistro | My Cart</title>
            </Helmet>
            <div className="mt-16 mb-10">
                <SectionTitle
                    heading='WANNA ADD MORE?'
                    subHeading="---My Cart---"
                ></SectionTitle>
            </div>
            <div className="max-w-[990px] mx-auto bg-white px-10 py-5">
                <div className="uppercase flex justify-between">
                    <h1 className="text-2xl font-bold">Total Orders: {length}</h1>
                    <h1 className="text-2xl font-bold">Total Price: ${totalPrice}</h1>
                    <button
                        className="text-xl bg-[#D1A054] px-3 py-2 rounded-xl text-white font-bold"
                    >Pay</button>
                </div>
                <div className="overflow-x-auto mt-5">
                    <table className="table w-[890px] mx-auto">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Item Image</th>
                                <th>Item Name</th>
                                <th>Price</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        {/* body */}
                        <tbody>
                            {
                                cart.map((item, index) => <CartItem
                                    key={item._id}
                                    item={item}
                                    index={index}
                                ></CartItem>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default MyCart;
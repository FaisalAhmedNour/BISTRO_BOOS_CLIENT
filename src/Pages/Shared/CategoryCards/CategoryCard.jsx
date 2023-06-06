import { useContext } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import useCart from "../../../Hooks/useCart";

const CategoryCard = ({ item }) => {
    // console.log(item)
    const { _id, image, name, recipe, price } = item;
    const { user } = useContext(AuthContext);
    const [, refetch] = useCart()

    const navigate = useNavigate()
    const location = useLocation();

    const handleAddToCard = () => {
        item.UserEmail = user?.email;
        // console.log(item);
        if (user && user.email) {
            const orderItrem = { ItemId: _id, image, name, price, email: user.email }
            fetch('http://localhost:5000/cart', {
                method: "POST",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(orderItrem)
            })
                .then(res => res.json())
                .then(data => {
                    // update number of items in cart
                    refetch();
                    if (data.insertedId) {
                        Swal.fire({
                            position: 'center',
                            icon: 'success',
                            title: 'Successfully added to cart',
                            showConfirmButton: false,
                            timer: 1500
                        })
                    }
                })
        }
        else {
            Swal.fire({
                title: 'Please login first...',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Login Now'
            }).then((result) => {
                if (result.isConfirmed) {
                    navigate('/login', { state: { from: location } })
                }
            })
        }
    }
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto relative">
            <figure className="h-[300px]"><img className="w-full rounded-t-xl" src={image} alt="Caeser Salad" /></figure>
            <span className="absolute top-10 right-7 bg-[#111827] font-[600] text-white text-base px-4 py-2 rounded-md">${price}</span>
            <div className="card-body text-center">
                <h2 className="mx-auto font-semibold text-xl">{name}</h2>
                <p className="text-sm">{recipe}</p>
                <div className="card-actions justify-center">
                    <button
                        className="btn text-[#BB8506] bg-[#E8E8E8] border-0 border-b-4 border-[#BB8506]"
                        onClick={handleAddToCard}
                    >Add to Card</button>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;

import { FaTrash } from "react-icons/fa";
import Swal from "sweetalert2";
import useCart from "../../../Hooks/useCart";

const CartItem = ({ item, index }) => {

    const [, refetch] = useCart();
    const { _id, image, price, name } = item;

    const handleDelete = () => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5000/cart/${_id}`, {
                    method: "DELETE",
                })
                    .then(() => {
                        refetch();
                        Swal.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success'
                        )
                    })
            }
        })

    }
    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                <img className="w-[75px] h-[75px] rounded-md" src={image} alt="" />
            </td>
            <td className="font-[600] ">{name}</td>
            <td className="font-[600] text-end pr-10">${price}</td>
            <td>
                <button
                    onClick={handleDelete}
                    className="btn btn-ghost bg-[red] text-white"
                ><FaTrash></FaTrash></button>
            </td>
        </tr>
    );
};

export default CartItem;
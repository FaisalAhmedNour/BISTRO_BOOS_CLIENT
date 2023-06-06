import { FaTrash, FaUser, FaUserShield } from "react-icons/fa";
import Swal from "sweetalert2";

const UserItem = ({ user, index, refetch }) => {
    const { _id, name, email } = user;

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
                            `${name} is now admin`,
                            'success'
                        )
                    })
            }
        })
    }

    const handleAdmin = () => {
        fetch(`http://localhost:5000/users/admin/${_id}` , {
            method: "PATCH"
        })
        .then(res => res.json())
        .then(data => {
            if(data.modifiedCount){
                refetch()
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Successfully updated user to Admin',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        })
    }

    return (
        <tr>
            <th>{index + 1}</th>
            <td>
                {name}
            </td>
            <td className="font-[600] ">{email}</td>
            <td>
                <button
                    onClick={handleAdmin}
                    className="btn btn-ghost bg-[green] text-white"
                >
                    {
                        user.role === 'admin' ?
                        <FaUserShield></FaUserShield> :
                        <FaUser></FaUser>
                    }
                </button>
            </td>
            <td>
                <button
                    onClick={handleDelete}
                    className="btn btn-ghost bg-[red] text-white"
                ><FaTrash></FaTrash></button>
            </td>
        </tr>
    );
};

export default UserItem;
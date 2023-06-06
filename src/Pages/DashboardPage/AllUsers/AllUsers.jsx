import { useQuery } from "@tanstack/react-query";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet-async";
import UserItem from "../UserItem/UserItem";

const AllUsers = () => {

    const {data: users = [] , refetch } = useQuery(['users'], async() => {
        const res = await fetch('http://localhost:5000/users')
        return res.json();
    })
    return (
        <div>
            <Helmet>
                <title>Bistro | All Users</title>
            </Helmet>
            <div className="mt-16 mb-10">
                <SectionTitle
                    heading='MANAGE ALL USERS' 
                    subHeading="---How Many??---"
                ></SectionTitle>
            </div>
            <div className="max-w-[990px] mx-auto bg-white px-10 py-5">
                <div className="uppercase flex justify-start">
                    <h1 className="text-2xl font-bold">Total Orders: {length}</h1>
                    
                </div>
                <div className="overflow-x-auto mt-5">
                    <table className="table w-[890px] mx-auto">
                        {/* head */}
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Email</th>  
                                <th>Role</th>
                                <th>Action</th> 
                            </tr>
                        </thead>
                        {/* body */}
                        <tbody>
                            {
                                users.map((user, index) => <UserItem
                                    key={user._id}
                                    user={user}
                                    index={index}
                                    refetch={refetch}
                                ></UserItem>)
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllUsers;
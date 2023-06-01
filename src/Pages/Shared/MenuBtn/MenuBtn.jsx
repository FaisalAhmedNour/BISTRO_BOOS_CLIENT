import { Link } from "react-router-dom";

const MenuBtn = ({ text, title }) => {
    console.log(title)
    return (
        <Link to={`/orders/${title}`} className="uppercase mt-5 mb-10 flex justify-center">
            <span className="btn border-0 border-b-4 bg-white text-black ">{text}</span>
        </Link>
    );
};

export default MenuBtn;
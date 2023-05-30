import { useEffect, useState } from "react";
import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
// import '../../../../../public/menu.json';

const PopularMenu = () => {
    const [menu, setMenu] = useState([])
    useEffect(() => {
        fetch('menu.json')
        .then(res => res.json())
        .then(datas => {
            const popularItems = datas.filter(data => data.category === 'popular')
            setMenu(popularItems)})
    }, [])
    return (
        <section className="text-center">
            <SectionTitle
                heading={"FROM OUR MENU"}
                subHeading={"---Check it out---"}
            ></SectionTitle>
            <div className="grid grid-cols-2 gap-10 mt-10">
                {
                    menu.map(item => <MenuItem
                        key={item._id}
                        item={item}
                    ></MenuItem>)
                }
            </div>
            <button className="btn uppercase mt-5 border-0 border-b-4 bg-white text-black">View Full menu</button>
        </section>
    );
};

export default PopularMenu;
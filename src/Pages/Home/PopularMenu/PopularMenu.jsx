// import { useEffect, useState } from "react";
import useMenu from "../../../Hooks/useMenu";
import MenuItems from "../../Shared/MenuItems/MenuItems";
// import '../../../../../public/menu.json';

const PopularMenu = ({ category }) => {
    // console.log(category)
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category.toLowerCase() === category.toLowerCase())
    // const [menu, setMenu] = useState([])
    // useEffect(() => {
    //     fetch('menu.json')
    //     .then(res => res.json())
    //     .then(datas => {
    //         const popularItems = datas.filter(data => data.category === 'popular')
    //         setMenu(popularItems)})
    // }, [])
    return (
        <section className="text-center w-[1350px] mx-auto">
            <MenuItems
                items={popular}
            ></MenuItems>
        </section>
    );
};

export default PopularMenu;
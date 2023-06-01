import PopularMenu from "../../Home/PopularMenu/PopularMenu";
import Cover from "../Cover/Cover";
import MenuBtn from "../MenuBtn/MenuBtn";

const MenuSection = ({img, title, subTitle, category}) => {
    // console.log(title);
    return (
        <div>
            <Cover
                img={img}
                heading={title}
                subHeading={subTitle}
                position={"non-top"}
            ></Cover>
            <PopularMenu
                category={category}
            ></PopularMenu>
            <MenuBtn
                text={"ORDER YOUR FAVOURITE FOOD"}
                title={title}
            ></MenuBtn>
        </div>
    );
};

export default MenuSection;
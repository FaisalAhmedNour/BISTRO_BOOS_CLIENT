import useMenu from "../../../Hooks/useMenu";
import CategoryCard from "./CategoryCard";

const CategoryCards = ({category}) => {
    const [menu] = useMenu();
    // console.log(menu)
    const items = menu.filter(item => item.category.toLowerCase() === category.toLowerCase())
    console.log(items)

    return (
        <div className="grid grid-cols-3 mx-auto gap-10 items-center lg:justify-between mb-20">
            {
                items.map(item => <CategoryCard
                    key={item._id}
                    item={item}
                ></CategoryCard>)
            }
        </div>
    );
};

export default CategoryCards;
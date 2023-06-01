
import useMenu from "../../../Hooks/useMenu";
import CategoryCard from "./CategoryCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const CategoryCards = ({ category }) => {
    const [menu] = useMenu();
    const items = menu.filter(item => item.category.toLowerCase() === category.toLowerCase())
    const numberOfPages = Math.ceil(items.length / 6);
    const pages = [];
    const allPageItems = [];
    for (let i = 1; i <= numberOfPages; i++) {
        pages.push(i);
        i < numberOfPages ?
            allPageItems.push(items.slice((i - 1) * 6, ((i - 1) * 6) + 6)) :
            allPageItems.push(items.slice((i - 1) * 6, items.length))
    }
    const pagination = {
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        },
    };
    return (
        <div>
            <Swiper
                pagination={pagination}
                modules={[Pagination]}
                className="mySwiper"
            >
                {
                    allPageItems.map(pageItems => <SwiperSlide
                        key={allPageItems.indexOf(pageItems)}
                    >
                        <div className="grid grid-cols-3 mx-auto gap-10 items-center lg:justify-between mb-20">
                            {
                                pageItems.map(item => <CategoryCard
                                    key={item._id}
                                    item={item}
                                ></CategoryCard>)
                            }
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </div>
    );
};

export default CategoryCards;


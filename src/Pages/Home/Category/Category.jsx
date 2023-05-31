import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// import "./styles.css";
import { Pagination } from "swiper";
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const Category = () => {
    return (
        <section className="w-[1350px] mx-auto">
            <SectionTitle
                heading={"ORDER ONLINE"}
                subHeading={"---From 11:00am to 10:00pm---"}
            ></SectionTitle>
            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}
                modules={[Pagination]}
                className="mySwiper my-10 mx-auto"
            >
                <SwiperSlide className="mb-20">
                    <img src={slide1} alt="" />
                    <h3 className="text-3xl text-white -mt-16 text-center uppercase">Salads</h3>
                </SwiperSlide>
                <SwiperSlide className="mb-20">
                    <img src={slide2} alt="" />
                    <h3 className="text-3xl text-white -mt-16 text-center uppercase">Pizzas</h3>
                    </SwiperSlide>
                <SwiperSlide className="mb-20">
                    <img src={slide3} alt="" />
                    <h3 className="text-3xl text-white -mt-16 text-center uppercase">Soups</h3>
                    </SwiperSlide>
                <SwiperSlide className="mb-20">
                    <img src={slide4} alt="" />
                    <h3 className="text-3xl text-white -mt-16 text-center uppercase">Desserts</h3>
                    </SwiperSlide>
                <SwiperSlide className="mb-20">
                    <img src={slide5} alt="" />
                    <h3 className="text-3xl text-white -mt-16 text-center uppercase">Salads</h3>
                    </SwiperSlide>
            </Swiper>
        </section>
    );
};

export default Category;
import { Swiper, SwiperSlide } from "swiper/react";
import '@smastrom/react-rating/style.css'
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";


const Testimonials = () => {

    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/reviews')
        .then(res => res.json())
        .then(data => setReviews(data))
    }, [])
    // console.log(reviews)
    return (
        <section className="w-[1350px] mx-auto">
            <SectionTitle
                heading={"TESTIMONIALS"}
                subHeading={"---What Our Clients Say---"}
            ></SectionTitle>
            <Swiper navigation={true} modules={[Navigation]} className="mySwiper my-20">
                
                {
                    reviews.map(review => <SwiperSlide
                        key={review._id}
                    >
                        <div className="text-center px-60">
                            <Rating
                                style={{ maxWidth: 180 }}
                                value={review.rating}
                                readOnly 
                                className="mx-auto mb-5"
                            />
                            <i className="fa-solid fa-quote-left text-8xl text-black"></i>
                            <p>{review.details}</p>
                            <h2 className="text-2xl text-[#CD9003]">{review.name}</h2>
                        </div>
                    </SwiperSlide>)
                }
            </Swiper>
        </section>
    );
};

export default Testimonials;
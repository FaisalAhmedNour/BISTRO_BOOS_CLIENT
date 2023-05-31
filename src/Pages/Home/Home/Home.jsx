import { Helmet } from "react-helmet-async";
import Featured from "../../Featured/Featured";
import Banner from "../Banner/Banner";
import Boss from "../Boss/Boss";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import Recommended from "../Recommended/Recommended";
import Testimonials from "../Testimonials/Testimonials";
import MenuBtn from "../../Shared/MenuBtn/MenuBtn";
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Home</title>
            </Helmet>
            <Banner></Banner>
            <Category></Category>
            <Boss></Boss>
            <SectionTitle
                heading={"FROM OUR MENU"}
                subHeading={"---Check it out---"}
            ></SectionTitle>
            <PopularMenu
                category={"popular"}
            ></PopularMenu>
            <MenuBtn
                text={"View Full menu"}
            ></MenuBtn>
            <CallUs></CallUs>
            <Recommended></Recommended>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;
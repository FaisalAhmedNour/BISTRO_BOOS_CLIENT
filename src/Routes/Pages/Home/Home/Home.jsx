import Featured from "../../Featured/Featured";
import Banner from "../Banner/Banner";
import Boss from "../Boss/Boss";
import CallUs from "../CallUs/CallUs";
import Category from "../Category/Category";
import PopularMenu from "../PopularMenu/PopularMenu";
import Recommended from "../Recommended/Recommended";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Category></Category>
            <Boss></Boss>
            <PopularMenu></PopularMenu>
            <CallUs></CallUs>
            <Recommended></Recommended>
            <Featured></Featured>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Home;
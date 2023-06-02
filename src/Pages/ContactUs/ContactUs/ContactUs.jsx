import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import bannerImg from '../../../assets/contact/banner.jpg'
import SectionTitle from "../../Shared/SectionTitle/SectionTitle";
import ContactForm from "../ContactForm/ContactForm";
const ContactUs = () => {
    return (
        <div>
            <Helmet>
                <title>Bistro | Contact Us</title>
            </Helmet>
            <Cover
                img={bannerImg}
                heading={"CONTACT US"}
                subHeading={"Would you like to try a dish?"}
                position={"top"}
            ></Cover>
            <SectionTitle
                heading={'Our Location'}
                subHeading={"---Visit Us---"}
            ></SectionTitle>
            <section className="w-[1320px] mx-auto flex justify-between gap-20 mt-20">
                <div className="flex-1">
                    <button className="w-full bg-[#D1A054] text-white h-[80px] text-xl">
                        <i className="fa-solid fa-phone-volume"></i>
                    </button>
                    <div className="text-center bg-[#F3F3F3] mx-10 h-[200px]">
                        <h3 className="text-2xl font-semibold pt-10 pb-4 uppercase">Phone</h3>
                        <p>+38 (012) 34 56 789</p>
                    </div>
                </div>
                <div className="flex-1">
                    <button className="w-full bg-[#D1A054] text-white h-[80px] text-xl">
                        <i className="fa-solid fa-location-dot"></i>
                    </button>
                    <div className="text-center bg-[#F3F3F3] mx-10 h-[200px]">
                        <h3 className="text-2xl font-semibold pt-10 pb-4 uppercase">ADDRESS</h3>
                        <p>Dhaka, Bangladesh</p>
                    </div>
                </div>
                <div className="flex-1">
                    <button className="w-full bg-[#D1A054] text-white h-[80px] text-xl">
                        <i className="fa-solid fa-clock"></i>
                    </button>
                    <div className="text-center bg-[#F3F3F3] mx-10 h-[200px]">
                        <h3 className="text-2xl font-semibold pt-10 pb-4 uppercase">Working HOur</h3>
                        <p>Mon - Fri: 08:00 - 22:00</p>
                        <p>Sat - Sun: 10:00 - 23:00</p>
                    </div>
                </div>
            </section>
            <br />
            <br />
            <br />
            <SectionTitle
                heading={'CONTACT FORM'}
                subHeading={"---Send Us a Message---"}
            ></SectionTitle>
            <ContactForm></ContactForm>
        </div>
    );
};

export default ContactUs;
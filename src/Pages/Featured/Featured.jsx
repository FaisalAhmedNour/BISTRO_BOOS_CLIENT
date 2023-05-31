import img from '../../assets/home/featured.jpg'
import SectionTitle from '../Shared/SectionTitle/SectionTitle';
import './Featured.css'

const Featured = () => {
    return (
        <div className="featured-item bg-fixed mt-10 mb-20 pt-12 pb-20 text-white">
            <SectionTitle
                heading={"Featured Items"}
                subHeading={"---Check it out---"}           
            ></SectionTitle>
            <div className="flex gap-5 mx-44 items-center ">
                <img className="w-1/2" src={img} alt="" />
                <div className="">
                    <h3 className="text-xl">March, 20, 2023</h3>
                    <h3 className="text-xl my-2">WHERE CAN I GET SOME?</h3>
                    <p className="text-base">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
                    <button className="bg-opacity-30 font-semibold border-b-4 rounded-md px-4 py-2 mt-2 uppercase">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default Featured;
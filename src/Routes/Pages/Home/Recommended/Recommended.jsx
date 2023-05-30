import SectionTitle from "../../../../components/SectionTitle/SectionTitle";
import img from '../../../../assets/home/slide1.jpg'

const Recommended = () => {
    return (
        <section>
            <SectionTitle
                heading={"CHEF RECOMMENDS"}
                subHeading={"---Should Try---"}
            ></SectionTitle>
            <div className="flex flex-col lg:flex-row gap-10 items-center lg:justify-between mb-20 mt-10">
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="h-[300px]"><img className="w-full" src={img} alt="Caeser Salad" /></figure>
                    <div className="card-body text-center">
                        <h2 className="mx-auto font-semibold text-xl">Caeser Salad</h2>
                        <p className="text-sm">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                            <button className="btn text-[#BB8506] bg-[#E8E8E8] border-0 border-b-4 border-[#BB8506]">Add to Card</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="h-[300px]"><img className="w-full" src={img} alt="Caeser Salad" /></figure>
                    <div className="card-body text-center">
                        <h2 className="mx-auto font-semibold text-xl">Caeser Salad</h2>
                        <p className="text-sm">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                            <button className="btn text-[#BB8506] bg-[#E8E8E8] border-0 border-b-4 border-[#BB8506]">Add to Card</button>
                        </div>
                    </div>
                </div>
                <div className="card w-96 bg-base-100 shadow-xl">
                    <figure className="h-[300px]"><img className="w-full" src={img} alt="Caeser Salad" /></figure>
                    <div className="card-body text-center">
                        <h2 className="mx-auto font-semibold text-xl">Caeser Salad</h2>
                        <p className="text-sm">Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
                        <div className="card-actions justify-center">
                            <button className="btn text-[#BB8506] bg-[#E8E8E8] border-0 border-b-4 border-[#BB8506]">Add to Card</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Recommended;
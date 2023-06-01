
const CategoryCard = ({item}) => {
    // console.log(item)
    const { image, name, recipe, price } = item;
    return (
        <div className="card w-96 bg-base-100 shadow-xl mx-auto relative">
            <figure className="h-[300px]"><img className="w-full rounded-t-xl" src={image} alt="Caeser Salad" /></figure>
            <span className="absolute top-10 right-7 bg-[#111827] font-[600] text-white text-base px-4 py-2 rounded-md">${price}</span>
            <div className="card-body text-center">
                <h2 className="mx-auto font-semibold text-xl">{name}</h2>
                <p className="text-sm">{recipe}</p>
                <div className="card-actions justify-center">
                    <button className="btn text-[#BB8506] bg-[#E8E8E8] border-0 border-b-4 border-[#BB8506]">Add to Card</button>
                </div>
            </div>
        </div>
    );
};

export default CategoryCard;
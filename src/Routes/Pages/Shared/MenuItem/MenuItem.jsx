
const MenuItem = ({item}) => {
    const {name, recipe, image, price} = item;
    return (
        <div className="flex gap-3 text-left">
            <img className="w-[120px] h-" style={{borderRadius: '0 200px 200px 200px'}} src={image} alt="" />
            <div>
                <p>{name}--------------</p>
                <p className="text-sm">{recipe}</p>
            </div>
            <p className="text-[#BB8506]">${price}</p>
        </div>
    );
};

export default MenuItem;
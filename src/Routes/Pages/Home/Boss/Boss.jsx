import banner from '../../../../assets/home/chef-service.jpg'
const Boss = () => {
    return (
            <div className="carousel-item relative w-full h-[550px] my-10">
                <img src={banner} className="w-full" />
                <div className="absolute transform -translate-y-1/2 left-5 right-5 top-1/2 bg-white px-40 py-24 mx-20 text-center">
                    <h1 className='text-4xl mb-4'>Bistro Boss</h1>
                    <p className='text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium dignissimos quos officia nobis magni qui animi soluta nemo commodi sapiente voluptatum, maiores reprehenderit ipsam? In at magnam voluptate harum culpa.</p>
                </div>
            </div>
    );
};

export default Boss;
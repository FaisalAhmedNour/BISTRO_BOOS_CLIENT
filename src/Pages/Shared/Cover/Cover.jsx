import { Parallax } from 'react-parallax';

const Cover = ({ img, heading, subHeading, position }) => {
    return (
        <Parallax
            blur={{ min: -25, max: 25 }}
            bgImage={img}
            bgImageAlt="the menu"
            strength={-200}
        >
            <div className={`hero ${position === "top" ? "h-[800px]" : "h-[700px]"}`}>
                {/* <div className="hero-overlay bg-opacity-60 max-w-5xl"></div> */}
                <div className={`hero-content text-center text-neutral-content bg-black w-[1350px] ${position === "top" ? "h-[450px]" : "h-[350px]"} bg-opacity-40`}>
                    <div className="max-w-3xl">
                        <h1 className={`mb-5 ${position === "top" ? "text-8xl" : "text-5xl"} font-semibold uppercase`}>{heading}</h1>
                        <p className={`mb-5 ${position === "top" ? "text-xl uppercase" : "text-lg"} `}>{subHeading}</p>
                    </div>
                </div>
            </div>
        </Parallax>
    );
};

export default Cover;

const SectionTitle = ({ heading, subHeading }) => {
    return (
        <div className="text-center mx-auto my-5 md:w-4/12">
            <p className="text-sm text-[#D99904] mb-2">{subHeading}</p>
            <h2 className="text-3xl py-3 border-y-4 uppercase"><span>{heading}</span></h2>
        </div>
    );
};

export default SectionTitle;
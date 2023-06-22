
const SectionTitle = ({ title, subTitle }) => {
    return (
        <div
            data-aos="fade-down"
            data-aos-duration="1500"
            className=" text-center">
            <h2 className="w-60 mx-auto text-4xl font-semibold pb-3 text-sky-500 pt-12 border-b-4 border-[#1F6782]">
                {title}
            </h2>
            <p className='text-white mt-3 text-lg'>
                {subTitle}
            </p>
        </div>
    );
};

export default SectionTitle;
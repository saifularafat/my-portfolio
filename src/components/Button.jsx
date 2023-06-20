
const Button = ({ label, adders }) => {
    return (
        <a href={adders}
            className="border group border-sky-500 text-lg  font-medium rounded-md py-2 px-4 relative md:inline-flex items-center justify-start overflow-hidden transition-all group">
            <span className="w-0 h-0 rounded bg-sky-500 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
            <span className="w-full flex items-center text-sky-400 transition-colors duration-300  ease-in-out group-hover:text-white z-10">
                {label}
            </span>
        </a>
    );
};

export default Button;
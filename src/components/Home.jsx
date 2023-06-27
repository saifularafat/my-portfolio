import banner from '../assets/bg/bg_1.png'
import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import myImage from './../assets/my-img/img.jpg'
import NavBer from './NavBer';
import { Link } from 'react-scroll';
import { TypeAnimation } from 'react-type-animation';

const Home = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${banner})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: 'cover',
                height: '100%',
                width: "100%"
            }}
            className='' >
            <NavBer />
            <div
                name="home"
                className='h-screen'>
                <div className="max-w-screen-lg mx-auto flex items-center justify-between h-full px-4 md:flex-row flex-col-reverse mt-40 md:mt-0">
                    <div
                        data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="1200"
                        className='flex flex-col justify-center h-full md:w-1/2'>
                        <h2 className='text-xl md:text-2xl md:font-bold text-white'> Hi,👋 my name is </h2>
                        <h2 className='md:text-7xl text-5xl text-white font-extrabold pb-3'><span className='text-sky-500'>Saiful</span> Islam</h2>
                        <h2 className='text-xl md:text-2xl md:font-bold font-semibold text-white'> I'm junior <span className='text-sky-500 md:text-[34px] text-xl'>
                                <TypeAnimation
                                    sequence={[
                                        "Web Developer",
                                        1000,
                                        "Front End Developer",
                                        1000,
                                        "MERN Stack Developer",
                                        1000,
                                    ]}
                                    speed={50}
                                    style={{
                                        fontSize: ''
                                    }}
                                    repeat={Infinity}
                                />
                            </span> </h2>

                        <p className='max-w-md py-4 text-slate-500'></p>
                        <div className='hidden sm:block'>
                            <Link
                                to='projects'
                                smooth
                                duration={500}
                                className="border-2 group border-sky-500 text-xl font-mono font-medium rounded-xl py-2 px-5 relative md:inline-flex items-center justify-start overflow-hidden transition-all group">
                                <span className="w-0 h-0 rounded bg-sky-500 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                                <span className="w-full flex items-center text-sky-400 transition-colors duration-300  ease-in-out group-hover:text-white z-10 tracking-wide">
                                    Projects
                                    <span className='ml-1 group-hover:rotate-90 transition duration-300'>
                                        <MdOutlineKeyboardArrowRight size={30} />
                                    </span>
                                </span>
                            </Link>
                        </div>
                    </div>
                    <div
                        data-aos="zoom-in"
                        data-aos-easing="linear"
                        data-aos-duration="1200"
                        className='md:w-1/2 max-h-screen'>
                        <img src={myImage} alt="my profile" className="md:w-5/6 w-4/4 md:h-5/6 h-3/4 rounded-full border-4 border-sky-400" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
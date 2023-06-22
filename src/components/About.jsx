// import banner from '../assets/bg/banner-bg.png'
import banner from '../assets/bg/footer-bg.png'
import aboutImage from '../assets/my-img/about.jpg'
import SectionTitle from './SectionTitle';

const About = () => {
    return (
        <div name='about'>
            <div className='max-w-screen-lg mx-auto flex md:flex-row flex-col-reverse items-center justify-center h-full px-4 py-12'>
                <div
                    data-aos="flip-left"
                    data-aos-duration="1500"
                    className='w-1/2 hidden md:block'>
                    <img src={aboutImage} alt="" className='h-4/6 w-5/6' style={{ borderRadius: '0 200px 0 180px' }} />
                </div>
                <div
                    data-aos="flip-left"
                    data-aos-duration="1200"
                    className='md:hidden block pt-8'>
                    <img src={aboutImage} alt="" className='' style={{ borderRadius: '0 180px 0 120px' }} />
                </div>
                <div className='md:w-1/2'>
                    <SectionTitle title='< About />' />
                    <h2
                        data-aos="flip-right"
                        data-aos-duration="1000"
                        className='text-lg pt-8 text-white w-full'>Hi, my name is Saiful Islam, my home town Comilla, Bangladesh. I passed from Brahmanbaria Polytechnic Institute in Computer Science Technology in 2022.  I am a MERN stack web developer, I work with React.js. I love to code a lot. I started learning react js web developer from 2022. From creating a project to building the project through user experience. Javascript  React.js, Node.js, Express, MongoDb Firebase Authentication, JWT, Cors etc. Which make the project more interesting by using the required technology. We try to project the best of all work.</h2>
                    <div
                        data-aos="flip-right"
                        data-aos-duration="1000"
                        className='md:flex flex-row items-center justify-center gap-8 text-white border-2 rounded-xl md:p-5 p-3 text-center md:text-start mt-8'>
                        <div className=''>
                            <h4 className='text-xl font-medium'> Name: <br /> <span className='text-base text-slate-400'>Saiful Islam</span></h4>
                            <h4 className='text-xl font-medium'> Email: <br /> <span className='text-base text-slate-400'>saifularafat.info@gmail.com</span></h4>
                        </div>
                        <div className=''>
                            <h4 className='text-xl font-medium'> Number: <br /> <span className='text-base text-slate-400'>+880 1646-531069 </span> </h4>
                            <h4 className='text-xl font-medium'> Adders: <br /> <span className='text-base text-slate-400'>Cumilla, Bangladesh</span></h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
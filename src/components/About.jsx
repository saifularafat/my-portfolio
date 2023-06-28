import aboutImage from '../assets/my-img/about.jpg'
import SectionTitle from './SectionTitle';
import PDFDownloadButton from './PdfDownload';

const About = () => {
    return (
        <div name='about'>
            <div className='max-w-screen-lg mx-auto flex md:flex-row flex-col-reverse items-center justify-center h-full px-4 py-12'>
                <div
                    data-aos="flip-left"
                    data-aos-duration="1500"
                    className='w-1/2 hidden md:block'>
                    <img src={aboutImage} alt="" className='h-4/6 w-5/6 rounded-lg' />
                </div>
                <div
                    data-aos="flip-left"
                    data-aos-duration="1200"
                    className='md:hidden block pt-8'>
                    <img src={aboutImage} alt="" className='' />
                </div>
                <div className='md:w-1/2'>
                    <SectionTitle title='\* About */' />
                    <h2
                        data-aos="flip-right"
                        data-aos-duration="1000"
                        className='text-lg pt-8 text-white w-full text-justify'>
                        Hi, my name is Saiful Islam, my home town Cumilla, Bangladesh. I passed from Brahmanbaria Polytechnic Institute in Computer Science Technology in 2022.  I am a MERN stack web developer, I work with React.js. I love to code a lot. I started learning react js web developer from 2022.
                        I have completed 8 projects with MERN Stack. Creating a project to building the project through user experience. Javascript  React.js, Node.js, Express, MongoDb Firebase Authentication, JWT, Cors etc. Which make the project more interesting by using the required technology. We try to project the best of all work.
                    </h2>
                    <div
                        data-aos="flip-right"
                        data-aos-duration="1000"
                        className='mt-8 space-y-2'>
                        <h4 className='text-2xl text-white font-medium'> Name:  <span className='text-xl text-slate-400 font-medium tracking-wide'>Saiful Islam</span></h4>
                        <h4 className='text-2xl text-white font-medium'> Email:  <span className='text-xl text-slate-400 font-medium tracking-wide underline'>saifularafat.info@gmail.com</span></h4>
                        <h4 className='text-2xl text-white font-medium'> Number:  <span className='text-xl text-slate-400 font-medium tracking-wide'>+880 1646-531069 </span> </h4>
                        <h4 className='text-2xl text-white font-medium'> Adders:  <span className='text-xl text-slate-400 font-medium tracking-wide'>Cumilla, Bangladesh</span></h4>
                    </div>
                    <PDFDownloadButton />
                </div>
            </div>
        </div>
    );
};

export default About;
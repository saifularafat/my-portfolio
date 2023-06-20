// import banner from '../assets/bg/banner-bg.png'
import banner from '../assets/bg/footer-bg.png'
import aboutImage from '../assets/my-img/about.jpg'
import SectionTitle from './SectionTitle';

const About = () => {
    return (
        <div name='about'>
            <div className='max-w-screen-lg mx-auto flex md:flex-row flex-col-reverse items-center justify-center h-full px-4 py-12'>
                <div className='w-1/2 hidden md:block'>
                    <img src={aboutImage} alt="" className='h-4/6 w-5/6' style={{ borderRadius: '0 200px 0 180px' }} />
                </div>
                <div className='md:hidden block pt-8'>
                    <img src={aboutImage} alt="" className='' style={{ borderRadius: '0 180px 0 120px' }} />
                </div>
                <div className='md:w-1/2'>
                    <SectionTitle title='< About />' />
                    <h2 className='text-xl pt-8 text-white w-full'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic delectus, ducimus ut et maxime sed repellat quia non atque voluptatibus facere maiores voluptatum impedit temporibus, ullam corrupti nulla? Suscipit, tempore?</h2>
                    <h2 className='text-xl pt-8 text-white w-full'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Hic delectus, ducimus ut et maxime sed repellat quia non atque voluptatibus facere maiores voluptatum impedit temporibus, ullam corrupti nulla? Suscipit, tempore?</h2>
                </div>
            </div>
        </div>
    );
};

export default About;
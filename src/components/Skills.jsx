import SectionTitle from './SectionTitle';

import htmlImg from '../assets/icons/html.png';
import cssImg from '../assets/icons/css.png';
import jsImg from '../assets/icons/js.png';
import reactImg from '../assets/icons/react.png';
import nodeImg from '../assets/icons/node.png';
import mongodbImg from '../assets/icons/mongodb.png';
import firebaseImg from '../assets/icons/firebase.png';
import tailwindImg from '../assets/icons/tailwindcss.png';
import bootstapImg from '../assets/icons/bootstap.png';
import githubImg from '../assets/icons/github.png';

const Skills = () => {

    const skills = [
        {
            id: 1,
            img: htmlImg,
            title: 'Html',
            style: 'shadow-[#F0601A]'
        },
        {
            id: 2,
            img: cssImg,
            title: 'Css',
            style: 'shadow-[#0097DB]'
        },
        {
            id: 3,
            img: jsImg,
            title: 'JS',
            style: 'shadow-[#F4E11E]'
        },
        {
            id: 4,
            img: reactImg,
            title: 'React',
            style: 'shadow-[#4FC2E0]'
        },
        {
            id: 5,
            img: nodeImg,
            title: 'nodejs',
            style: 'shadow-[#69A45E]'
        },
        {
            id: 6,
            img: firebaseImg,
            title: 'Firebase',
            style: 'shadow-[#FFCA28]'
        },
        {
            id: 7,
            img: mongodbImg,
            title: 'Mongodb',
            style: 'shadow-[#10AA50]'
        },
        {
            id: 8,
            img: bootstapImg,
            title: 'BootstapCss',
            style: 'shadow-[#7112F6]'
        },
        {
            id: 9,
            img: tailwindImg,
            title: 'TailwindCss',
            style: 'shadow-[#38BDF8]'
        },
        {
            id: 10,
            img: githubImg,
            title: 'Github',
            style: 'shadow-[#E5F3FF]'
        },
    ]
    return (
        <div>
            <div
                name='skills'
                className=''>
                <div className='max-w-screen-xl p-4 md:mx-auto flex flex-col items-center pt-12 w-full h-full py-16'>
                    <SectionTitle title='< Skills />' subTitle="These are the technology skill l've worked with " />
                    <div className='w-full grid sm:grid-cols-3 md:grid-cols-4 grid-cols-2 gap-6 sm:px-5 pt-16'>
                        {
                            skills.map(({ id, img, title, style }) => <div
                                key={id}
                                className={`shadow-md hover:scale-105 rounded-lg py-2 transition duration-500 ${style}`}>
                                <img
                                    src={img}
                                    alt="webSiteImage"
                                    className='w-20 mx-auto'
                                />
                                <p className='mt-4 text-center text-white text-xl font-medium'>{title}</p>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Skills;
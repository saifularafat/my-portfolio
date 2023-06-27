import SectionTitle from './SectionTitle';
import Button from './Button';

import imgRobot from '../assets/project/robot.png'
import imgSport from '../assets/project/sports.png'
import imgChef from '../assets/project/chef.png'
import { useState } from 'react';
const Project = () => {
    const projects = [
        {
            id: 1,
            img: imgSport,
            href: 'https://sk-academe.web.app/',
            href1: 'https://github.com/saifularafat/sports-academy-server',
            href2: 'https://github.com/saifularafat/sports_academy_client',
            technology: 'node.js, mongoDB, react.js, ',
        },
        {
            id: 2,
            img: imgRobot,
            href: 'https://omega-robot-kids.web.app/',
            href1: 'https://github.com/saifularafat/omega-robot-toy-server-A11',
            href2: 'https://github.com/saifularafat/omega_robot_toy_client_A11',
            technology: 'node.js, mongoDB, react.js, ',
        },
        {
            id: 3,
            img: imgChef,
            href: 'https://anyday-chef.web.app/',
            href1: 'https://github.com/saifularafat/anydey_chef_server_A10',
            href2: 'https://github.com/saifularafat/anyday_chef_client-A10',
            technology: 'node.js, react.js, ',
        }
    ];

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    return (
        <div>
            <div
                name='projects'
                className='md:h-screen'>
                <div className='md:max-w-screen-xl p-4 md:mx-auto flex flex-col justify-center w-full h-full py-24'>
                    <SectionTitle title='\* Projects */' subTitle="I completed these projects visit my beautiful project " />
                    <div
                        data-aos="flip-right"
                        data-aos-duration="1500"
                        className='grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-6 sm:px-5 pt-16'>
                        {
                            projects.map(({ id, img, href, href1, href2, technology }) => <div
                                key={id}
                                className='shadow-lg w-[340px] md:h-[355px] md:w-full mx-auto shadow-slate-600 rounded-lg'>
                                <img
                                    src={img}
                                    alt="webSiteImage"
                                    className='rounded-lg duration-200 hover:scale-105 h-56'
                                />
                                <div
                                    className='flex items-center justify-between text-white px-2 py-3'>
                                    <Button adders={href} label='Demo' />
                                    <div className=''>
                                        <span className='mr-3'>
                                            <Button adders={href1} label='Server' />
                                        </span>
                                        <Button adders={href2} label='Client' />
                                    </div>
                                </div>
                                <div className='md:mt-4 mt-2'>
                                    <button
                                        onClick={openModal}
                                        className="w-full mx-auto text-center py-2 rounded-b-lg border border-sky-400 text-lg font-medium tracking-wide text-white bg-sky-500 hover:bg-transparent transition duration-200"
                                    >
                                        Details
                                    </button>

                                    {isModalOpen && (
                                        <dialog
                                            open
                                            onClose={() => setIsModalOpen(false)}
                                            id="my_modal_5"
                                            className="modal modal-bottom sm:modal-middle"
                                        >
                                            <form method="dialog" className="modal-box">
                                                <h3 className="font-bold text-lg">Hello!</h3>
                                                <p className="py-4">
                                                    {technology}
                                                </p>
                                                <div className="modal-action">
                                                    <button className="btn" onClick={() => setIsModalOpen(false)}>
                                                        Close
                                                    </button>
                                                </div>
                                            </form>
                                        </dialog>
                                    )}
                                </div>
                            </div>)
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;
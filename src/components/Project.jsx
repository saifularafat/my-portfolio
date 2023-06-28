import SectionTitle from './SectionTitle';
import Button from './Button';

import { useEffect, useState } from 'react';
const Project = () => {
    const [projects, setProjects] = useState([])
    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])

    const [isModalOpen, setIsModalOpen] = useState(false);

    const openModal = () => {
        setIsModalOpen(true);
    };

    return (
        <div>
            <div
                name='projects'
                className='md:h-screen'>
                <div 
                className='md:max-w-screen-xl p-4 md:mx-auto flex flex-col justify-center w-full h-full py-24'>
                    <SectionTitle 
                    title='\* Projects */' 
                    subTitle="I completed these projects visit my beautiful project " />
                    <div
                        data-aos="flip-right"
                        data-aos-duration="1500"
                        className='grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-6 sm:px-5 pt-16'>
                        {
                            projects.map(({ id, img, img1, img2, img3, img4, href, href1, href2, technology, project_name, project_details, Roles, Functionality }) => <div
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
                                        className="details_btn"
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
                                            <form method="dialog" className=" md:w-11/12 p-6 h-full space-y-1 rounded-xl bg-gradient-to-tr from-[#211b33] to-[#201322] shadow-2xl">
                                                <h3 className="font-bold text-2xl text-sky-500 text-center">{project_name}</h3>
                                                <div className='flex items-center justify-center gap-x-5'>
                                                    <img src={img1} alt="" className='md:w-56 md:h-28 hover:scale-110 rounded-lg border-b-2 border-sky-600' />
                                                    <img src={img2} alt="" className='md:w-56 md:h-28 hover:scale-110 rounded-lg border-b-2 border-orange-700' />
                                                    <img src={img3} alt="" className='md:w-56 md:h-28 hover:scale-110 rounded-lg border-b-2 border-red-400' />
                                                    <img src={img4} alt="" className='md:w-56 md:h-28 hover:scale-110 rounded-lg border-b-2 border-yellow-400' />
                                                </div>
                                                <div className='flex items-center gap-6 pt-2'>
                                                    <div className='w-1/2 border-2 border-sky-400 p-2 rounded-lg'>
                                                        <p
                                                            className=" text-slate-200"><span className='text-xl font-semibold text-slate-400'>Technology:</span> <br /> <span className='text-base font-medium text-sky-300'>{technology}.</span>
                                                        </p>
                                                        <p className='text-justify text-white pt-1'><span className='text-xl font-semibold text-slate-400'>Project Details: <br /> </span> {project_details}
                                                        </p>
                                                    </div>
                                                    <div className='w-1/2 border-2 border-sky-400 p-2 rounded-lg'>
                                                        <p
                                                            className=" text-slate-200"><span className='text-xl font-semibold text-slate-400'>Functionality: <br /></span> <br /> <span className='text-base font-medium text-sky-300'>{Functionality}.</span>
                                                        </p>
                                                        <p className='text-justify text-white'><span className='text-2xl font-semibold text-slate-400'>Roles: <br /></span> {Roles}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="modal-action">
                                                    <button
                                                        className="close_btn"
                                                        onClick={() => setIsModalOpen(false)}>
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
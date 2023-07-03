import SectionTitle from './SectionTitle';
import Button from './Button';
import { useEffect, useState } from 'react';

const Project = () => {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        fetch('/projects.json')
            .then(res => res.json())
            .then(data => setProjects(data));
    }, []);

    const [selectedProject, setSelectedProject] = useState(null);

    const openModal = (projectId) => {
        event.preventDefault();
        const project = projects.find(project => project.id === projectId);
        setSelectedProject(project);
        window.history.pushState(null, '', `/${projectId}`);
    };

    const closeModal = () => {
        setSelectedProject(null);
    };

    return (
        <div>
            <div name="projects" className="md:h-screen">
                <div className="md:max-w-screen-xl p-4 md:mx-auto flex flex-col justify-center w-full h-full py-24">
                    <SectionTitle title="* Projects */" subTitle="I completed these projects visit my beautiful project " />
                    <div
                        data-aos="flip-right"
                        data-aos-duration="1500"
                        className="grid sm:grid-cols-2 md:grid-cols-3 grid-cols-1 gap-6 sm:px-5 pt-16"
                    >
                        {projects.map(({ id, img, href, href1, href2 }) => (
                            <div
                                key={id}
                                className="shadow-lg md:h-[355px] md:w-full mx-auto shadow-slate-600 rounded-lg"
                            >
                                <img
                                    src={img}
                                    alt="webSiteImage"
                                    className="rounded-lg duration-200 hover:scale-105 w-full h-56"
                                />
                                <div className="flex items-center justify-between text-white px-2 py-3">
                                    <Button adders={href} label="Demo" />
                                    <div className="">
                                        <span className="mr-3">
                                            <Button adders={href1} label="Server" />
                                        </span>
                                        <Button adders={href2} label="Client" />
                                    </div>
                                </div>
                                <div className='md:hidden block'>
                                    <div className=''>
                                       
                                    </div>
                                </div>
                                {/* Modal section */}
                                <div className="md:mt-4 mt-2">
                                    <a href={`/${id}`}>
                                        <button onClick={() => openModal(id)} className="details_btn">
                                            Details
                                        </button>
                                    </a>

                                    {selectedProject && selectedProject?.id === id && (
                                        <dialog open onClose={closeModal} className="modal modal-bottom sm:modal-middle">
                                            <form method="dialog" className="md:w-11/12 p-6 h-full space-y-1 rounded-xl bg-gradient-to-tr from-[#211b33] to-[#201322] shadow-2xl">
                                                <h3 className="font-bold text-2xl text-sky-500 text-center">{selectedProject.project_name}</h3>
                                                <div className='md:flex items-center justify-center gap-x-5 hidden'>
                                                    <img src={selectedProject?.img1} alt="" className='md:w-56 md:h-28 hover:scale-110 rounded-lg border-b-2 border-sky-600' />
                                                    <img src={selectedProject?.img2} alt="" className='md:w-56 md:h-28 hover:scale-110 rounded-lg border-b-2 border-orange-700' />
                                                    <img src={selectedProject?.img3} alt="" className='md:w-56 md:h-28 hover:scale-110 rounded-lg border-b-2 border-red-400' />
                                                    <img src={selectedProject?.img4} alt="" className='md:w-56 md:h-28 hover:scale-110 rounded-lg border-b-2 border-yellow-400' />
                                                </div>
                                                <div className='md:flex items-center gap-6 pt-2'>
                                                    <div className='md:w-1/2 md:h-[170px] md:border-2 border-[#211C30] p-3 rounded-lg shadow-2xl'>
                                                        <p className="text-slate-200">
                                                            <span className='md:text-xl text-lg font-semibold text-slate-400'>Technology:</span> <br />
                                                            <span className='md:text-base text-sm font-medium text-sky-300'>{selectedProject?.technology}.</span>
                                                        </p>
                                                        <p className='text-justify text-sm text-white pt-1'>
                                                            <span className='md:text-xl text-lg font-semibold text-slate-400'>Project Details: <br /></span>
                                                            {selectedProject?.project_details}
                                                        </p>
                                                    </div>
                                                    <div className='md:w-1/2 md:h-[170px] md:border-2 border-[#211C30] p-3 rounded-lg shadow-2xl'>
                                                        <p className="text-slate-200">
                                                            <span className='text-xl font-semibold text-slate-400'>Functionality:</span>
                                                            <br />
                                                            <span className='text-base font-medium text-sky-300'>{selectedProject?.Functionality}</span>
                                                        </p>
                                                        <p className='text-justify text-white md:block hidden'>
                                                            <span className='text-2xl font-semibold text-slate-400'>Roles: <br /></span>
                                                            {selectedProject?.Roles}
                                                        </p>
                                                    </div>
                                                </div>
                                                <div className="modal-action">
                                                    <button className="close_btn" onClick={closeModal}>
                                                        Close
                                                    </button>
                                                </div>
                                            </form>
                                        </dialog>
                                    )}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Project;

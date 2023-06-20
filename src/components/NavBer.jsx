import { useState } from "react";
import Container from "./Container";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from 'react-scroll'

const NavBer = () => {
    const [isOpen, setISOpen] = useState(false)

    const links = [
        {
            id: 1,
            link: 'home'
        },
        {
            id: 2,
            link: 'about'
        },
        {
            id: 3,
            link: 'skills'
        },
        {
            id: 4,
            link: 'projects'
        },
        {
            id: 5,
            link: 'contact'
        },
    ]

    return (
        <Container>
            <div className="flex justify-between items-center w-full md:h-24 h-20 md:px-0 px-3 md:pt-3">
                <div>
                    <h1 className="font-logo md:text-5xl text-4xl text-white"><span className="md:text-7xl text-5xl font-bold font-logoText text-sky-500">P</span>ort<span className="text-sky-500">flio</span></h1>
                </div>
                <ul className=" hidden md:flex items-center">

                    {
                        links?.map(({ link, id }) => <li
                            key={id}
                            // className={({isActive}) => (isActive ? 'text-xl text-white' : '' )}>
                            className="nav_link" >
                            <Link to={link} duration={500}>{link}</Link>
                        </li>)
                    }
                </ul>
                {/* mobile responsive */}
                <div
                    onClick={() => setISOpen(!isOpen)}
                    className="cursor-pointer z-10 text-gray-400 md:hidden">
                    {
                        isOpen ? <FaTimes size={30} /> : <FaBars size={30} />
                    }
                </div>

                {
                    isOpen && (
                        <ul className="nav_mobile">
                            {
                                links?.map(({ link, id }) => <li
                                    key={id}
                                    // className={({isActive}) => (isActive ? 'text-xl text-white' : '' )}>
                                    className="py-5 text-3xl cursor-pointer capitalize hover:border-sky-500 hover:border-b-2 px-3" >
                                    <Link
                                    onClick={() => setISOpen(!isOpen)}
                                    to={link} 
                                    smooth
                                    duration={500}>{link}</Link>
                                </li>)
                            }
                        </ul>
                    )
                }


            </div>
        </Container>
    );
};

export default NavBer;
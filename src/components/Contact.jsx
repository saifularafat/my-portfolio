import SectionTitle from './SectionTitle';
import contact from '../assets/my-img/contact-img.svg'
import Container from './Container';
const Contact = () => {
    return (
        <div
            name='contact'
            className='py-24'>
            <Container>
                <div>
                    <SectionTitle title='\* Contact */' subTitle='Submit the form below to get in touch with me.' />
                </div>
                <div
                    data-aos="zoom-in"
                    data-aos-easing="linear"
                    data-aos-duration="1200"
                    className='md:flex items-center justify-center mt-16'>
                    <div className='md:w-1/2 w-full'>
                        <img src={contact} alt="" />
                    </div>
                    <div className='md:w-1/2 w-full'>
                        <form
                            action={import.meta.env.VITE_FORM} method='POST'
                            className='flex flex-col items-center justify-center space-y-5 w-full mt-16'>
                            <input
                                type="text"
                                name='name'
                                required
                                placeholder='Enter Your Name*'
                                className='p-2 w-3/4 bg-transparent border-2  border-sky-500 rounded-md text-white focus:outline-sky-500'
                            />
                            <input
                                type="email"
                                name='email'
                                required
                                placeholder='Enter Your Email*'
                                className='p-2 w-3/4 bg-transparent border-2 border-sky-500 rounded-md text-white focus:outline-sky-500'
                            />
                            <textarea
                                name='message'
                                rows='10'
                                required
                                placeholder='Enter Your Message*'
                                className='p-2 w-3/4 bg-transparent border-2 rounded-md text-white focus:outline-sky-400 border-sky-400'
                            >

                            </textarea>
                            <button>
                                <a href=''
                                    className="border-2 group border-sky-500 text-xl tracking-wide  font-medium rounded-md py-2 px-8 relative md:inline-flex flex items-center justify-start overflow-hidden transition-all group">
                                    <span className="w-0 h-0 rounded bg-sky-500 absolute top-0 left-0 ease-out duration-500 transition-all group-hover:w-full group-hover:h-full -z-1"></span>
                                    <span className="w-full flex items-center text-sky-400 transition-colors duration-300  ease-in-out group-hover:text-white z-10">
                                        Submit
                                    </span>
                                </a>
                            </button>
                        </form>

                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Contact;
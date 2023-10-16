import { AiOutlineDownload } from 'react-icons/ai';

const PDFDownloadButton = () => {
  return (
    <div>
      <a href='saiful_Islam_resume.pdf'
        download
        className='border-2 border-[#432848] px-5 py-3 mt-12 text-xl font-medium text-white rounded-xl bg-orange-500 hover:bg-sky-500 hover:border-sky-600 transition duration-300 animate-bounce hover:animate-none flex items-center gap-2 shadow-lg'
      >
        Download Resume <AiOutlineDownload className='w-6 h-6' />
      </a>
    </div>
  );
};

export default PDFDownloadButton;
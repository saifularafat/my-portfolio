// import React from 'react';
// import { AiOutlineDownload } from 'react-icons/ai';

// class PDFDownloadButton extends React.Component {
//   downloadPDF = () => {
//     const pdfUrl = '../assets/saiful_in_resume_download.pdf';
//     const link = document.createElement('a');
//     link.href = pdfUrl;
//     link.setAttribute('download', 'downloaded_file.PDF');
//     document.body.appendChild(link);
//     link.click();
//     document.body.removeChild(link);
//   };
//   render() {
//     return (
//       <button
//         onClick={this.downloadPDF}
//         className='border-2 border-[#432848] px-5 py-3 mt-12 text-xl font-medium text-white rounded-xl bg-orange-500 hover:bg-sky-500 hover:border-sky-600 transition duration-300 animate-bounce hover:animate-none flex items-center gap-2 shadow-lg' >
//         Download Resume <AiOutlineDownload className='w-6 h-6' />
//       </button>
//     );
//   }
// }

// export default PDFDownloadButton;

import React from 'react';
import { AiOutlineDownload } from 'react-icons/ai';

class PDFDownloadButton extends React.Component {
  downloadPDF = async () => {
    const pdfUrl = '../assets/saiful_in_resume_download.pdf';
    const fileName = 'downloaded_file.pdf';

    try {
      const response = await fetch(pdfUrl);
      const blob = await response.blob();
      const link = document.createElement('a');
      link.href = window.URL.createObjectURL(blob);
      link.download = fileName;
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.error('Failed to download PDF:', error);
    }
  };

  render() {
    return (
      <button
        onClick={this.downloadPDF}
        className='border-2 border-[#432848] px-5 py-3 mt-12 text-xl font-medium text-white rounded-xl bg-orange-500 hover:bg-sky-500 hover:border-sky-600 transition duration-300 animate-bounce hover:animate-none flex items-center gap-2 shadow-lg'
      >
        Download Resume <AiOutlineDownload className='w-6 h-6' />
      </button>
    );
  }
}

export default PDFDownloadButton;
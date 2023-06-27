import React from 'react';

class PDFDownloadButton extends React.Component {
  downloadPDF = () => {
    const pdfUrl = '/saiful_in_resume_download.pdf';
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.setAttribute('download', 'downloaded_file.pdf');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  render() {
    return (
      <button onClick={this.downloadPDF}>Download Resume</button>
    );
  }
}

export default PDFDownloadButton;
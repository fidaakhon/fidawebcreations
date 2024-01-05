"use client"
import React from 'react';
import DownloadSharpIcon from '@mui/icons-material/DownloadSharp';

const DownloadButton = () => {
  const handleDownload = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = 'CV.pdf'; 
    downloadLink.download = 'CV.pdf'; 
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  return (
    <button onClick={handleDownload} className='p-4 rounded-lg text-white text-sm ' style={{backgroundColor:"hsl(250, 69%, 61%)"}}>
      Download CV <DownloadSharpIcon   />
    </button>
  );
};

export default DownloadButton;

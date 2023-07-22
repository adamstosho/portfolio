'use client'
import React, { useEffect } from 'react'

const DownloadResume = () => {
 const handleDownload = () => {
  // Replace 'resume.pdf' with the actual file name and extension of your resume
  const fileURL = '/resume.pdf';

  fetch(fileURL)
    .then(response => response.blob())
    .then(blob => {
      const url = window.URL.createObjectURL(new Blob([blob]));
      const a = document.createElement('a');
      a.href = url;
      a.download = 'resume.pdf'; // Replace with your desired file name
      document.body.appendChild(a);
      a.click();
      a.remove();
    })
    .catch(error => console.error('Error downloading the file:', error));
};

return (
  <button onClick={handleDownload}>Download Resume</button>
);
};

export default DownloadResume
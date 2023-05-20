import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

function PdfViewer() {
  const { id } = useParams();
  const [fileLocation, setFileLocation] = useState('');

  useEffect(() => {
    // Fetch the PDF file URL based on the id
    fetch(`http://localhost:5054/api/Pdf/pdf/get/${id}`)
      .then(response => response.blob())
      .then(blob => {
        const url = URL.createObjectURL(blob);
        setFileLocation(url);
      })
      .catch(error => {
        console.error('Error fetching PDF file:', error);
      });
  }, [id]);

  return (
    <div>
      <h2>PDF Viewer</h2>
      {fileLocation ? (
        <iframe src={fileLocation} width="100%" height="900" title="PDF Viewer"></iframe>
      ) : (
        <p>Loading PDF...</p>
      )}
    </div>
  );
}

export default PdfViewer;

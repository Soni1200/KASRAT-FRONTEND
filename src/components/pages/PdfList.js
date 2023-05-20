import React, { useEffect, useState } from 'react';
import PdfViewer from './PdfViewer';

function PdfList() {
  const [pdfFiles, setPdfFiles] = useState([]);

  useEffect(() => {
    // Fetch the API that returns the list of PDF files and their locations
    fetch('http://localhost:5054/api/pdf/2')
      .then(response => response.json())
      .then(data => {
        setPdfFiles(data);
      })
      .catch(error => {
        console.error('Error fetching PDF files:', error);
      });
  }, []);

  return (
    <div>
      <h2>List of PDF Files</h2>
      {pdfFiles.map(pdfFile => (
        <div key={pdfFile.id}>
          <p>{pdfFile.name}</p>
          <PdfViewer fileLocation={pdfFile.location} />
        </div>
      ))}
    </div>
  );
}

export default PdfList;

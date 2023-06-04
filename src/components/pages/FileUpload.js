import React, { useState } from 'react';
import '../../App.css';
import './FileUploader.css';
import NavbarDash from '../NavbarDash';
import Footer from '../Footer';

const FileUploader = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [uploadSuccess, setUploadSuccess] = useState(false);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value);
  };

  const handleUpload = (event) => {
    event.preventDefault(); // Prevent form submission

    if (!selectedFile) {
      alert('No file selected.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);
    formData.append('category', selectedCategory);

    fetch('http://localhost:5054/api/Pdf/pdf/upload', {
      method: 'POST',
      body: formData,
    })
      .then((response) => {
        if (response.ok) {
          return response.json(); // Parse the response body as JSON
        } else {
          throw new Error('Error uploading file');
        }
      })
      .then((data) => {
        console.log('Response:', data); // Log the response for debugging
        if (data.isSuccess) {
          console.log('File uploaded successfully');
          setUploadSuccess(true); // Update the upload success state
        } else {
          throw new Error('File upload failed');
        }
      })
      .catch((error) => {
        console.error('Error uploading file:', error);
        // Handle the error appropriately
      })
      .finally(() => {
        setSelectedFile(null); // Clear the selected file after upload
        setSelectedCategory(''); // Clear the selected category after upload
      });
  };

  return (
    <>
      <NavbarDash />
      <div className='cards'>
        <h1>DashBoard</h1>
        <h4>Upload Workout Plan Here</h4>
      </div>
      <form className="file-uploader" encType="multipart/form-data">
        <input type="file" onChange={handleFileChange} className="file-input" />

        <div className="upload-container">
          <div className="upload-button-container">
            
          <div className="category-select-container">
            <select value={selectedCategory} onChange={handleCategoryChange} className="form-input1">
            <option value="" className='option'>Select a Category</option>
              <option value="UnderWeight" className='option'>UnderWeight</option>
              <option value="Normal" className='option'>Normal</option>
              <option value="OverWeight" className='option'>OverWeight</option>
              <option value="Obese" className='option'>Obese</option>
              <option value="ExceedinglyObese" className='option'>ExceedinglyObese</option>
            </select>
          </div>
            <button onClick={handleUpload} className="upload-button">
              Upload
            </button>
          </div>

        </div>
      </form>
      {uploadSuccess && <p>File Uploaded Successfully</p>}
      <Footer />
    </>
  );
};

export default FileUploader;

import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';

const imageUploader = ({ onUpload }) => {
  const [uploadedImages, setUploadedImages] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    setUploadedImages((prevImages) => [...prevImages, ...acceptedFiles]);
  }, []);

  const handleDelete = (index) => {
    setUploadedImages((prevImages) => {
      const updatedImages = [...prevImages];
      updatedImages.splice(index, 1);
      return updatedImages;
    });
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: 'image/*',
  });

  return (
    <div>
      <div {...getRootProps()} className={`dropzone ${isDragActive ? 'active' : ''}`}>
        <input {...getInputProps()} />
        <p>Selecciona imagenes para subir</p>
      </div>
      <div>
        <h4>Uploaded Images:</h4>
        {uploadedImages.map((image, index) => (
          <div key={index} style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
            <img src={URL.createObjectURL(image)} alt={`uploaded-${index}`} style={{ maxWidth: '100px', maxHeight: '100px', margin: '5px' }} />
            <button onClick={() => handleDelete(index)} style={{ marginLeft: '10px' }}>
              X
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default imageUploader;

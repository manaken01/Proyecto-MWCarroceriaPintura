import React, { useState, useEffect } from 'react';

const ImageUploader = ({ onImageListChange }) => {
  const [images, setImages] = useState([]);
  const [base64Images, setBase64Images] = useState([]);

  useEffect(() => {
    // Convert images to JSON whenever the images state changes
    convertToJSON();
  }, [images]);

  const handleImageUpload = (e) => {
    const files = e.target.files;

    const readFile = (file) => {
      const reader = new FileReader();
      reader.onload = () => {
        setImages((prevImages) => [...prevImages, URL.createObjectURL(file)]);
        setBase64Images((prevBase64Images) => [...prevBase64Images, reader.result]);
      };
      reader.readAsDataURL(file);
    };

    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      if (file) {
        readFile(file);
      }
    }
  };

  const handleRemoveImage = (index) => {
    const updatedImages = [...images];
    const updatedBase64Images = [...base64Images];

    updatedImages.splice(index, 1);
    updatedBase64Images.splice(index, 1);

    setImages(updatedImages);
    setBase64Images(updatedBase64Images);
  };

  const convertToJSON = () => {
    const jsonList = base64Images.map((base64, index) => ({
      id: index + 1,
      base64,
    }));

    // Call the parent component's callback to pass the JSON list
    onImageListChange(jsonList);
  };

  return (
    <div><p  style={{ color: '#C80B16' }}>Presiona aquí para subir imágenes</p>
      <input type="file" onChange={handleImageUpload} multiple />
      <div><h4>Imágenes subidas: </h4>
        {images.map((imageUrl, index) => (
          <div key={index}>
            <img src={imageUrl} alt={`Uploaded ${index + 1}`} style={{ maxWidth: '100px', maxHeight: '100px' , padding: '1%'}} />
            <button style={{ marginLeft: '10px', color: '#C80B16', border: '1px', borderColor: '#C80B16', backgroundColor: 'transparent' }}onClick={() => handleRemoveImage(index)}>x</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageUploader;

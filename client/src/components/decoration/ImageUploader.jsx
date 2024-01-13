import React, { useState, useEffect, useRef } from 'react';

const ImageUploader = ({ onImageListChange, initialImages = [] }) => {
  const [images, setImages] = useState([]);
  const [base64Images, setBase64Images] = useState([]);
  const initialImagesRef = useRef();
  const [initialImageCount, setInitialImageCount] = useState(0);

  useEffect(() => {
    if (initialImages && initialImages.length > 0 && initialImages !== initialImagesRef.current) {
        setImages((prevImages) => [...prevImages, ...initialImages]);
        setBase64Images((prevBase64Images) => [...prevBase64Images, ...initialImages]);
        initialImagesRef.current = initialImages;
        setInitialImageCount(initialImages.length);
    }
    initialImagesRef.current = initialImages;
}, [initialImages]);

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
      readFile(files[i]);
    }
  };

  const handleRemoveImage = (index) => {
    if (initialImagesRef.current.includes(images[index])) {
        setInitialImageCount(count => count - 1);
    }

    const newImages = [...images];
    newImages.splice(index, 1);
    setImages(newImages);

    const newBase64Images = [...base64Images];
    newBase64Images.splice(index, 1);
    setBase64Images(newBase64Images);
};

  const convertToJSON = () => {
    const newImages = images.filter(image => !initialImagesRef.current.includes(image));
    let jsonList = [];
    if (newImages.length > 0 || initialImageCount !== initialImagesRef.current.length) {
      jsonList = base64Images.map((base64, index) => ({
        id: index + 1,
        base64,
      }));
    }
    // Call the parent component's callback to pass the JSON list
    onImageListChange(jsonList);
};

  return (
    <div><p style={{ color: '#C80B16' }}>Presiona aquí para subir imágenes</p>
      <input type="file" onChange={handleImageUpload} multiple />
      <div><h4>Imágenes subidas: </h4>
        {images.map((imageUrl, index) => (
          <div key={index}>
            <img src={imageUrl} alt={`Uploaded ${index + 1}`} style={{ maxWidth: '100px', maxHeight: '100px', padding: '1%' }} />
            <button style={{ marginLeft: '10px', color: '#C80B16', border: '1px', borderColor: '#C80B16', backgroundColor: 'transparent' }} onClick={() => handleRemoveImage(index)}>x</button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageUploader;

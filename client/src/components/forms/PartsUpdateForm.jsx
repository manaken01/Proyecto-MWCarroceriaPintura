import { useState, useEffect } from 'react';
import ImageUploader from '../decoration/ImageUploader';
import Divider from '../decoration/Divider';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';


function PartsUpdateForm({ carPart, refreshParent, closeForm, pic }) {

    var [photo, setPhoto] = useState([]);
    const [dropdowns, setDropdowns] = useState([]);
    var [responseData, setResponse] = useState([]);
    const [selectedItems, setSelectedItems] = useState(Array(1).fill('Seleccione'));

    const getdropdowns = async () => {
        try {
            const response = await axios.get('http://localhost:8080/brand');
            setResponse(response.data.Result);
            return response.data.Result.map((result) => result.nameBrand);
        } catch (error) {
            console.error('Error al realizar la solicitud:', error);
            return []; // Return an empty array or handle the error gracefully
        }
    };

    const handleResults = async () => {
        try {
            const dropdownItems = await getdropdowns();
            //console.log(dropdownItems); // Verify that dropdownItems contains the expected data
            setDropdowns([{ label: 'Marca:', items: dropdownItems }]);
            // Now you can use 'dropdowns' to populate your dropdown component or perform further processing
        } catch (error) {
            console.error('Error handling results:', error);
        }
    };

    useEffect(() => {
        handleResults();
    }, []);

    //const [imageList, setImageList] = useState([]);

    const handleImageListChange = (newImageList) => {
        const newPhotos = newImageList.map((image) => {
            return {
                base64: image.base64
            }
        });
        const jsonList = [...newPhotos];
        setPhoto(jsonList);
    };

    const handleSelect = (index, value) => {
        const newSelectedItems = [...selectedItems];
        newSelectedItems[index] = value;
        setSelectedItems(newSelectedItems);
        setidBrand(getIdBrand(value));
    }

    //-------------
    const [name, setName] = useState('');
    const [car, setCar] = useState('');
    const [price, setPrice] = useState('');
    const [category, setCategory] = useState('');
    const [stock, setStock] = useState('');
    const [bodyShape, setBodyShape] = useState('');
    const [version, setVersion] = useState('');
    const [generation, setGeneration] = useState('');
    const [idBrand, setidBrand] = useState('');

    const [responseMessage, setResponseMessage] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleCarChange = (event) => {
        setCar(event.target.value);
    }

    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    }

    const handleCategoryChange = (event) => {
        setCategory(event.target.value);
    }

    const handleStockChange = (event) => {
        setStock(event.target.value);
    }
    const handleBodyShapeChange = (event) => {
        setBodyShape(event.target.value);
    }

    const handleVersionChange = (event) => {
        setVersion(event.target.value);
    }
    const handleGenerationChange = (event) => {
        setGeneration(event.target.value);
    }

    const getIdBrand = (brandName) => {
        const brand = responseData.find((item) => item.nameBrand === brandName);
        return brand ? brand.idBrand : null;
    };
    const resetInputs = () => {
        setName('');
        setCar('');
        setPrice('');
        setCategory('');
        setStock('');
        setBodyShape('');
        setVersion('');
        setGeneration('');
    };

    const defaultInputs = () => {
        setName(carPart?.name || '');
        setCar(carPart?.car || '');
        setidBrand(carPart?.idBrand || '');
        setPrice(carPart?.price || '');
        setCategory(carPart?.category || '');
        setStock(carPart?.stock || '');
        setBodyShape(carPart?.bodyshape || '');
        setVersion(carPart?.version || '');
        setGeneration(carPart?.gen || '');
        
    };
    useEffect(() => {
        defaultInputs();
    }, [carPart]);

    const validateInputs = () => {
        if (!name || !car || !price || !stock || !idBrand || !category || !bodyShape || !version || !generation) {
            alert('Se deben llenar todos los campos');
            return false;
        }
        return true;
    };

    const handleParts = () => {

        if (!validateInputs()) {
            return;
        }
        const getData = async () => {
            console.log(idBrand);
            try {
                const response = await axios.put('http://localhost:8080/carPart', {
                    idCarPart: carPart.id,
                    name: name,
                    car: car,
                    price: price,
                    category: category,
                    stock: stock,
                    bodyShape: bodyShape,
                    version: version,
                    generation: generation,
                    idBrand: idBrand,
                    photos: photo
                });

                setResponseMessage(response.data);
                console.log(response.data);
                resetInputs();
                alert('Se ha modificado el repuesto de forma correcta');
                if (response.status === 200) {
                    refreshParent();
                    closeForm();
                }
            } catch (error) {
                console.error('Error al realizar la solicitud:', error);
            }
        };

        getData();

    }

    return (

        <div className="card mb-3" style={{ border: '0px', backgroundColor: "#F9F9F9" }} >
            <div className="row g-0">
                <div className="card-body">

                    <h4 className="card-title" style={{ color: '#000000' }} >Modificar repuesto</h4>


                    <Divider />
                    <div className="d-flex align-items-center">
                        <p className="card-text"><strong>Nombre:</strong></p>
                        <div className="input-group ml-3" style={{ padding: '2%' }}>
                            <input type="text" id="nombre" className="form-control" aria-label="nombre" aria-describedby="basic-addon1" value={name} onChange={handleNameChange} />
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <p className="card-text"><strong>Carro:</strong></p>
                        <div className="input-group ml-3" style={{ padding: '2%' }}>
                            <input type="text" id="carro" className="form-control" aria-label="carro" aria-describedby="basic-addon1" value={car} onChange={handleCarChange} />
                        </div>
                    </div>

                    <div className="d-flex align-items-center">
                        <p className="card-text"><strong>Precio:</strong></p>
                        <div className="input-group ml-3" style={{ padding: '2%' }}>
                            <input type="number" id="price" className="form-control" aria-label="stock" aria-describedby="basic-addon1" value={price} onChange={handlePriceChange} />
                        </div>
                    </div>

                    <div className="d-flex align-items-center">
                        <p className="card-text"><strong>Categoría:</strong></p>
                        <div className="input-group ml-3" style={{ padding: '2%' }}>
                            <input type="text" id="categoria" className="form-control" aria-label="categoria" aria-describedby="basic-addon1" value={category} onChange={handleCategoryChange} />
                        </div>
                    </div>

                    <div className="d-flex align-items-center">
                        <p className="card-text"><strong>Stock:</strong></p>
                        <div className="input-group ml-3" style={{ padding: '2%' }}>
                            <input type="number" id="stock" className="form-control" aria-label="stock" aria-describedby="basic-addon1" value={stock} onChange={handleStockChange} />
                        </div>
                    </div>

                    <div className="d-flex align-items-center">
                        <p className="card-text"><strong>Body Shape:</strong></p>
                        <div className="input-group ml-3" style={{ padding: '2%' }}>
                            <input type="text" id="bodyShape" className="form-control" aria-label="bodyShape" aria-describedby="basic-addon1" value={bodyShape} onChange={handleBodyShapeChange} />
                        </div>
                    </div>

                    <div className="d-flex align-items-center">
                        <p className="card-text"><strong>Versión:</strong></p>
                        <div className="input-group ml-3" style={{ padding: '2%' }}>
                            <input type="text" id="version" className="form-control" aria-label="version" aria-describedby="basic-addon1" value={version} onChange={handleVersionChange} />
                        </div>
                    </div>

                    <div className="d-flex align-items-center">
                        <p className="card-text"><strong>Generación:</strong></p>
                        <div className="input-group ml-3" style={{ padding: '2%' }}>
                            <input type="text" id="generacion" className="form-control" aria-label="generacion" aria-describedby="basic-addon1" value={generation} onChange={handleGenerationChange} />
                        </div>
                    </div>
                    <div className="row ">
                        {dropdowns.map((dropdown, index) => (
                            <div className="col" key={index}>
                                <p style={{ fontWeight: 'bold', marginBottom: '1%' }}>{dropdown.label}</p>
                                <Dropdown>
                                    <Dropdown.Toggle variant="outline-secondary" id="dropdown-basic" style={{ width: '100%' }}>
                                        {selectedItems[index]}
                                    </Dropdown.Toggle>

                                    <Dropdown.Menu>
                                        {dropdown.items.map((item, itemIndex) => (
                                            <Dropdown.Item href="#" key={itemIndex} onClick={() => handleSelect(index, item)} >{item}</Dropdown.Item>
                                        ))}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        ))}
                    </div>
                    <div>

                        <ImageUploader onImageListChange={handleImageListChange} initialImages={pic}/>


                    </div>

                    <div className="col d-flex justify-content-end">



                        <button type="button" className="btn btn-danger" onClick={handleParts} style={{ marginTop: '1%', backgroundColor: '#C80B16', width: 'auto', height: 'auto%' }}>
                            Modificar
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default PartsUpdateForm
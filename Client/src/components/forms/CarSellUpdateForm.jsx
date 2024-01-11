import { useState, useEffect } from 'react';
import ImageUploader from '../decoration/ImageUploader';
import Divider from '../decoration/Divider';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';


const CarSellUpdateForm = ({ carSell }) => {

    var [photo, setPhoto] = useState([]);
    const [dropdowns, setDropdowns] = useState([]);
    var [responseData, setResponse] = useState([]);
    const [selectedItems, setSelectedItems] = useState(Array(dropdowns.length).fill('Seleccione'));

    const getdropdowns = async () => {
        try {
            const response = await axios.get('http://localhost:8080/brand');
            setResponse(response.data.Result);
            return response.data.Result.map((result) => result.name);
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
        //setImageList(newImageList);

        // Perform additional actions with the JSON list here
        const jsonList = newImageList.map((image) => ({
            base64: image.base64
        }));
        console.log(jsonList);
        setPhoto(jsonList);
        // For demonstration purposes, log the JSON list to the console

    };

    const handleSelect = (index, value) => {
        const newSelectedItems = [...selectedItems];
        newSelectedItems[index] = value;
        setSelectedItems(newSelectedItems);
        setidBrand(getIdBrand(value));
    }

    //-------------
    const [model, setModel] = useState('');
    const [year, setYear] = useState('');
    const [color, setColor] = useState('');
    const [plate, setPlate] = useState('');
    const [transmission, setTransmission] = useState('');
    const [passengers, setpassengers] = useState('');
    const [idBrand, setidBrand] = useState('');
    const [price, setPrice] = useState('');
    const [bodyShape, setBodyShape] = useState('');
    const [version, setVersion] = useState('');



    const [responseMessage, setResponseMessage] = useState('');

    const handleModelChange = (event) => {
        setModel(event.target.value);
    }

    const handleYearChange = (event) => {
        setYear(event.target.value);
    }

    const handleColorChange = (event) => {
        setColor(event.target.value);
    }

    const handlePlateChange = (event) => {
        setPlate(event.target.value);
    }

    const handleTransmissionChange = (event) => {
        setTransmission(event.target.value);
    }

    const handlepassengersChange = (event) => {
        setpassengers(event.target.value);
    }


    const handlePriceChange = (event) => {
        setPrice(event.target.value);
    }

    const handleBodyShapeChange = (event) => {
        setBodyShape(event.target.value);
    }

    const handleVersionChange = (event) => {
        setVersion(event.target.value);
    }

    const getIdBrand = (brandName) => {
        const brand = responseData.find((item) => item.name === brandName);
        return brand ? brand.idBrand : null;
    };
    const resetInputs = () => {
        setModel('');
        setYear('');
        setColor('');
        setPlate('');
        setTransmission('');
        setpassengers('');
        setidBrand('');
        setPrice('');
        setBodyShape('');
        setVersion('');
    };

    const defaultInputs = () => {
        setModel(carSell?.name || '');
        setYear(carSell?.year || '');
        setColor(carSell?.color || '');
        setPlate(carSell?.plate || '');
        setTransmission(carSell?.transmission || '');
        setpassengers(carSell?.passangers || '');
        setidBrand(carSell?.brand || '');
        setPrice(carSell?.price || '');
        setBodyShape(carSell?.bodyshape || '');
        setVersion(carSell?.version || '');
    };

    useEffect(() => {
        defaultInputs();
    }, [carSell]);

    const validateInputs = () => {
        if (!model || !year || !color || !plate || !transmission || !passengers || !idBrand || !price || !bodyShape || !version) {
            alert('Se deben llenar todos los campos');
            return false;
        }
        return true;
    };
    const handleCars = () => {

        if (!validateInputs()) {
            return;
        }
        const getData = async () => {
            console.log(idBrand);
            try {
                const response = await axios.put('http://localhost:8080/carSell', {
                    idCarSell: carSell.id,
                    model: model,
                    year: year,
                    color: color,
                    plate: plate,
                    transmission: transmission,
                    passengers: passengers,
                    idBrand: idBrand,
                    price: price,
                    bodyShape: bodyShape,
                    version: version,
                    photos: photo
                });

                setResponseMessage(response.data);
                console.log(response.data);
                alert('Se ha agregado el repuesto de forma correcta');
                resetInputs();
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
                    <h4 className="card-title" style={{ color: '#000000' }} >Modificar carro</h4>
                    <Divider />
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
                    <div className="d-flex align-items-center">
                        <p className="card-text"><strong>Año:</strong></p>
                        <div className="input-group ml-3" style={{ padding: '2%' }}>
                            <input type="text" id="year" className="form-control" aria-label="year" aria-describedby="basic-addon1" value={year} onChange={handleYearChange} />
                        </div>
                    </div>

                    <div className="d-flex align-items-center">
                        <p className="card-text"><strong>Color:</strong></p>
                        <div className="input-group ml-3" style={{ padding: '2%' }}>
                            <input type="text" id="color" className="form-control" aria-label="color" aria-describedby="basic-addon1" value={color} onChange={handleColorChange} />
                        </div>
                    </div>

                    <div className="d-flex align-items-center">
                        <p className="card-text"><strong>Transmisión:</strong></p>
                        <div className="input-group ml-3" style={{ padding: '2%' }}>
                            <input type="text" id="transmission" className="form-control" aria-label="transmission" aria-describedby="basic-addon1" value={transmission} onChange={handleTransmissionChange} />
                        </div>
                    </div>

                    <div className="d-flex align-items-center">
                        <p className="card-text"><strong>Placa:</strong></p>
                        <div className="input-group ml-3" style={{ padding: '2%' }}>
                            <input type="text" id="plate" className="form-control" aria-label="plate" aria-describedby="basic-addon1" value={plate} onChange={handlePlateChange} />
                        </div>
                    </div>

                    <div className="d-flex align-items-center">
                        <p className="card-text"><strong>Body shape:</strong></p>
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
                        <p className="card-text"><strong>Pasajeros:</strong></p>
                        <div className="input-group ml-3" style={{ padding: '2%' }}>
                            <input type="number" id="passengers" className="form-control" aria-label="passengers" aria-describedby="basic-addon1" value={passengers} onChange={handlepassengersChange} />
                        </div>
                    </div>

                    <div className="d-flex align-items-center">
                        <p className="card-text"><strong>Modelo:</strong></p>
                        <div className="input-group ml-3" style={{ padding: '2%' }}>
                            <input type="text" id="model" className="form-control" aria-label="model" aria-describedby="basic-addon1" value={model} onChange={handleModelChange} />
                        </div>
                    </div>

                    <div className="d-flex align-items-center">
                        <p className="card-text"><strong>Precio:</strong></p>
                        <div className="input-group ml-3" style={{ padding: '2%' }}>
                            <input type="number" id="price" className="form-control" aria-label="price" aria-describedby="basic-addon1" value={price} onChange={handlePriceChange} />
                        </div>
                    </div>

                    <div>

                        <ImageUploader onImageListChange={handleImageListChange} />

                    </div>




                    <div className="col d-flex justify-content-end">

                        <button type="button" className="btn btn-danger" onClick={handleCars} style={{ marginTop: '1%', backgroundColor: '#C80B16', width: 'auto', height: 'auto%' }}>
                            Agregar
                        </button>

                    </div>
                </div>
            </div>
        </div>

    );
}

export default CarSellUpdateForm
import { useState, useEffect} from 'react';
import Divider from '../decoration/Divider';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';
import UserProfile from '../resources/UserProfile';

function MyCarFormModified({ idCar, initialPlate }) {

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
            setDropdowns([
                { label: 'Marca:', items: dropdownItems }
            ]);
        } catch (error) {
            console.error('Error handling results:', error);
        }
    };


    useEffect(() => {
        handleResults();
    }, []);
    
    //const [imageList, setImageList] = useState([]);

    const handleSelect = (index, value) => {
        const newSelectedItems = [...selectedItems];
        newSelectedItems[index] = value;
        setSelectedItems(newSelectedItems);
        setidBrand(getIdBrand(value));
    }
   
    //-------------
    const [plate, setPlate] = useState(initialPlate || '');
    const [idBrand, setidBrand] = useState('');
    const [year, setYear] = useState('');

    const [responseMessage, setResponseMessage] = useState('');

    const handlePlateChange = (event) => {
        setPlate(event.target.value);
    }

    const handleYearChange = (event) => {
        setYear(event.target.value);
    }


    const getIdBrand = (brandName) => {
        const brand = responseData.find((item) => item.name === brandName);
        return brand ? brand.idBrand : null;
    };
    
    const resetInputs = () => {
        setYear('');
        setPlate('');
    };

    const validateInputs = () => {
        if (!plate || !year || !idBrand) {
            alert('Se deben llenar obligatoriamente los campos de: placa, año y marca');
            return false;
        }
        return true;
    };


    const validatePlate = () => {
        // Aquí defines tu expresión regular
        const regex = /^\d{6}$|^([A-Za-z]){3}-\d{3}$/;
        return regex.test(plate);
    };

    const validateYear = () => {
        // Aquí defines tu expresión regular
        const regex = /^(199[0-9]|20[0-1]\d|202[0-4])$/;
        return regex.test(year);
    };
    


    const handleCarUserEdit = async () => {
        const confirmEdit = window.confirm("¿Seguro que deseas modificar este carrro?");
        if (confirmEdit) {

            if (!validateInputs()) {
                return;
            }
    
            if (!validatePlate()) {
                alert('Placa con formato incorrecto, debe ser de 6 digitos o con el formato AAA-123');
                return;
            }
    
            if (!validateYear()) {
                alert('Año incorrecto, debe ser mayor o igual a 1990 y como máximo 2024');
                return;
            }

            if (plate != initialPlate) {

                const getPlate = async () => {
                    try {
                        console.log(plate.toUpperCase())
        
                        const response = await axios.get('http://localhost:8080/plate', {
                            params: {
                                licensePlate: plate.toUpperCase()
                            }
                        });
                        return response.data
                    } catch (error) {
                        console.error('Error al realizar la solicitud:', error);
                    }
                };
        
                const [plateResult] = await Promise.all([
                    getPlate(),
                ]);
        
        
                if (!plateResult.Result) {
                    alert('La placa ya se encontraba registrada');
                    return
                }
            }
    
            const getData = async () => {
                    try {
                        console.log(idBrand);
                        const response = await axios.put(`http://localhost:8080/carUser`,
                        {
                            idCar: idCar,
                            year: year,
                            licensePlate: plate.toUpperCase(),
                            idBrand: idBrand,
                            idUser: UserProfile.getId()
                        });

                        resetInputs();
                        
                        alert('Se ha modificado la marca de forma correcta');

                    } catch (error) {
                        console.error('Error al realizar la solicitud:', error);
                    }
                };
                getData();

        } else {
            alert('La marca no ha sido modificada');
        }
        
    }
    return (
        
            <div className="card mb-3" style={{ border:'0px' ,backgroundColor: "#F9F9F9" }} >
                <div className="row g-0">
                    <div className="card-body">

                        <h4 className="card-title" style={{ color: '#000000' }} >Modificar Carro</h4>


                        <Divider />
                        <div className="d-flex align-items-center">
                            <p className="card-text"><strong>Placa:</strong></p>
                            <div className="input-group ml-3" style={{ padding: '2%' }}>
                                <input type="text" id="plate" className="form-control" aria-label="plate" aria-describedby="basic-addon1" value={plate} onChange={handlePlateChange} />
                            </div>
                        </div>

                        <div className="d-flex align-items-center">
                            <p className="card-text"><strong>Año:</strong></p>
                                <div className="input-group ml-3" style={{ padding: '2%' }}>
                                    <input type="number" id="phone" className="form-control" aria-label="phone" aria-describedby="basic-addon1" value={year} onChange={handleYearChange} />
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
                                                <Dropdown.Item href="#" key={itemIndex} onClick={() => handleSelect(index, item) } >{item}</Dropdown.Item>
                                            ))}
                                        </Dropdown.Menu>
                                    </Dropdown>
                                </div>
                            ))}
                        </div>

                        <div className="col d-flex justify-content-end">
                            <button type="button" className="btn btn-danger" onClick={handleCarUserEdit}  style={{ marginTop: '1%', backgroundColor: '#C80B16', width: 'auto', height: 'auto%' }}>
                                Modificar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        
    );

}
export default MyCarFormModified
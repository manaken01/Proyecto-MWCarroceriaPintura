import { useState, useEffect} from 'react';
import Divider from '../decoration/Divider';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';
import { Button, Modal } from 'react-bootstrap';
import MyCarForm from './MyCarForm';

function AppointmentForm({date}) {

    const [dropdowns, setDropdowns] = useState([]);
    var [responseData, setResponse] = useState([]);
    const [selectedItems, setSelectedItems] = useState(Array(dropdowns.length).fill('Seleccione'));
    
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

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
                { label: 'Hora:', items: ['12:00 - 13:00', '13:00 - 16:00'] },
                { label: 'Razón:', items: ['Mantenimiento', 'Problema motor'] },
                { label: 'Marca:', items: dropdownItems },
                
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
    const [plate, setPlate] = useState('');
    const [idBrand, setidBrand] = useState('');

    const [responseMessage, setResponseMessage] = useState('');

    const handlePlateChange = (event) => {
        setPlate(event.target.value);
    }


    const getIdBrand = (brandName) => {
        const brand = responseData.find((item) => item.name === brandName);
        return brand ? brand.idBrand : null;
      };
    

    const handleParts = () => {
        /*console.log('name:', name);
        console.log('car:', car);
        console.log('category:', category);
        console.log('stock:', stock);
        console.log('bodyShape:', bodyShape);
        console.log('version:', version);
        console.log('generation:', generation);
        console.log('idBrand:', idBrand);
        console.log(photo);*/


        const getData = async () => {
            try {
                const response = await axios.post('http://localhost:8080/carPart', {
                    name: name,
                    car: car,
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
            } catch (error) {
                console.error('Error al realizar la solicitud:', error);
            }
        };

        getData();

    }

    return (
        
            <div className="card mb-3" style={{ border:'0px' ,backgroundColor: "#F9F9F9" }} >
                <div className="row g-0">
                    <div className="card-body">

                        <h4 className="card-title" style={{ color: '#000000' }} >Agendar cita</h4>


                        <Divider />
                        <p className="card-text" style={{ fontSize: '1.1em', marginBottom: '0', marginTop: '5%', color: '#000000' }}><strong>Dia: {date}</strong></p>
                        <div className="col">
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
                        

                        <div className="col d-flex justify-content-between">
                            <button type="button" className="btn btn-danger" onClick={handleShow}  style={{ marginTop: '10%', backgroundColor: '#C80B16', width: 'auto', height: 'auto%' }}>
                                Agregar carro
                            </button>
                            <button type="button" className="btn btn-danger" onClick={handleParts}  style={{ marginTop: '10%', backgroundColor: '#C80B16', width: 'auto', height: 'auto%' }}>
                                Confirmar
                            </button>
                        </div>
                        <Modal show={show} onHide={handleClose} style={{ backgroundColor: 'transparent' }}>
                            <Modal.Header closeButton style={{ backgroundColor: '#F9F9F9' }}> 
                            </Modal.Header>
                            <Modal.Body style={{ backgroundColor: '#F9F9F9' }}>
                                <MyCarForm />
                            </Modal.Body>
                            <Modal.Footer style={{ backgroundColor: '#F9F9F9' }}>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            </div>
        
    );
}

export default AppointmentForm;
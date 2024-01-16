import { useState, useEffect } from 'react';
import ImageUploader from '../decoration/ImageUploader';
import Divider from '../decoration/Divider';
import Dropdown from 'react-bootstrap/Dropdown';
import axios from 'axios';


const UserUpdateForm = ({ user, refreshParent, closeForm }) => {

    const [dropdowns, setDropdowns] = useState([]);
    var [responseData, setResponse] = useState([]);
    const [selectedItems, setSelectedItems] = useState(Array(dropdowns.length).fill('Seleccione'));

    const getdropdowns = async () => {
        try {
            const response = await axios.get('http://localhost:8080/userType');
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
            setDropdowns([{ label: 'Tipo de usuario:', items: dropdownItems }]);
            // Now you can use 'dropdowns' to populate your dropdown component or perform further processing
        } catch (error) {
            console.error('Error handling results:', error);
        }
    };

    useEffect(() => {
        handleResults();
    }, []);


    const handleSelect = (index, value) => {
        const newSelectedItems = [...selectedItems];
        newSelectedItems[index] = value;
        setSelectedItems(newSelectedItems);
        setType(getIdType(value));
    }

    //-------------
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    var [type, setType] = useState('');



    const [responseMessage, setResponseMessage] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    }

    const handleTypeChange = (event) => {
        setType(event.target.value);
    }


    const getIdType = (name) => {
        const userType = responseData.find((item) => item.name === name);
        return userType ? userType.idUserType : null;
    };
    const resetInputs = () => {
        setName('');
        setEmail('');
        setPhone('');
        setType('');
    };

    const defaultInputs = () => {
        setName(user.name);
        setEmail(user.email);
        setPhone(user.phone);
        setType(user.type);
    };

    useEffect(() => {
        defaultInputs();
    }, [user]);

    const validateInputs = () => {
        if (!name || !email || !phone || !type) {
            alert('Se deben llenar todos los campos');
            return false;
        }
        return true;
    };
    const handleUsers = () => {

        if (!validateInputs()) {
            return;
        }
        const getData = async () => {
            try {
                const response = await axios.put('http://localhost:8080/user', {
                    name: name,
                    email: email,
                    phone: phone,
                    type: type,
                    id: user.id
                });

                setResponseMessage(response.data);
                alert('Se ha modificado el usuario.');
                resetInputs();
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
                    <h4 className="card-title" style={{ color: '#000000' }} >Modificar usuario</h4>
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
                        <p className="card-text"><strong>Nombre de usuario:</strong></p>
                        <div className="input-group ml-3" style={{ padding: '2%' }}>
                            <input type="text" id="name" className="form-control" aria-label="name" aria-describedby="basic-addon1" value={name} onChange={handleNameChange} />
                        </div>
                    </div>

                    <div className="d-flex align-items-center">
                        <p className="card-text"><strong>Correo:</strong></p>
                        <div className="input-group ml-3" style={{ padding: '2%' }}>
                            <input type="text" id="email" className="form-control" aria-label="email" aria-describedby="basic-addon1" value={email} onChange={handleEmailChange} />
                        </div>
                    </div>

                    <div className="d-flex align-items-center">
                        <p className="card-text"><strong>Teléfono:</strong></p>
                        <div className="input-group ml-3" style={{ padding: '2%' }}>
                            <input type="text" id="phone" className="form-control" aria-label="phone" aria-describedby="basic-addon1" value={phone} onChange={handlePhoneChange} />
                        </div>
                    </div>

                    <div className="col d-flex justify-content-end">

                        <button type="button" className="btn btn-danger" onClick={handleUsers} style={{ marginTop: '1%', backgroundColor: '#C80B16', width: 'auto', height: 'auto%' }}>
                            Modificar
                        </button>

                    </div>

                </div>
            </div>
        </div>

    );
}

export default UserUpdateForm
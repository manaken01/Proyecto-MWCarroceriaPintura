import { useState, useEffect } from 'react';
import { Modal } from 'react-bootstrap';
import Divider from '../decoration/Divider';
import DeleteButton from '../../assets/DeleteButton.png';
import axios from 'axios';

//acordarse que hace falta refrescar los filtros despues de agregar marca o repuesto
function PartsForm({ refreshParent }) {
    const [brands, setBrands] = useState([]);
    const [showMarcaModal, setShowMarcaModal] = useState(false);

    const handleClose = () => {
        setShowMarcaModal(false);
    };
    const handleShowMarcaModal = () => setShowMarcaModal(true);

    const getbrands = async () => {
        try {
            const response = await axios.get('http://localhost:8080/brand');
            return response.data.Result.map((result) => result);
        } catch (error) {
            console.error('Error al realizar la solicitud:', error);
            return []; // Return an empty array or handle the error gracefully
        }
    };

    const handleResultsBrands = async () => {
        try {
            const brandItems = await getbrands();
            //console.log(brandItems);
            //console.log(dropdownItems); // Verify that dropdownItems contains the expected data
            setBrands(brandItems);
            // Now you can use 'dropdowns' to populate your dropdown component or perform further processing
        } catch (error) {
            console.error('Error handling results:', error);
        }
    };

    useEffect(() => {
        handleResultsBrands();
    }, []);

    //---------
    const [name, setName] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const handleNameChange = (event) => {
        setName(event.target.value);
    }



    const handleBrands = () => {
        const doesExist = brands.some(brand => brand.nameBrand === name.toUpperCase());
        if (!doesExist) {
            const getData = async () => {
                try {
                    const response = await axios.post('http://localhost:8080/brand', {
                        name: name.toUpperCase()
                    });

                    setResponseMessage(response.data);
                    //console.log(response.data);
                    handleResultsBrands();
                    refreshParent();
                    setName('');
                    alert('Se ha agregado la marca de forma correcta');

                } catch (error) {
                    console.error('Error al realizar la solicitud:', error);
                }
            };
            getData();
        } else {
            alert(' El nombre de la marca ya existe');
        }
    }

    const handleBrandsDelete = (idBrand) => {
        const confirmDelete = window.confirm("¿Seguro que deseas eliminar esta marca?");
        if (confirmDelete) {

            const getData = async () => {
                try {
                    console.log(idBrand);
                    const response = await axios.delete(`http://localhost:8080/brand/${idBrand}`);
                    setResponseMessage(response.data);
                    handleResultsBrands();
                    refreshParent();
                    alert('Se ha eliminado la marca de forma correcta');

                } catch (error) {
                    console.error('Error al realizar la solicitud:', error);
                }
            };

            getData();

        } else {
            alert('La marca no ha sido eliminada');
        }
    }

    const handleBrandsEdit = (idBrand) => {
        const confirmEdit = window.confirm("¿Seguro que deseas modificar esta marca?");
        if (confirmEdit) {
            const doesExist = brands.some(brand => brand.nameBrand === name.toUpperCase());
            if (!doesExist) {
                const getData = async () => {
                    try {
                        console.log(idBrand);
                        const response = await axios.put(`http://localhost:8080/brand`,
                        {
                            name: name.toUpperCase(),
                            idBrand: idBrand
                        });

                        setResponseMessage(response.data);
                        handleResultsBrands();
                        refreshParent();
                        setName('');
                        alert('Se ha modificado la marca de forma correcta');

                    } catch (error) {
                        console.error('Error al realizar la solicitud:', error);
                    }
                };
                getData();
            } else {
                alert(' El nombre de la marca ya existe');
            }

        } else {
            alert('La marca no ha sido modificada');
        }
        
    }

    return (

        <div className="card mb-3" style={{ border: '0px', backgroundColor: "#F9F9F9" }} >
            <div className="row g-0">
                <div className="card-body">

                    <h4 className="card-title" style={{ color: '#000000' }} >Agregar nueva marca</h4>


                    <Divider />
                    <div className="d-flex align-items-center">
                        <p className="card-text"><strong>Nombre:</strong></p>
                        <div className="input-group ml-3" style={{ padding: '2%' }}>
                            <input type="text" id="nombre" className="form-control" aria-label="nombre" aria-describedby="basic-addon1" value={name} onChange={handleNameChange} />
                        </div>
                        <button type="button" className="btn btn-danger" style={{ backgroundColor: '#C80B16', width: 'auto', height: 'auto%' }} onClick={handleBrands}>
                            Agregar
                        </button>

                    </div>

                    <div style={{ maxHeight: '200px', overflowY: 'scroll' }}>

                        <ul className="list-group">
                            <div className="row ">
                                {brands.map((brand, index) => (
                                    <li className="list-group-item d-flex justify-content-between align-items-center" key={index}>
                                        {brand.nameBrand}
                                        <div>
                                            <button
                                                type="button" className="btn" style={{ backgroundColor: 'transparent', width: 'auto', height: 'auto%' }}
                                                onClick={() => { handleBrandsDelete(brand.idBrand); }}
                                            >
                                                <img src={DeleteButton} style={{ height: 'auto', width: 'auto' }} alt="Delete" />
                                            </button>
                                            <button type="button" className="btn btn-danger" style={{ backgroundColor: '#C80B16', width: 'auto', height: 'auto%' }}
                                                onClick={handleShowMarcaModal}>
                                                Modificar
                                            </button>
                                            <Modal show={showMarcaModal} onHide={handleClose} style={{ backgroundColor: 'transparent' }}>
                                                <Modal.Header closeButton style={{ backgroundColor: '#F9F9F9' }}>
                                                </Modal.Header>
                                                <Modal.Body style={{ backgroundColor: '#F9F9F9' }}>
                                                    <div className="card mb-3" style={{ border: '0px', backgroundColor: "#F9F9F9" }} >
                                                        <div className="row g-0">
                                                            <div className="card-body">

                                                                <h4 className="card-title" style={{ color: '#000000' }} >Modificar marca</h4>


                                                                <Divider />
                                                                <div className="d-flex align-items-center">
                                                                    <p className="card-text"><strong>Nombre:</strong></p>
                                                                    <div className="input-group ml-3" style={{ padding: '2%' }}>
                                                                        <input type="text" id="nombre" className="form-control" aria-label="nombre" aria-describedby="basic-addon1" value={name} onChange={handleNameChange} />
                                                                    </div>
                                                                    <button type="button" className="btn btn-danger" style={{ backgroundColor: '#C80B16', width: 'auto', height: 'auto%' }} 
                                                                    onClick={() => { handleBrandsEdit(brand.idBrand); }}>
                                                                        Modificar
                                                                    </button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </Modal.Body>
                                                <Modal.Footer style={{ backgroundColor: '#F9F9F9' }}>
                                                </Modal.Footer>
                                            </Modal>
                                        </div>
                                    </li>

                                ))}
                            </div>

                        </ul>
                    </div>
                </div>
            </div>

        </div>

    );
}

export default PartsForm
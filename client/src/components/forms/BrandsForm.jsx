import { useState, useEffect } from 'react';
import Divider from '../decoration/Divider';
import DeleteButton from '../../assets/DeleteButton.png';
import axios from 'axios';
function PartsForm() {
    const [brands, setBrands] = useState([]);


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
        const doesExist = brands.some(brand => brand.name === name.toUpperCase());
        if (!doesExist) {
            const getData = async () => {
                try {
                    const response = await axios.post('http://localhost:8080/brand', {
                        name: name.toUpperCase()
                    });

                    setResponseMessage(response.data);
                    //console.log(response.data);
                    handleResultsBrands();
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
        const confirmDelete = window.confirm("Are you sure you want to delete this brand?");
    if (confirmDelete) {
    
            const getData = async () => {
                try {
                    console.log(idBrand);
                    const response = await axios.delete(`http://localhost:8080/brand/${idBrand}`);
                    setResponseMessage(response.data);
                    handleResultsBrands();
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
                                        {brand.name}
                                        <div>
                                            <button
                                                type="button"
                                                className="btn"
                                                style={{ backgroundColor: 'transparent', width: 'auto', height: 'auto%' }}

                                                onClick={() => {  handleBrandsDelete(brand.idBrand); }}
                                            >
                                                <img src={DeleteButton} style={{ height: 'auto', width: 'auto' }} alt="Delete" />
                                            </button>
                                            <button type="button" className="btn btn-danger" style={{ backgroundColor: '#C80B16', width: 'auto', height: 'auto%' }}>
                                                Modificar
                                            </button>
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
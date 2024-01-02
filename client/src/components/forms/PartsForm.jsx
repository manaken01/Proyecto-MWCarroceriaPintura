import { useState } from 'react';
import ImageUploader from '../decoration/ImageUploader';
import Divider from '../decoration/Divider';
import Dropdown from 'react-bootstrap/Dropdown';

function PartsForm() {
    const dropdowns = [
        { label: 'Marca:', items: ['Toyota', 'Honda', 'Ford', 'Chevrolet'] },
    ];
    const [imageList, setImageList] = useState([]);

    //image list es la lista de imagenes 
    /*<div>
                            {imageList.map((image) => (
                                <div key={image.id} style={{ display: 'flex', alignItems: 'center', marginBottom: '5px' }}>
                                    <img src={image.base64} alt={`Uploaded ${image.id}`} style={{ maxWidth: '100px', maxHeight: '100px', margin: '5px' }} />
                                </div>
                            ))}
                        </div>*/
    const handleImageListChange = (newImageList) => {
        setImageList(newImageList);
    
        // Perform additional actions with the JSON list here
        const jsonList = newImageList.map((image) => ({
          id: image.id,
          base64: image.base64,
        }));
    
        // For demonstration purposes, log the JSON list to the console
        console.log(jsonList);
      };
    const [selectedItems, setSelectedItems] = useState(Array(dropdowns.length).fill('Seleccione'));
    const handleSelect = (index, value) => {
        const newSelectedItems = [...selectedItems];
        newSelectedItems[index] = value;
        setSelectedItems(newSelectedItems);
    }

return (
    <div className="d-flex justify-content-center align-items-center">
        <div className="card mb-3" style={{ maxWidth: '50%', backgroundColor: "#F9F9F9", boxShadow: "#E3E3E3 3px 3px 3px" }}>
            <div className="row g-0">
                <div className="card-body">

                    <h4 className="card-title" style={{ color: '#000000' }}>Agregar nuevo repuesto</h4>


                    <Divider />
                    <div className="d-flex align-items-center">
                        <p className="card-text"><strong>Nombre:</strong></p>
                        <div className="input-group ml-3" style={{ padding: '2%' }}>
                            <input type="text" id="nombre" className="form-control" aria-label="nombre" aria-describedby="basic-addon1" />
                        </div>
                    </div>
                    <div className="d-flex align-items-center">
                        <p className="card-text"><strong>Carro:</strong></p>
                        <div className="input-group ml-3" style={{ padding: '2%' }}>
                            <input type="text" id="carro" className="form-control" aria-label="carro" aria-describedby="basic-addon1" />
                        </div>
                    </div>

                    <div className="d-flex align-items-center">
                        <p className="card-text"><strong>Categoría:</strong></p>
                        <div className="input-group ml-3" style={{ padding: '2%' }}>
                            <input type="text" id="categoria" className="form-control" aria-label="categoria" aria-describedby="basic-addon1" />
                        </div>
                    </div>

                    <div className="d-flex align-items-center">
                        <p className="card-text"><strong>Stock:</strong></p>
                        <div className="input-group ml-3" style={{ padding: '2%' }}>
                            <input type="text" id="stock" className="form-control" aria-label="stock" aria-describedby="basic-addon1" />
                        </div>
                    </div>

                    <div className="d-flex align-items-center">
                        <p className="card-text"><strong>Body Shape:</strong></p>
                        <div className="input-group ml-3" style={{ padding: '2%' }}>
                            <input type="text" id="bodyShape" className="form-control" aria-label="bodyShape" aria-describedby="basic-addon1" />
                        </div>
                    </div>

                    <div className="d-flex align-items-center">
                        <p className="card-text"><strong>Versión:</strong></p>
                        <div className="input-group ml-3" style={{ padding: '2%' }}>
                            <input type="text" id="version" className="form-control" aria-label="version" aria-describedby="basic-addon1" />
                        </div>
                    </div>

                    <div className="d-flex align-items-center">
                        <p className="card-text"><strong>Generación:</strong></p>
                        <div className="input-group ml-3" style={{ padding: '2%' }}>
                            <input type="text" id="generacion" className="form-control" aria-label="generacion" aria-describedby="basic-addon1" />
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
                                            <Dropdown.Item href="#" key={itemIndex} onClick={() => handleSelect(index, item)}>{item}</Dropdown.Item>
                                        ))}
                                    </Dropdown.Menu>
                                </Dropdown>
                            </div>
                        ))}
                    </div>
                    <div>
                        
                        <ImageUploader onImageListChange={handleImageListChange} />

                        
                    </div>

                    <div className="col d-flex justify-content-end">

                        <button className="btn btn-outline-secondary" style={{ marginRight: '1%', marginTop: '1%', height: 'auto%', width: 'auto%', backgroundColor: 'transparent', borderColor: '#C80B16', color: '#C80B16' }}>Salir</button>

                        <button type="button" className="btn btn-danger" style={{ marginTop: '1%', backgroundColor: '#C80B16', width: 'auto', height: 'auto%' }}>
                            Agregar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
);
}

export default PartsForm

import { useState } from 'react' 
import ImageUploader from '../decoration/ImageUploader'
import Divider from '../decoration/Divider'
function PartsForm() {
    /*brands = ['Toyota', 'Honda', 'Ford', 'Chevrolet'];*/
    return (
        <div className="d-flex justify-content-center align-items-center">
            <div className="card mb-3" style={{ maxWidth: '40%', backgroundColor: "#F9F9F9", boxShadow: "#E3E3E3 3px 3px 3px" }}>
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

                        <ImageUploader/>
                        
                        <div className="col d-flex justify-content-end">

                            <button className="btn btn-outline-secondary" style={{ marginRight:'1%',marginTop: '1%',height: 'auto%', width: 'auto%', backgroundColor: 'transparent', borderColor: '#C80B16', color: '#C80B16' }}>Salir</button>

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

import React from 'react';

const Register = () => {
    return (
        <div className="d-flex flex-column align-items-center justify-content-center" style={{ height: '100vh', marginTop: '5%' }}>
            <div className="container" style={{ marginTop: '-3%', marginBottom: '5%', backgroundColor: "#F9F9F9", boxShadow: "#E3E3E3 3px 3px 3px" , width: '60%', paddingLeft: '2%', paddingRight: '2%' }}>
                    <div className="row">
                <div className="col-12 d-flex justify-content-center" style={{ paddingTop: '5%'}}>
                    <h1>REGISTRAR USUARIO</h1>
                </div>
            </div>
                <div className="row align-items-center">
                    <div className="col-12 d-flex justify-content-center">
                        <div className="mb-3 align-items-center" style={{ paddingTop: '2%', width: '40%', minWidth: '250px', backgroundColor: "#F9F9F9" }}>
                            <label for="email">Nombre de usuario</label>
                            <div className="input-group">
                                <input type="text" id="email" className="form-control" aria-label="email" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-12 d-flex justify-content-center">
                        <div className="mb-3 align-items-center" style={{ paddingTop: '2%', width: '40%', minWidth: '250px', }}>
                            <label for="password">Correo electrónico</label>
                            <div className="input-group">
                                <input type="password" id="password" className="form-control" aria-label="password" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-12 d-flex justify-content-center">
                        <div className="mb-3 align-items-center" style={{ paddingTop: '2%', width: '40%', minWidth: '250px', }}>
                            <label for="password">Contraseña</label>
                            <div className="input-group">
                                <input type="password" id="password" className="form-control" aria-label="password" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-12 d-flex justify-content-center">
                        <div className="mb-3 align-items-center" style={{ paddingTop: '2%', width: '40%', minWidth: '250px', }}>
                            <label for="password">Confirmar contraseña</label>
                            <div className="input-group">
                                <input type="password" id="password" className="form-control" aria-label="password" aria-describedby="basic-addon1" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3 mb-3">
                    <div className="col-12 d-flex justify-content-center">
                        <div className="col-12 col-md-6 d-flex justify-content-center flex-column align-items-center">
                            <div>
                                <button className="btn btn-outline-secondary" style={{ height: '150%' , width: '110%', maxWidth: '150px', backgroundColor: '#C80B16', borderColor: '#C80B16', color: 'white' }}>Registrarse</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '2%', marginBottom: '-2%' }}>
                    <hr style={{ borderColor: '#9C9C9C', borderWidth: '2px', width: '40%' }}/>
                </div>
                <div className="row mt-3 mb-3" style={{ paddingBottom: '5%' }}>
                    <div className="col-12 d-flex justify-content-center">
                        <div className="col-12 col-md-6 d-flex justify-content-center flex-column align-items-center">
                            <div>
                                <button className="btn btn-outline-secondary" style={{ height: '150%' , width: '110%', maxWidth: '150px', backgroundColor: '#F9F9F9', borderColor: '#C80B16', color: '#C80B16'}}> Iniciar sesión </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Register;
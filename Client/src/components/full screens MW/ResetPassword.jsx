import React, { useState } from 'react';
import axios from 'axios';

const ResetPassword = () => {
    const [email, setEmail] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handleResetPassword = async () => {
        try {
            const response = await axios.put('http://localhost:8080/resetPass', {
                email: email
            });

            setResponseMessage(response.data);
            if (response.data.Result === true) {
                alert("Link con la contraseña temporal enviado.");
            }
            else {
                alert("No se encontró ninguna cuenta asociada a ese correo electrónico.");
            }
        } catch (error) {
            console.error('Error during the request:', error);
        }
    }

    return (
        <div className="d-flex flex-column align-items-center justify-content-center" style={{ paddingTop: '200px' }}>
            <div className="container" style={{ marginTop: '0%', marginBottom: '5%', backgroundColor: "#F9F9F9", boxShadow: "#E3E3E3 3px 3px 3px", width: '40%', paddingLeft: '2%', paddingRight: '2%' }}>
                <div className="row">
                    <div className="col-12 d-flex justify-content-center" style={{ paddingTop: '10%' }}>
                        <h1>Recuperar contraseña</h1>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-12 d-flex justify-content-center">
                        <div className="mb-3 align-items-center" style={{ paddingTop: '5%', width: '40%', minWidth: '250px', backgroundColor: "#F9F9F9" }}>
                            <label>
                                Correo electrónico:
                            </label>
                            <div className="input-group">
                                <input type="email" id="email" className="form-control" aria-label="email" aria-describedby="basic-addon1" value={email} onChange={handleEmailChange} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 d-flex justify-content-center" style={{paddingTop: '5%'}}>
                        <p style={{ maxWidth: '47%', textAlign: 'center' }}>
                        Enviaremos una contraseña temporal al correo electrónico indicado si este coincide con el de una cuenta existente. 
                        </p>
                    </div>
                </div>
                <div className="row mt-3 mb-3" style={{paddingTop: '2%', paddingBottom: '5%' }}>
                    <div className="col-12 d-flex justify-content-center">
                        <button className="btn btn-outline-secondary" onClick={handleResetPassword} style={{ height: '150%', width: '110%', maxWidth: '150px', backgroundColor: '#C80B16', borderColor: '#C80B16', color: 'white' }}>
                            Recuperar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ResetPassword;
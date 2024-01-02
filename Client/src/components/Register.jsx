import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeated, setPasswordRepeated] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const handleUsernameChange = (event) => {
        setUsername(event.target.value);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    }

    const handlePhoneChange = (event) => {
        setPhone(event.target.value);
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value);
    }

    const handlePasswordRepeatedChange = (event) => {
        setPasswordRepeated(event.target.value);
    }

    const handleRegister = () => {
        console.log('Username:', username);
        console.log('Email:', email);
        console.log('Phone:', phone);
        console.log('Password:', password);
        console.log('Repeated Password:', passwordRepeated);

        const postData = async () => {
            try {
                const response = await axios.post('http://localhost:8080/user', {
                    userName: username,
                    email: email,
                    cellphone: phone,
                    password: password
                });
                setResponseMessage(response.data);
            } catch (error) {
                console.error('Error al realizar la solicitud:', error);
            }
        };

        postData();
    }

    useEffect(() => {
        // Este useEffect se ejecutará cada vez que username, email, phone o password cambie
        console.log(responseMessage);
    }, [responseMessage]); 

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
                                <input type="text" id="username" className="form-control" aria-label="username" aria-describedby="basic-addon1" value={username} onChange={handleUsernameChange} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-12 d-flex justify-content-center">
                        <div className="mb-3 align-items-center" style={{ paddingTop: '2%', width: '40%', minWidth: '250px', }}>
                            <label for="password">Correo electrónico</label>
                            <div className="input-group">
                                <input type="email" id="email" className="form-control" aria-label="email" aria-describedby="basic-addon1" value={email} onChange={handleEmailChange} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-12 d-flex justify-content-center">
                        <div className="mb-3 align-items-center" style={{ paddingTop: '0%', width: '40%', minWidth: '250px', }}>
                            <label for="password">Número de teléfono</label>
                            <div className="input-group">
                                <input type="number" id="phone" className="form-control" aria-label="phone" aria-describedby="basic-addon1" value={phone} onChange={handlePhoneChange} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-12 d-flex justify-content-center">
                        <div className="mb-3 align-items-center" style={{ paddingTop: '0%', width: '40%', minWidth: '250px', }}>
                            <label for="password">Contraseña</label>
                            <div className="input-group">
                <input type="password" id="password" className="form-control" aria-label="password" aria-describedby="basic-addon1" value={password} onChange={handlePasswordChange} />
            </div>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-12 d-flex justify-content-center">
                        <div className="mb-3 align-items-center" style={{ paddingTop: '2%', width: '40%', minWidth: '250px', }}>
                            <label for="password">Confirmar contraseña</label>
                            <div className="input-group">
                                <input type="password" id="passwordRepeated" className="form-control" aria-label="passwordRepeated" aria-describedby="basic-addon1" value={passwordRepeated} onChange={handlePasswordRepeatedChange} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3 mb-3">
                    <div className="col-12 d-flex justify-content-center">
                        <div className="col-12 col-md-6 d-flex justify-content-center flex-column align-items-center">
                            <div>
                                <button className="btn btn-outline-secondary" onClick={handleRegister} style={{ height: '150%' , width: '110%', maxWidth: '150px', backgroundColor: '#C80B16', borderColor: '#C80B16', color: 'white' }}>Registrarse</button>
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
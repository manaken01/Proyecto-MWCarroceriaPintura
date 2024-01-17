import React, { useState } from 'react';
import axios from 'axios';
import { SHA256 } from 'crypto-js';
import UserProfile from '../resources/UserProfile';
import { useNavigate } from "react-router-dom";

/**
 * Display of change password screen
 * @returns
 */

const ChangePassword = () => {

    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [repeatNewPassword, setRepeatNewPassword] = useState('');
    const [responseMessage, setResponseMessage] = useState('');

    const navigate = useNavigate();

    const handleCurrentPasswordChange = (event) => {
        setCurrentPassword(event.target.value);
    }

    const handleNewPasswordChange = (event) => {
        setNewPassword(event.target.value);
    }

    const handleRepeatNewPasswordChange = (event) => {
        setRepeatNewPassword(event.target.value);
    }

    const validatePassword = () => {
        // Aquí defines tu expresión regular
        const regex = /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/;
        return regex.test(newPassword);
    };


    const handleChangePassword = async () => {

        if (!validatePassword()) {
            alert('Contraseña inválida: debe tener entre 8 y 16 caracteres, al menos una letra mayúscula, una letra minúscula y un número')
            return;
        }

        if (newPassword !== repeatNewPassword) {
            alert("La contraseña nueva no coincide con la repetición.");
            return;
        }

        const hashedCurrentPassword = SHA256(currentPassword).toString();
        const hashedNewPassword = SHA256(newPassword).toString();

        try {
            const response = await axios.put('http://localhost:8080/changePass', {
                idUser: UserProfile.getId(),
                oldPassword: hashedCurrentPassword,
                newPassword: hashedNewPassword
            });

            setResponseMessage(response.data);
            if (response.data.Result === true) {
                alert("Contraseña cambiada exitosamente.");
                navigate("/user");
            }
            else {
                alert("Current password is incorrect");
            }
        } catch (error) {
            console.error('Error during the request:', error);
        }
    }

    return (

        <div className="d-flex flex-column align-items-center justify-content-center" style={{ paddingTop: '200px' }}>
            <div className="container" style={{ marginTop: '-3%', marginBottom: '5%', backgroundColor: "#F9F9F9", boxShadow: "#E3E3E3 3px 3px 3px", width: '40%', paddingLeft: '2%', paddingRight: '2%' }}>
                <div className="row">
                    <div className="col-12 d-flex justify-content-center" style={{ paddingTop: '5%' }}>
                        <h1>Cambio de contraseña</h1>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 d-flex justify-content-center" style={{}}>
                        <p style={{ maxWidth: '70%', textAlign: 'center' }}>
                            Para cambiar su contraseña, debe ingresar la contraseña actual, seguido por la nueva contraseña.
                        </p>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-12 d-flex justify-content-center">
                        <div className="mb-3 align-items-center" style={{ paddingTop: '2%', width: '40%', minWidth: '250px', backgroundColor: "#F9F9F9" }}>
                            <label>
                                Contraseña actual:
                            </label>
                            <div className="input-group">
                                <input type="password" id="currentPassword" className="form-control" aria-label="currentPassword" aria-describedby="basic-addon1" value={currentPassword} onChange={handleCurrentPasswordChange} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-12 d-flex justify-content-center">
                        <div className="mb-3 align-items-center" style={{ paddingTop: '2%', width: '40%', minWidth: '250px', }}>
                            <label>
                                Nueva contraseña:
                            </label>
                            <div className="input-group">
                                <input type="password" id="newPassword" className="form-control" aria-label="newPassword" aria-describedby="basic-addon1" value={newPassword} onChange={handleNewPasswordChange} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row align-items-center">
                    <div className="col-12 d-flex justify-content-center">
                        <div className="mb-3 align-items-center" style={{ paddingTop: '2%', width: '40%', minWidth: '250px', }}>
                            <label>
                                Repetir nueva contraseña:
                            </label>
                            <div className="input-group">
                                <input type="password" id="repeatNewPassword" className="form-control" aria-label="repeatNewPassword" aria-describedby="basic-addon1" value={repeatNewPassword} onChange={handleRepeatNewPasswordChange} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row mt-3 mb-3" style={{ paddingBottom: '5%' }}>
                    <div className="col-12 d-flex justify-content-center">
                        <button className="btn btn-outline-secondary" onClick={handleChangePassword} style={{ height: '150%', width: '110%', maxWidth: '150px', backgroundColor: '#C80B16', borderColor: '#C80B16', color: 'white' }}>
                            Cambiar
                        </button>
                    </div>
                </div>
            </div>
        </div >
    );
}

export default ChangePassword;

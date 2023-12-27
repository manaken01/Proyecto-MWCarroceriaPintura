import React from 'react';
import logo from '../assets/LogoTallerMW.png'

function Navbar() {
    return (
        <nav class="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#9C9C9C' }}>
             <a class="navbar-brand" style={{ marginLeft:'1%' }} href="#">
                <img src={logo} alt="Logo" height="30" class="d-inline-block align-top" />  {/* Aquí agregamos la imagen */}
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul class="navbar-nav" style={{ marginLeft: 'auto', marginRight: '1%' }}>
                    <li class="nav-item active">
                        <a class="nav-link" href="#">Inicio <span className="sr-only">(current)</span></a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Repuestos</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Carros</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Información</a>
                    </li>
                    <li class="nav-item">
                        <a class="nav-link" href="#">Agendar</a>
                    </li>
                    <li class="nav-item">
                    <a class="nav-link"  style={{ marginRight: '100px' }} href="#">Usuario</a>
                    </li>
                    <li class="nav-item">
                        <button type="button" class="btn btn-danger " style={{ backgroundColor: '#C80B16'}}>Contáctenos</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;

import React from 'react';
import logo from '../../assets/LogoTallerMW.png';

function Navbar() {
    const linkStyle = { color: '#F9F9F9' };

    return (
        <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: '#9C9C9C', boxShadow: "#E3E3E3 5px 5px 3px", position: 'fixed', width: '100%', zIndex: 1000 }}>
            <a className="navbar-brand" style={{ marginLeft: '1%' }} href="#">
                <img src={logo} alt="Logo" height="30" className="d-inline-block align-top" />
            </a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                <ul className="navbar-nav" style={{ marginLeft: 'auto', marginRight: '1%' }}>
                    <li className="nav-item active">
                        <a className="nav-link" style={linkStyle} href="#">Inicio</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" style={linkStyle} href="#">Repuestos</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" style={linkStyle} href="#">Carros</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" style={linkStyle} href="#">Información</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" style={linkStyle} href="#">Agendar</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" style={{ ...linkStyle, marginRight: '100px' }} href="#">Usuario</a>
                    </li>
                    <li className="nav-item">
                        <button type="button" className="btn btn-danger" style={{ backgroundColor: '#C80B16' }}>Contáctenos</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
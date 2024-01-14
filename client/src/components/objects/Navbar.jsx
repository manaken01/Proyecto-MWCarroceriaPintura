import React, {useEffect} from 'react';
import logo from '../../assets/LogoTallerMW.png';
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Navbar() {

    const navigate = useNavigate();

    function navigateToContact() {
        navigate("/contact");
    }

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
                    <Link className="nav-link" to= "/" style={linkStyle} href="#">Inicio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/parts/No" style={linkStyle}>Repuestos</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/cars" style={linkStyle} href="#">Carros</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/information" style={linkStyle}>Información</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/calendar" style={linkStyle} href="#">Agendar</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/user" style={{ ...linkStyle, marginRight: '100px' }} href="#">Usuario</Link>
                    </li>
                    <li className="nav-item">
                        <button type="button" className="btn btn-danger" onClick={navigateToContact} style={{ backgroundColor: '#C80B16' }}>Contáctenos</button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Navbar;
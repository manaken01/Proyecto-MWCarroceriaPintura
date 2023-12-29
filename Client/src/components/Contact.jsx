import React from 'react';
import Navbar from './Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

function Contact() {
    return (
        <div>
            <div style={{ 
                    fontSize: '2.3em', 
                    fontWeight: '600', 
                    color: '#000000',
                    textAlign: 'center',
                    marginBottom: '0em',
                    marginTop: '2.5%'
                }}>
                    Contacto
            </div>

                <div class="container p-4 pb-0 text-center" style={{marginTop: '1%'}}>

                    <section class="mb-4" >
                        <a
                        className="btn btn-primary btn-lg btn-floating"
                        style={{
                            backgroundColor: "#BF360C",
                            borderRadius: "50%",         // Hace que el botón sea redondo
                            width: "auto",               // Ancho del botón
                            height: "auto",              // Altura del botón
                            alignItems: "center",        // Para centrar verticalmente el ícono
                            justifyContent: "center",     // Para centrar horizontalmente el ícono
                            marginRight: '1%',
                            fontSize: '1.7em'
                        }}
                        href="#!"
                        role="button"
                        >
                        <FontAwesomeIcon icon={faFacebook} />
                        </a>

                        <a
                        className="btn btn-primary btn-lg btn-floating"
                        style={{
                            backgroundColor: "#BF360C",
                            borderRadius: "50%",         // Hace que el botón sea redondo
                            width: "auto",               // Ancho del botón
                            height: "auto",              // Altura del botón
                            alignItems: "center",        // Para centrar verticalmente el ícono
                            justifyContent: "center",     // Para centrar horizontalmente el ícono
                            marginRight: '1%',
                            fontSize: '1.7em'
                        }}
                        href="#!"
                        role="button"
                        >
                        <FontAwesomeIcon icon={faInstagram} />
                        </a>

                        <a
                        className="btn btn-primary btn-lg btn-floating"
                        style={{
                            backgroundColor: "#BF360C",
                            borderRadius: "50%",         // Hace que el botón sea redondo
                            width: "auto",               // Ancho del botón
                            height: "auto",              // Altura del botón
                            alignItems: "center",        // Para centrar verticalmente el ícono
                            justifyContent: "center",     // Para centrar horizontalmente el ícono
                            fontSize: '1.7em'
                        }}
                        href="#!"
                        role="button"
                        >
                        <FontAwesomeIcon icon={faWhatsapp} />
                        </a>
                    </section>
                </div>
            <div class="row w-100" style={{marginTop: '3%'}}>
                <div class="col-lg-6 my-4 d-flex align-items-center text-center"  >
                    <div style={{ marginLeft: 'auto', marginRight: 'auto'}}>
                        <a
                            style={{color: "#BF360C", width: 'auto', height: 'auto', fontSize: '3em'}}
                            >
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                        </a>
                        <h2><strong>MW Carroceria y pintura San José</strong></h2>
                        <p style={{ fontSize: '1.5em' }}>200 metros norte la universal Avenida Central. 
                            </p>
                        <p style={{ fontSize: '1.5em' }}>10106 San José</p>
                        <p style={{ fontSize: '1.5em' }}>Provincia de San José, Costa Rica</p>
                        <p style={{ fontSize: '1.5em' }}>+506 8480 0640</p>
                    </div>
                </div>
                <div class="col-lg-6 my-4" >
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1965.172333504467!2d-84.07012198125592!3d9.905224840070254!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xc754bdb5612b2e70!2zOcKwNTQnMTguOCJOIDg0wrAwNCcwOC41Ilc!5e0!3m2!1ses!2ses!4v1641634043363!5m2!1ses!2ses"
                    class="w-100" height="400" allowFullScreen="" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    );
}

export default Contact;

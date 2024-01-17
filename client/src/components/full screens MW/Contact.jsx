import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFacebook } from '@fortawesome/free-brands-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

/**
 * Display of contact
 * @param {*} 
 * @returns component
 */
function Contact() {
    return (
        <div>
            <div className="container p-4 pb-0 text-center">
                <div style={{ 
                        fontSize: '2.3em', 
                        fontWeight: '600', 
                        color: '#000000',
                        textAlign: 'center',
                        marginTop: '6%'
                    }}>
                        Contacto
                </div>
                <section className="mb-4" >
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
                        href="https://www.instagram.com/mwcarroceriapintura/"
                        role="button"
                        target="_blank"
                        rel="noopener noreferrer"
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
            <div className="row w-100" style={{marginTop: '3%'}}>
                <div className="col-lg-6 my-4 d-flex align-items-center text-center"  >
                    <div style={{ marginLeft: 'auto', marginRight: 'auto'}}>
                        <a
                            style={{color: "#BF360C", width: 'auto', height: 'auto', fontSize: '3em'}}
                            >
                            <FontAwesomeIcon icon={faMapMarkerAlt} />
                        </a>
                        <h2><strong>MW Carroceria y pintura</strong></h2>
                        <p style={{ fontSize: '1.5em' }}>1 kilometro oeste del cementerio y 50 sur Alajuela Palmares, 20701. 
                            </p>
                        <p style={{ fontSize: '1.5em' }}>11001 Alajuela</p>
                        <p style={{ fontSize: '1.5em' }}>Provincia de Alajuelta, Costa Rica</p>
                        <p style={{ fontSize: '1.5em' }}>+506 8828 4808</p>
                    </div>
                </div>
                <div className="col-lg-6 my-4" >
                    <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2777.9650159673015!2d-84.43941690421104!3d10.046881819469844!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8fa05b829d82877d%3A0x6973e7d19a9e351c!2sMW%20Carrocer%C3%ADa%20y%20Pintura!5e0!3m2!1ses!2scr!4v1705465619632!5m2!1ses!2scr"
                    className="w-100" height="400" allowFullScreen="" loading="lazy"></iframe>
                </div>
            </div>
        </div>
    );
}

export default Contact;

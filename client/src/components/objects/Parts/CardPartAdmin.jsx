import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, CarouselItem, Modal } from 'react-bootstrap';
import React, { useState, useEffect } from 'react';
import HeartButton from '../../decoration/HeartButton';
import Divider from '../../decoration/Divider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import PartsUpdateForm from '../../forms/PartsUpdateForm';
import axios from 'axios';
import UserProfile from '../../resources/UserProfile';

/**
 * Component of an individual part. Include delete button and update button for the admin
 * @param {*} 
 * refreshFavorites: Function to update the list of favorites
 * Liked: Boolean that indicates if the part is liked or not
 * id: id of the part
 * name: name of the part
 * car: car of the part
 * price: price of the part
 * category: category of the part
 * stock: stock of the part
 * bodyshape: bodyshape of the part
 * brand: brand of the part
 * version: version of the part
 * gen: generation of the part
 * pic: list of photos of the part
 * idBrand: id of the brand of the part
 * refreshParent: function to update the list of parts
 * @returns component
 */
function CardPartAdmin({ refreshFavorites, Liked, id, name, car, price, category, stock, bodyshape, brand, version, gen, pic, idBrand, refreshParent }) {
    const allProps = { id, name, car, price, category, stock, bodyshape, brand, version, gen, pic, idBrand };
    //const [isFirstRender, setIsFirstRender] = useState(true);

    const [showPartModal, setshowPartModal] = useState(false);
    const [isLiked, setIsLiked] = useState(Liked);

    const handleLikeClick = () => {
        if (UserProfile.getId() !== 0) {
            const newIsLiked = !isLiked;
            setIsLiked(newIsLiked);
            if (newIsLiked) {
                handleAddFavorite();
            } else {
                handleDeleteFavorite();
            }
        } else {
            alert("Debe iniciar sesión para realizar acciones");
        }
    };
    const handleClose = () => {
        setshowPartModal(false);
    };

    const handleshowPartModal = () => setshowPartModal(true);

    const handleDelete = async () => {
        if (window.confirm('¿Está seguro que desea eliminar este repuesto?')) {
            try {
                const response = await axios.delete(`http://localhost:8080/carPart/${id}`)
                if (response.status === 200) {
                    refreshParent();
                    alert('Se ha eliminado el repuesto de forma correcta');
                }
            } catch (error) {
                console.error('Error al realizar la solicitud:', error);
            }
        }
    };

    const handleAddFavorite = async () => {
        try {
            const response = await axios.post('http://localhost:8080/favorites', {
                idUser: UserProfile.getId(),
                idProduct: id,
                status: 1
            });
            if (response.status === 200) {
                refreshFavorites();
            }
        } catch (error) {
            console.error('Error al realizar la solicitud:', error);
        }
    }

    const handleDeleteFavorite = async () => {
        try {
            const response = await axios.delete(`http://localhost:8080/favorites/${UserProfile.getId()}/${id}/${1}`)
            if (response.status === 200) {
                refreshFavorites();
            }
        } catch (error) {
            console.error('Error al realizar la solicitud:', error);
        }
    }

    useEffect(() => {
        setIsLiked(Liked);
    }, [Liked]);
    return (
        <div className="card mb-3 " style={{ cursor: "pointer", maxWidth: '100%', backgroundColor: "#F9F9F9", boxShadow: "#E3E3E3 3px 3px 3px" }}>
            <div className="row g-0 ">
                <div className="col-md-6 " >
                    <Carousel style={{ boxSizing: 'content-box', objectFit: 'cover', height: '100%', alignItems: 'center' }}>
                        {pic.map((imagen, index) => {
                            return (
                                <CarouselItem key={`${id}-${index}`} >
                                    <img src={imagen} alt={`Slide ${index + 1}`} style={{ minWidth: '100%', maxHeight: '350px' }} className="d-block h-100"  />
                                </CarouselItem>
                            );
                        })}
                    </Carousel>
                </div>
                <div className="col-md-6">
                    <div className="card-body">
                        <div className="d-flex justify-content-between align-items-center">
                            <h5 className="card-title" style={{ color: '#000000' }}>{brand} {name}</h5>
                            <div style={{ display: 'flex', alignItems: 'center' }}>
                                <button onClick={handleDelete} className="btn" style={{ marginBottom: '2.8%', marginRight: '5%', color: 'red', backgroundColor: 'transparent', width: '5%', height: '5%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <FontAwesomeIcon icon={faTrash} style={{ fontSize: '20px' }} />
                                </button>
                                <HeartButton isLiked={isLiked} handleLikeClick={handleLikeClick} />
                            </div>
                        </div>
                        <Divider />
                        <p className="card-text" style={{ marginBottom: '3%', color: '#000000' }}><strong>Carro: {car}</strong></p>
                        <p className="card-text" style={{ marginBottom: '3%', color: '#C80B16' }}><strong>Precio: ₡</strong> {price}</p>
                        <p className="card-text" style={{ marginBottom: '3%', color: '#000000' }}><strong>Categoría: </strong>{category}</p>
                        <p className="card-text" style={{ marginBottom: '3%', color: '#000000' }}><strong>Stock: </strong>{stock}</p>
                        <p className="card-text" style={{ marginBottom: '3%', color: '#000000' }}><strong>Body Shape: </strong>{bodyshape}</p>
                        <p className="card-text" style={{ marginBottom: '3%', color: '#000000' }}><strong>Versión: </strong>{version}</p>
                        <p className="card-text" style={{ marginBottom: '3%', color: '#000000' }}><strong>Generación: </strong>{gen}</p>

                        <button type="button" onClick={handleshowPartModal} className="btn btn-danger" style={{ textAlign: 'center', backgroundColor: '#C80B16', width: '100%', height: '5%' }}>
                            Modificar
                        </button>
                        <Modal show={showPartModal} onHide={handleClose} style={{ backgroundColor: 'transparent' }}>
                            <Modal.Header closeButton style={{ backgroundColor: '#F9F9F9' }}>
                            </Modal.Header>
                            <Modal.Body style={{ backgroundColor: '#F9F9F9' }}>
                                <PartsUpdateForm carPart={allProps} refreshParent={refreshParent} closeForm={handleClose} pic={pic} />
                            </Modal.Body>
                            <Modal.Footer style={{ backgroundColor: '#F9F9F9' }}>
                            </Modal.Footer>
                        </Modal>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CardPartAdmin;
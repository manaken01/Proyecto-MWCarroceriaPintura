import UserProfile from '../resources/UserProfile';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import CardsPartFavorite from '../objects/Favorites/CardsPartFavorites'
import { useState, useEffect } from 'react'
import axios from 'axios';

const UserScreenGeneral = () => {
    const navigate = useNavigate();
    const [cards, setCards] = useState([]);
    const linkStyle = { color: '#C80B16', textDecoration: 'none', display: 'inline-block', width: '100%', height: 'auto', fontWeight: 600 };
    const manageLogOut = () => {
        UserProfile.deleteCookies();
    }

    const handleCardFavorites = async () => {
        if (UserProfile.getId() !== 0) {
            try {
                const response = await axios.get('http://localhost:8080/Userfavorites', {
                    params: {
                        idUser: UserProfile.getId(),
                        status: 1
                    }
                });
                setCards(response.data.Result);
            } catch (error) {
                console.error('Error al realizar la solicitud:', error);
            }
        } else {
            alert('Debe iniciar sesión para ver sus favoritos')
        }
    };



    useEffect(() => {
        const fetchData = async () => {
            await handleCardFavorites();
        };

        fetchData();
    }, []);

    return (
        <div>
            <div className="col-12 d-flex justify-content-center" style={{ paddingTop: '80px' }}></div>
            <h1 style={{ marginLeft: '10%' }}>¡Hola {UserProfile.getUsername()}! </h1>
            {/* Row with links */}
            <div id="navbarNavAltMarkup">
                <div style={{ marginLeft: 'auto', marginRight: '1%' }}>
                    <ul className="d-flex justify-content-between" style={{ marginLeft: 'auto', marginRight: '1%' }}>
                        <li className="nav-item active" style={{ listStyle: 'none', marginLeft: '20%' }}>
                            <Link className="nav-link" to="/" style={linkStyle} href="#">Recuperar contraseña</Link>
                        </li>
                        <li className="nav-item active" style={{ listStyle: 'none' }}>
                            <Link className="nav-link" to="/" style={linkStyle} href="#">Cambiar contraseña</Link>
                        </li>
                        <li className="nav-item active" style={{ listStyle: 'none' }}>
                            <Link className="nav-link" onClick={manageLogOut} to="/login" style={linkStyle} href="#">Cerrar sesión</Link>
                        </li>
                        <li className="nav-item active" style={{ listStyle: 'none',  marginRight: '20%'  }}>
                            <Link className="nav-link" to="/" style={linkStyle} href="#">Ver mis carros</Link>
                        </li>
                    </ul>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '-1.5%', marginBottom: '-2%' }}>
                        <hr style={{ borderColor: '#000000', borderWidth: '4px', width: '70%' }} />
                    </div>
                </div>
            </div>
            
            <h1 style={{ marginLeft: '10%' , marginTop: '3%', marginBottom: '2%' }}>Repuestos favoritos</h1>
            <CardsPartFavorite refreshFavorites={handleCardFavorites} cards={cards} />

        </div>
    );
};


export default UserScreenGeneral;
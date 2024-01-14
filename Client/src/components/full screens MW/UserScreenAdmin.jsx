import UserProfile from '../resources/UserProfile';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const UserScreenAdmin = () => {
    const navigate = useNavigate();
    const linkStyle = { color: '#C80B16', textDecoration: 'none', display: 'inline-block', width: '100%', height: 'auto', fontWeight: 600 };
    const manageLogOut = () => {
        UserProfile.deleteCookies();
    }
    return (
        <div>
            <div className="col-12 d-flex justify-content-center" style={{ paddingTop: '80px' }}></div>
            <h1 style={{ marginLeft: '10%' }}>¡Hola {UserProfile.getUsername()}! </h1>
            {/* Row with links */}
            <div id="navbarNavAltMarkup">
                <div style={{ marginLeft: 'auto', marginRight: '1%' }}>
                    <ul className="d-flex justify-content-between" style={{ marginLeft: 'auto', marginRight: '1%' }}>
                        <li className="nav-item active" style={{ listStyle: 'none', marginLeft : '20%'}}>
                            <Link className="nav-link" to="/" style={linkStyle} href="#">Recuperar contraseña</Link>
                        </li>
                        <li className="nav-item active" style={{ listStyle: 'none'}}>
                            <Link className="nav-link" to="/" style={linkStyle} href="#">Cambiar contraseña</Link>
                        </li>
                        <li className="nav-item active" style={{ listStyle: 'none'}}>
                            <Link className="nav-link" onClick={manageLogOut}  to="/login" style={linkStyle} href="#">Cerrar sesión</Link>
                        </li>
                        <li className="nav-item active" style={{ listStyle: 'none'}}>
                            <Link className="nav-link" to="/myCar" style={linkStyle} href="#">Ver mis carros</Link>
                        </li>
                        <li className="nav-item active" style={{ listStyle: 'none', marginRight : '20%'}}>
                            <Link className="nav-link" to="/manageUsers" style={linkStyle} href="#">Manejar usuarios</Link>
                        </li>
                    </ul>
                    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '-1.5%', marginBottom: '-2%' }}>
                        <hr style={{ borderColor: '#000000', borderWidth: '4px', width: '70%' }}/>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserScreenAdmin;
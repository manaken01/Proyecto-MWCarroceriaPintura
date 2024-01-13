import UserProfile from '../resources/UserProfile';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import SearchUser from '../objects/CarSell/SearchUser';

const ManageUsers = () => {
    const navigate = useNavigate();
    const linkStyle = { color: '#C80B16', textDecoration: 'none', display: 'inline-block', width: '100%', height: 'auto', fontWeight: 600 };
    return (
        <div>
            <div className="col-12 d-flex justify-content-center" style={{ paddingTop: '80px' }}>
            <h1 style={{ }}>Usuarios </h1>
            </div>
            <SearchUser/>
        </div>
    );
};

export default ManageUsers;
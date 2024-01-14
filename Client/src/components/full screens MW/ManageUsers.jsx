import UserProfile from '../resources/UserProfile';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import SearchUser from '../objects/User/SearchUser';
import CardsUser from '../objects/User/CardsUser';
import axios from 'axios';
import { useState, useEffect } from 'react'

const ManageUsers = () => {
    const [cards, setCards] = useState([]);
    const [search, setSearch] = useState('');
    const navigate = useNavigate();
    const linkStyle = { color: '#C80B16', textDecoration: 'none', display: 'inline-block', width: '100%', height: 'auto', fontWeight: 600 };

    const handleResults = async () => {
        axios.get('http://localhost:8080/user')
            .then(response => {
                setCards(response.data.Result);
            })
            .catch(error => {
                console.log(error);
            });
    }
    useEffect(() => {
        handleResults();
    }, []);

    return (
        <div>
            <div className="col-12 d-flex justify-content-center" style={{ paddingTop: '80px' }}>
            <h1 style={{ }}>Usuarios </h1>
            </div>
            <SearchUser  search={search} setSearch= {setSearch} />
            <CardsUser cards={cards} search={search} setSearch= {setSearch} refreshParent={handleResults} />
        </div>
    );
};

export default ManageUsers;
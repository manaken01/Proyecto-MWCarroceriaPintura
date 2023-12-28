import React from 'react';
import Card from './Card';

const cards = [
    { id: 1, nombre: "Repuesto nombre 1", Carro: "NISSAN SENTRA 2000-2006 (B15)", Precio: "₡ 40000", Categoría: "Dash", Stock: "2 disponibles", BodyShape: "Sedan", Versión: "Japón" },
    { id: 2, nombre: "Repuesto nombre 2", Carro: "NISSAN SENTRA 2000-2006 (B15)", Precio: "₡ 40000", Categoría: "Dash", Stock: "2 disponibles", BodyShape: "Sedan", Versión: "Japón" },
    { id: 3, nombre: "Repuesto nombre 3", Carro: "NISSAN SENTRA 2000-2006 (B15)", Precio: "₡ 40000", Categoría: "Dash", Stock: "2 disponibles", BodyShape: "Sedan", Versión: "Japón" },
    { id: 4, nombre: "Repuesto nombre 4", Carro: "NISSAN SENTRA 2000-2006 (B15)", Precio: "₡ 40000", Categoría: "Dash", Stock: "2 disponibles", BodyShape: "Sedan", Versión: "Japón" },
    { id: 5, nombre: "Repuesto nombre 5", Carro: "NISSAN SENTRA 2000-2006 (B15)", Precio: "₡ 40000", Categoría: "Dash", Stock: "2 disponibles", BodyShape: "Sedan", Versión: "Japón" },
]
function Cards() {
    return (
        <div className="container d-flex justify-content-center align-items-center" >
            <div className='row'>{
                cards.map(card => (
                    <div className='col-md-6' key={card.id}>
                        <Card nombre={card.nombre} />
                    </div>
                ))
            }
            </div>

        </div>
    );
}

export default Cards;

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Divider from '../decoration/Divider';

function CardCalendar({date,hour,reason,car}) {
return (
<div>
    <div className="card mb-3" style={{ maxWidth: '100%'}}>
        <div className="row g-0">
            <div className="col-md-12">
                <div className="card-body">
                    <p className="card-text" style={{ fontSize: '1.1em', marginBottom: '0', color: '#000000'}}><strong> {date}</strong></p>
                    <p className="card-text" style={{ fontSize: '1.1em', marginBottom: '0', marginTop: '5%', color: '#000000' }}><strong> Hora: {hour}</strong></p>
                    <p className="card-text" style={{ fontSize: '1.1em', marginBottom: '0', marginTop: '5%', color: '#000000' }}><strong>Razón: {reason}</strong></p>
                    <p className="card-text" style={{ fontSize: '1.1em', marginBottom: '0', marginTop: '5%', color: '#000000' }}><strong>Carro: {car}</strong></p>
                    <button type="button" className="btn btn-danger" style={{ marginTop: '5%', backgroundColor: '#C80B16' }}>Modificar</button>
                    <button type="button" className="btn btn-danger" style={{ marginTop: '5%', marginLeft: '21%', backgroundColor: '#C80B16' }}>Eliminar</button>
                </div>
            </div>
        </div>
    </div>
</div>
) 
}


export default CardCalendar;
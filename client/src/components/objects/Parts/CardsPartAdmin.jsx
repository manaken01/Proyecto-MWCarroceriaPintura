
import Card from './CardPartAdmin';

function CardPartAdmin({cards,filters, search, refreshParent}) {
    

    const filteredCards = cards.filter(card => 
        (filters[0] === 'Seleccione' || card.parts.nameBrand === filters[0]) &&
        (filters[1] === 'Seleccione' || card.parts.car === filters[1]) &&
        (filters[2] === 'Seleccione' || card.parts.category === filters[2]) &&
        (filters[3] === 'Seleccione' || card.parts.name === filters[3])&&

        ((search && (card.parts.name.toLowerCase().includes(search.toLowerCase()) ||
        card.parts.car.toLowerCase().includes(search.toLowerCase()) ||
        card.parts.price.toString().includes(search.toLowerCase()) ||
        card.parts.category.toLowerCase().includes(search.toLowerCase()) ||
        card.parts.car.toLowerCase().includes(search.toLowerCase()) ||
        card.parts.nameBrand.toLowerCase().includes(search.toLowerCase()) ||
        card.parts.bodyShape.toLowerCase().includes(search.toLowerCase()) ||
        card.parts.version.toLowerCase().includes(search.toLowerCase()) ||
        card.parts.generation.toLowerCase().includes(search.toLowerCase())))
    
        || (search === undefined || search === ''))
    );
    return (
        <div>
        <div className="container flex justify-content-center align-items-center" >
            <div className='row'>{
                filteredCards.map(card => {
                    return (
                        <div className='col-md-6' key={card.parts.idPart}>
                        <Card 
                        id={card.parts.idPart}
                        name={card.parts.name}
                        car={card.parts.car} 
                        price={card.parts.price} 
                        category={card.parts.category} 
                        stock={card.parts.stock} 
                        bodyshape={card.parts.bodyShape} 
                        brand={card.parts.nameBrand} 
                        version={card.parts.version} 
                        gen={card.parts.generation}  
                        idBrand={card.parts.idBrand}
                        pic={card.photos}
                        refreshParent={refreshParent}  />
                    </div>
                );
            })
            }
            </div>
        </div>

        </div>

    );
}

export default CardPartAdmin;

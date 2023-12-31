import React from 'react';
import Brand from './Brand';

import toyimg from '../../assets/brands/toyotaIMG.png';
import hyuimg from '../../assets/brands/hyundaiIMG.png';
import nisimg from '../../assets/brands/nissanIMG.png';
import honimg from '../../assets/brands/hondaIMG.png';
import kiaimg from '../../assets/brands/kiaIMG.png';
import mitimg from '../../assets/brands/mitsubishiIMG.png';
import cheimg from '../../assets/brands/chevroletIMG.png';
import mazimg from '../../assets/brands/mazdaIMG.png';
import susimg from '../../assets/brands/susukiIMG.png';

const brands = [{ id: 1, brand: "TOYOTA", pic: toyimg },
{ id: 2, brand: "HYUNDAI", pic: hyuimg },
{ id: 3, brand: "NISSAN", pic: nisimg },
{ id: 4, brand: "HONDA", pic: honimg },
{ id: 5, brand: "KIA", pic: kiaimg },
{ id: 6, brand: "MITSUBISHI", pic: mitimg },
{ id: 7, brand: "CHEVROLET", pic: cheimg },
{ id: 8, brand: "MAZDA", pic: mazimg },
{ id: 9, brand: "SUSUKI", pic: susimg }
]
function Brands() {
    return (
        <div className="container d-flex justify-content-center align-items-center" >
            <div className='row'>{
                brands.map(brand => (
                    <div className='col-md-4' key={brand.id}>
                        <Brand brand={brand.brand} pic={brand.pic} />
                    </div>
                ))
            }
            </div>

        </div>
    );
}

export default Brands;

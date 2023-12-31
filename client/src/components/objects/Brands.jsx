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

const brands = [{ id: 1, marca: "TOYOTA", imag: toyimg },
{ id: 2, marca: "HYUNDAI", imag: hyuimg },
{ id: 3, marca: "NISSAN", imag: nisimg },
{ id: 4, marca: "HONDA", imag: honimg },
{ id: 5, marca: "KIA", imag: kiaimg },
{ id: 6, marca: "MITSUBISHI", imag: mitimg },
{ id: 7, marca: "CHEVROLET", imag: cheimg },
{ id: 8, marca: "MAZDA", imag: mazimg },
{ id: 9, marca: "SUSUKI", imag: susimg }
]
function Brands() {
    return (
        <div className="container d-flex justify-content-center align-items-center" >
            <div className='row'>{
                brands.map(brand => (
                    <div className='col-md-4' key={brand.id}>
                        <Brand marca={brand.marca} imag={brand.imag} />
                    </div>
                ))
            }
            </div>

        </div>
    );
}

export default Brands;

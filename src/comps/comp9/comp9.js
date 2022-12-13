import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../index.css';
import "./../main.css";
import BgText from "./../bgText/bgText";



export default function Comp9(props) {
    return (
        <div className="comp">
            <div className="openSansFont fontW700 compContent">
                <p className='fontS72'>Frekans Modülasyonu (FM)</p>
                <p className='fontW400 fontS48'>Frekans modülasyonu, taşıyıcı sinyalinin frekansının, bilgi sinyaline göre değişmesiyle oluşur.
Taşıyıcı sinyalinin genliği sabit, frekansı bilgi sinyalinin değeriyle doğru orantılı olarak artar.
Yayıncılık, televizyon ve telsiz telefonlarda yoğun olarak kullanılmaktadır.</p>
            </div>
            <BgText text="Frekans Modülasyonu" bottom="-40px" left="-35px" />
        </div>
    );
}





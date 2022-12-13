import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../index.css';
import "./../main.css";
import BgText from "../bgText/bgText";



export default function Comp6(props) {
    return (
        <div className="comp">
            <div className="openSansFont fontW700 compContent">
                <p className='fontS48'>Genlik Modülasyonu (AM)</p>
                <p className='fontW400 fontS48'>Genlik modülasyonunda, taşıyıcı sinüs sinyalidir.</p>
                <p className='fontW400 fontS48'>Taşıyıcı sinüs sinyalinin genliği bilgi sinyaline bağlı
olarak değiştirilir. Bu işlemi gerçekleştiren devreye
<span className='fontW700'> modülatör</span>  denir.</p>
                <p className='fontW400 fontS48'></p>
                <p className='fontW400 fontS48'></p>

            </div>
            <BgText text="Genlik Modülasyonu" bottom="-40px" left="-35px" />
        </div>
    );
}





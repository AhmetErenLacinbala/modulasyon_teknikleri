import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../index.css';
import "./../main.css";
import BgText from "../bgText/bgText";



export default function Comp15(props) {
    return (
        <div className="comp">
            <div className="openSansFont fontW700 compContent3">
                <p className='fontS48'>Düz Üst Darbe Genlik Modülasyonu</p>
                <p className='fontS48'>(Flat Top Darbe Genlik Modülasyonu)</p>
                <p className='fontW400 fontS40'>● Darbelerin genlikleri, mesaj sinyalinin genliğine bağlıdır.</p>
                <p className='fontW400 fontS40'>● DC öngerilimlenmesi yoktur.</p>
                <p className='fontW400 fontS40'>● Modüleli sinyal pozitif ve negatif olabilir.</p>
                <p className='fontW400 fontS40'>● Bilgi sinyali yokken, yayın da yoktur.</p>
            </div>
            <img src="img/pamtop.jpg" alt="123" />
            <BgText text="Darbe Genlik" bottom="-40px" left="-70px" />
        </div>
    );
}





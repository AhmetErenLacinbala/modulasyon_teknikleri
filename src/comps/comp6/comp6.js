import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../index.css';
import "./../main.css";
import BgText from "../bgText/bgText";



export default function Comp6(props) {
    return (
        <div className="comp">
            <div className="openSansFont fontW700 compContent1">
                <p className='fontS48'>Genlik Modülasyonu (AM)</p>
                <p className='fontW400 fontS48'>Alıcıda ise bu işlemin tersi yapılır.</p>
                <p className='fontW400 fontS48'>Genlik değişikliği bilgi sinyaline çevrilir.</p>
                <p className='fontW400 fontS48'>Alıcıda yapılan işleme <span className='fontW700'>genlik demodülasyonu</span>, bu
işlemi yapan devreye ise <span className='fontW700'>demodülatör</span> denir.</p>

            </div>
            <BgText text="Genlik Modülasyonu" bottom="-40px" left="-35px" />
        </div>
    );
}





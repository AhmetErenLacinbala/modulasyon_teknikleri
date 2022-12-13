import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../index.css';
import "./../main.css";
import BgText from "../bgText/bgText";



export default function Comp8(props) {
    return (
        <div className="comp">
            <div className="openSansFont fontW700 compContent1 proscons">
            <div>
                <p className='fontS48'>Genlik Modülasyonunun Avantajları</p>
                <p className='fontW400 fontS48'>● Geniş yayın alanı sunması</p>
                <p className='fontW400 fontS48'>● Antensiz kullanım</p>
                <p className='fontW400 fontS48'>● Düşük maliyet</p>
            </div>
            <div>
                <p className='fontS48'>Genlik Modülasyonunun dezavantajları</p>
                <p className='fontW400 fontS48'>● Geniş yayın alanı sunması</p>
            </div>
            </div>
            <BgText text="Genlik Modülasyonu" bottom="-40px" left="-35px" />
        </div>
    );
}





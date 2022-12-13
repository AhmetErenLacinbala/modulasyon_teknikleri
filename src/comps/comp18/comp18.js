import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../index.css';
import "./../main.css";
import BgText from "../bgText/bgText";



export default function Comp18(props) {
    return (
        <div className="comp">
            <div style={{width:"100vw"}} className="openSansFont fontW700 compContent1">
                <p className='fontS48'>Darbe Genlik Modülasyonu Uygulamaları:</p>
                <p className='fontW300 fontS40'>● PAM, Ethernet İletişiminde kullanılır.</p>
                <p className='fontW300 fontS40'>● PAM, birçok mikrodenetleyicide bazı kontrol sinyalleri üretmek için kullanılır.</p>
                <p className='fontW300 fontS40'>● Foto-biyoloji sisteminde de PAM kullanılmaktadır.</p>
          
          
            </div>
            <BgText text="Darbe Genlik" bottom="-40px" left="-70px" />
        </div>
    );
}





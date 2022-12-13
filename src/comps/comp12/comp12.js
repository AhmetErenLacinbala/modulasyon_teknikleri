import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../index.css';
import "./../main.css";
import BgText from "../bgText/bgText";



export default function Comp12(props) {
    return (
        <div className="comp">
            <div className="openSansFont fontW700 compContent2">
                <p className='fontS72'>Faz Modülasyonu (PM)</p>
                <p className='fontW400 fontS40'>Taşıyıcı sinyal sabit genlik, frekansa sahip bir sinüs sinyalidir. Taşıyıcı sinyalin faz açısı bilgi sinyalinin
genliğine göre değişmektedir.</p>
<p className='fontW400 fontS40'>Sinyal kalitesi genlik modülasyonundan iyi, frekans modülasyonundan kötüdür.</p>
<p className='fontW400 fontS40'>Wi-fi, GSM, uydu televizyonu gibi teknolojilerde kullanılır.
Ayrıca çeşitli dijital müzik aletlerinde sinyal oluşturulmakta kullanılmaktadır.</p>
            </div>
            <BgText text="Faz Modülasyonu" bottom="-40px" left="-35px" />
        </div>
    );
}





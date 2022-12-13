import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../index.css';
import "./../main.css";
import BgText from "../bgText/bgText";



export default function Comp13(props) {
    return (
        <div className="comp">
            <div className="openSansFont fontW700 compContent2">
                <p className='fontS72'>Darbe Genlik Modülasyonu (PAM)</p>
                <p className='fontW400 fontS48'><span className='fontW700'>Darbe genlik modülasyonu</span> (Pulse Amplitude Modulation, PAM) telekomünikasyonda bilgi iletimi için kullanılan
modülasyon tiplerinden biridir. Modülasyon frekans paylaşımlı veya zaman paylaşımlı olabilir. Genlik modülasyonu
ve frekans modülasyonu frekans paylaşımlı, her türlü darbe modülasyonu ise zaman paylaşımlıdır.</p>


            </div>
            <BgText text="Darbe Genlik" bottom="-40px" left="-70px" />
        </div>
    );
}





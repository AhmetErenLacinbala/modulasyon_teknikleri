import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../index.css';
import "./../main.css";
import BgText from "../bgText/bgText";



export default function Comp14(props) {
    return (
        <div className="comp">
            <div className="openSansFont fontW700 compContent2">
                <p className='fontS72'>Darbe Genlik Modülasyonu (PAM)</p>
                <p className='fontW400 fontS40'>Darbe modülasyonlarında taşıyıcı sabit genlikli ve sabit süreli (sabit genişlikli) darbelerdir. Bilgi sinyali darbeleri
modüle eder, yani darbelerde değişiklik yapar . Darbe genlik modülasyonunda darbelerin genliği bilgi sinyali
genliğine bağlı olarak değişir.</p>
<p className='fontW400 fontS40'><span className='fontW700'>Düz üst darbe genlik modülasyonu</span> ve <span className='fontW700'>doğal darbe genlik modülasyonu </span> olarak iki tür PAM vardır.</p>
            </div>
            <BgText text="Darbe Genlik" bottom="-40px" left="-70px" />
        </div>
    );
}





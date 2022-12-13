import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../index.css';
import "./../main.css";
import BgText from "./../bgText/bgText";



export default function Comp19(props) {
    return (
        <div className="comp">
            <div className="openSansFont fontW700 compContent3">
                <p className='fontS72'>Darbe Genişlik Modülasyonu (PWM)</p>
                <p className='fontW400 fontS40'>Darbe taşıyıcının süresinin, genişliğinin ve süresinin mesaj sinyallerinin genliği ile orantılı
olarak değiştirildiği bir analog modülasyon tekniğidir. Bu teknikte darbenin büyüklüğü aynı kalsa da darbelerin genişlikleri değişir. PWM'de sinyalin genliğini sabit tutmak için genlik sınırlayıcılar kullanılır. <br/>PWM aynı zamanda Darbe Süresi Modülasyonu (PDM veya PTM) tekniği olarak da tanınır.</p>
            </div>
            <BgText text="Darbe Genişlik" bottom="-40px" left="-35px" />
        </div>
    );
}





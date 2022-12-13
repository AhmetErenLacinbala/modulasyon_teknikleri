import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../index.css';
import "./../main.css";
import BgText from "./../bgText/bgText";



export default function Comp1(props) {
    return (
        <div className="comp">
            <div className="openSansFont fontW700 compContent">
                <p className='fontS72'>Modülasyon nedir?</p>
                <p className='fontW400 fontS48'>İletilmek istenen bilgi sinyalinin frekansı daha yüksek olan taşıyıcı bir sinyale bindirilerek istenilen yere iletilmesine <span className='fontW700'>modülasyon</span> denir.</p>
            </div>
            <BgText text="Modülasyon Nedir?" bottom="-40px" left="-35px" />
        </div>
    );
}





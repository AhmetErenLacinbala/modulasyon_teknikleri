import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../index.css';
import "./../main.css";


export default function Comp27(props) {
    return (
        <div style={{display:"flex"}}>
        
        <div style={{flexDirection:"column", backgroundColor:"rgba(11,11,11,0.5)"}} className="comp compFullSize">
            <p style={{marginTop:"50px", marginLeft:"50px", marginRight:"50px", marginBottom:"10px"}} className="openSansFont fontW700 fontS64">PPM PPM Sinyalinin Dalga Formu Gösterimi</p>
            <div className="openSansFont fontW300">

                <p className=' fontS48'>Yandaki şekilde gördüğümüz gibi, noktalı çizgiden
açıkça görüldüğü üzere PWM darbesinin bitiş
noktası ile PPM darbesinin başlangıcı
çakışmaktadır.</p>
                
            </div>

        </div>
        </div>
    );
}





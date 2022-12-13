import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../index.css';
import "./../main.css";


export default function Comp27(props) {
    return (
        <div style={{display:"flex"}}>
        
        <div style={{flexDirection:"column",textAlign:"center", backgroundColor:"rgba(11,11,11,0.5)"}} className="comp compFullSize">
            <p style={{marginTop:"50px", marginLeft:"50px", marginRight:"50px", marginBottom:"10px"}} className="openSansFont fontW700 fontS64">PPM PPM Sinyalinin Dalga Formu Gösterimi</p>
            <div style={{margin:"auto", display:"flex", height:"60%", width:"75%"}} className="openSansFont fontW300">
            <img style={{marginTop:"-14%",width:"50%", height:"50%", marginRight:"30px"}} src="https://raw.githubusercontent.com/AhmetErenLacinbala/modulasyon_teknikleri/master/src/comps/comp27/ppm.jpg" alt="" />
                <p style={{marginTop:"-3%"}} className=' fontS48'>Yandaki şekilde gördüğümüz gibi, noktalı çizgiden
açıkça görüldüğü üzere PWM darbesinin bitiş
noktası ile PPM darbesinin başlangıcı
çakışmaktadır.</p>
                
            </div>

        </div>
        </div>
    );
}





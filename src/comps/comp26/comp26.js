import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../index.css';
import "./../main.css";


export default function Comp26(props) {
    return (
        <div style={{display:"flex"}}>
        
        <div style={{flexDirection:"column", backgroundColor:"rgba(11,11,11,0.5)"}} className="comp compFullSize">
            <p style={{marginTop:"50px", marginLeft:"50px", marginRight:"50px", marginBottom:"10px"}} className="openSansFont fontW700 fontS64">PPM Sinyali Üretimi İçin Blok Diyagramı</p>
            <div className="openSansFont fontW300 compContent2">

                <p className=' fontS40'>● Burada, önce bir PWM sinyali üretmek için karşılaştırıcıda bir PAM sinyalinin üretildiği ve daha sonra
işlendiği ayrıntılı bir blok diyagram gösterilmektedir.</p>
                <p className=' fontS40'>● Karşılaştırıcının çıktısı, monostable bir multivibratör’e beslenir. Negatif kenar tetiklenir. PWM sinyalinin
arka kenarı ile monostable’ın çıkışı yükselir.</p>
                <p className=' fontS40'>● PWM sinyalinin arka kenarı ile bir PPM sinyali darbesi oluşur.</p>
            </div>
            <img style={{marginTop:"30px", borderRadius:"10px", width:"45%", marginLeft:"auto", marginRight:"auto"}} src="https://raw.githubusercontent.com/AhmetErenLacinbala/modulasyon_teknikleri/master/src/comps/comp26/ppm.jpg" alt="" />
        </div>
        </div>
    );
}





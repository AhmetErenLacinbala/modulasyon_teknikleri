import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../index.css';
import "./../main.css";
import BgText from "../bgText/bgText";



export default function Comp16(props) {
    return (
        <div className="comp">
            <div className="openSansFont fontW700 compContent1">
                <p className='fontS48'>Doğal Darbe Genlik Modülasyonu</p>
                <p className='fontW300 fontS40'>● Taşıyıcıya bilgi sinyali maksimum genliğinden daha yüksek bir
DC öngerilimlenme eklenir.</p>
                <p className='fontW300 fontS40'>● Bu şekilde modüleli sinyal daima pozitif (ya da negatif) kalır.</p>
                <p className='fontW300 fontS40'>● Bilgi sinyali olmadığı zaman bile taşıyıcı yayını vardır.</p>
            </div>
            <div style={{paddingRight:"100px"}}>

            <img style={{borderRadius:"10px"   ,width:"450px", height:"450px", margin:"auto", marginLeft:"50px", marginTop:"25px"}} src="https://raw.githubusercontent.com/AhmetErenLacinbala/modulasyon_teknikleri/master/src/comps/comp16/Mod%C3%BClasyon%20%C3%87e%C5%9Fitleri.jpg" alt="123" />
            </div>
            <BgText text="Darbe Genlik" bottom="-40px" left="-70px" />
        </div>
    );
}





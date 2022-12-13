import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../index.css';
import "./../main.css";
import BgText from "../bgText/bgText";



export default function Comp16(props) {
    return (
        <div className="comp">
            <div className="openSansFont fontW700 compContent3">
                <p className='fontS48'>Düz Üst Darbe Genlik Modülasyonu</p>
                <p className='fontS48'>(Flat Top Darbe Genlik Modülasyonu)</p>
                <p className='fontW300 fontS40'>● Darbelerin genlikleri, mesaj sinyalinin genliğine bağlıdır.</p>
                <p className='fontW300 fontS40'>● DC öngerilimlenmesi yoktur.</p>
                <p className='fontW300 fontS40'>● Modüleli sinyal pozitif ve negatif olabilir.</p>
                <p className='fontW300 fontS40'>● Bilgi sinyali yokken, yayın da yoktur.</p>
            </div>
            <div style={{paddingRight:"100px"}}>

            <img style={{borderRadius:"10px"   ,width:"450px", height:"450px", margin:"auto", marginLeft:"50px", marginTop:"25px"}} src="https://raw.githubusercontent.com/AhmetErenLacinbala/modulasyon_teknikleri/master/src/comps/comp15/pamtop.jpg" alt="123" />
            </div>
            <BgText text="Darbe Genlik" bottom="-40px" left="-70px" />
        </div>
    );
}





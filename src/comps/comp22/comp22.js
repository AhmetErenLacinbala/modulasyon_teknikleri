import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../index.css';
import "./../main.css";
import BgText from "../bgText/bgText";



export default function Comp22(props) {
    return (
        <div style={{width:"100vw"}}  className="comp">
            <div   className="openSansFont fontW700 compContent1">
                
                    <p className='fontS40'>PWM Uygulamaları</p>
                    <div style={{display:"flex",}}>

                    <div className='compContent1'>

                    <p className='fontW400 fontS32'>● Güç Aktarımı ve Elektrik Makineleri</p>
                    <p className='fontW400 fontS32'>● Güç kaybı azdır.</p>
                    <p className='fontW400 fontS32'>● Voltaj Regülatör Devreleri</p>
                    </div>
                    <div style={{paddingLeft:"150px"}} className='compContent1'>

                    <p className='fontW400 fontS32'>● Ses Efektleri ve Yükselticiler</p>
                    <p className='fontW400 fontS32'>● Diğer Elektriksel Alanlar</p>

                    </div>
                    </div>
                
            </div>
            <BgText text="Darbe Genişlik" bottom="-40px" left="-35px" />
        </div>
    );
}





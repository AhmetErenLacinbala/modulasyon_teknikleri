import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../index.css';
import "./../main.css";


export default function Comp31(props) {
    return (
        <div style={{display:"flex"}}>
        
        <div style={{flexDirection:"column", backgroundColor:"rgba(11,11,11,0.5)"}} className="comp compFullSize compContent">
            <p style={{marginTop:"50px", marginLeft:"50px", marginRight:"50px", marginBottom:"10px"}} className="openSansFont fontW700 fontS72">PCM Sinyali Üretimi İçin Blok Diyagramı</p>
            <p style={{marginLeft:"50px"}} className=' fontS40 fontW300 openSansFont'>Temel olarak bir verici, bir iletim yolu ve bir alıcıdan oluşur. Verici, sinyalin örneklenmesini, nicelendirilmesini ve
kodlanmasını gerçekleştirir. İletim yolu, sinyali istenmeyen gürültü etkilerinden kurtaran rejeneratif alıcıları ve alıcıdaki
sinyalin yenilenmesinden sonra kodlanmış sinyalin kodunu çözen alıcı bölümünü içerir.</p>
            
       
        </div>
        </div>
    );
}





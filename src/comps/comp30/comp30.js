import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../index.css';
import "./../main.css";


export default function Comp30(props) {
    return (
        <div style={{display:"flex"}}>
        
        <div style={{flexDirection:"column", backgroundColor:"rgba(11,11,11,0.5)"}} className="comp compFullSize compContent">
            <p style={{marginTop:"50px", marginLeft:"50px", marginRight:"50px", marginBottom:"10px"}} className="openSansFont fontW700 fontS72">Darbe Kodu Modülasyonu (PCM)</p>
            <p style={{marginLeft:"50px"}} className=' fontS40 fontW300 openSansFont'>● Darbe kodu modülasyonunda analog mesaj sinyali önce örneklenir.</p>
            <p style={{marginLeft:"50px"}} className=' fontS40 fontW300 openSansFont'>● Ardından numunenin genliği en yakın niceleme seviyesi kümesine yaklaştırılır.</p>
            <p style={{marginLeft:"50px"}} className=' fontS40 fontW300 openSansFont'>● Bu, zamanın ve genliğin ayrı bir şekilde temsil edilmesini sağlar. Böylece ayrı bir sinyal
üretilir.</p>
            <p style={{marginLeft:"50px"}} className=' fontS40 fontW300 openSansFont'>● Bu ayrık sinyal daha sonra sinyalin iletimi için ikili biçimine dönüştürülür.</p>
            <p style={{marginLeft:"50px"}} className=' fontS40 fontW300 openSansFont'>● PCM tekniğinde sinyalin kodlanmış biçimde iletildiği ve orijinal mesaj sinyaline sahip
olması için alıcıda deşifre edilmesi gerektiği belirtilmelidir.</p>
       
        </div>
        </div>
    );
}





import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../index.css';
import "./../main.css";
import comp3img from "./modulasyon.gif";


export default function Comp3(props) {
    return (
        <div style={{display:"flex"}}>
        
        <div style={{flexDirection:"column", backgroundColor:"rgba(11,11,11,0.5)"}} className="comp compFullSize">
            <p style={{marginTop:"50px", marginLeft:"50px", marginRight:"50px", marginBottom:"10px"}} className="openSansFont fontW400 fontS40">Düşük frekanslı sinyallerin iletimi zordur. Yüksek frekanslı sinyallerinin iletimi ise bir çok açıdan kolaydır. Bu nedenle düşük frekanslı bilgi sinyallerinin iletimi, yüksek frekanslı taşıyıcılara bindirilerek sağlanır.</p>
            <div className="openSansFont fontW300 compContent">
                <p className='fontW700 fontS48'>Modülasyon yapmanın faydaları:</p>
                <p className=' fontS40'>● Anten boyunun küçültmek</p>
                <p className=' fontS40'>● Tüm frekans bölgelerinden yararlanmak</p>
                <p className=' fontS40'>● Bozucu etkileri azaltmak</p>
                <p className=' fontS40'>● İletim ortamına uymak</p>
            </div>
        </div>
        </div>
    );
}





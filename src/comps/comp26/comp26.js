import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../index.css';
import "./../main.css";


export default function Comp25(props) {
    return (
        <div style={{display:"flex"}}>
        
        <div style={{flexDirection:"column", backgroundColor:"rgba(11,11,11,0.5)"}} className="comp compFullSize">
            <p style={{marginTop:"50px", marginLeft:"50px", marginRight:"50px", marginBottom:"10px"}} className="openSansFont fontW700 fontS72">Darbe Konum Modülasyonu (PPM)</p>
            <p style={{marginLeft:"50px"}} className=' fontS40 fontW300 openSansFont'>Örneklenen modüle edici sinyalin genliğine göre darbelerin konumunun değiştirilmesine izin
veren bir modülasyon tekniğidir. <br/>
Darbelerin genliğinin ve genişliğinin sabit tutulduğu ve yalnızca darbelerin konumunun 
değiştiği başka bir PTM türüdür. <br/>
Basitçe söylemek gerekirse, darbe yer değiştirmesi, mesaj sinyalinin örneklenen değeriyle
doğru orantılıdır.</p>
            <div className="openSansFont fontW300 compContent">

                <p className=' fontS32'>● Bilgi, darbe konum modülasyonunda darbelerin değişen konumu ile iletilir.</p>
                <p className=' fontS32'>● Bir PPM dalga formu oluşurken mesaj sinyalinin genliği arttıkça darbe referansa göre
kayar.</p>
                <p className=' fontS32'>● PWM’de darbelerin değişken genişliği nedeniyle iletim gücü de buna göre değişir.
PPM'de durum böyle değildir, çünkü burada darbelerin genişliği sabit kalır ve yalnızca
konumları değişir. Bu nedenle, iletim gücünde değişiklik gözlenmez.</p>
            </div>
        </div>
        </div>
    );
}





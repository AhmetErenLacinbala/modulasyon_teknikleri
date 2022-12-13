import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../index.css';
import "./../main.css";

export default function Comp28(props) {
    return (

        <div className="comp compFullSize" style={{ backgroundColor: "rgba(11,11,11,0.5)" }}>
            <div className="openSansFont fontW700 compContent bigprocon ">
                <div style={{marginRight:"30px"}}>
                    <p className='fontS48'>PPM’in Avantajları</p>
                    <p className='fontS40 fontW400'>● PWM’e benzer şekilde PPM, PAM’a kıyasla
daha iyi gürültü bağışıklığı da gösterir.</p>
<p className='fontS40 fontW400'>● Bunun nedeni, bilgi içeriğinin genlikten ziyade
darbelerin konumunda bulunmasıdır.</p>
                   
                   <p className='fontS40 fontW400'>● Darbelerin genliği ve genişliği sabit kaldıkça
iletim gücü de sabit kalır ve varyasyon
göstermez.</p>
                   
                   <p className='fontS40 fontW400'>● Bozuk PPM'den bir PPM sinyalini düzeltmek
oldukça kolaydır.</p>
                   
                   <p className='fontS40 fontW400'>● PAM ve PWM'den daha az gürültü ve parazit
yapar.</p>
                   
                   
                </div>
                <div>
                    <p className='fontS48'>PPM’in Dezavantajları</p>
                    <p className='fontS40 fontW400'>● Alıcıdaki sinyalin doğru algılanabilmesi için
verici ve alıcının senkronize olması gerekir.</p>
                    <p className='fontS40 fontW400'>● Bant genişliği gereksinimi büyüktür.</p>
                   

                </div>
                <div>

                </div>

            </div>
        </div>
    );
}





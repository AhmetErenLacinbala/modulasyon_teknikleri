import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../index.css';
import "./../main.css";

export default function Comp35(props) {
    return (

        <div className="comp compFullSize" style={{ backgroundColor: "rgba(11,11,11,0.5)" }}>
            <div className="openSansFont fontW700 compContent bigprocon ">
                <div style={{marginRight:"30px"}}>
                    <p className='fontS48'>PCM’in Avantajları</p>
                    <p className='fontS40 fontW400'>● Kanal kaynaklı gürültüye ve bozulmaya
karşı bağışıktır.</p>
<p className='fontS40 fontW400'>● Tekrarlayıcılar iletim kanalı boyunca
kullanılabilir.</p>
                   
                   <p className='fontS40 fontW400'>● Kodlayıcılar güvenli veri iletimine izin
verir.</p>
                   
                   <p className='fontS40 fontW400'>● Yüksek iletim kalitesi sağlar.</p>
                   
                   
                   
                   
                </div>
                <div>
                    <p className='fontS48'>PCM’in Dezavantajları</p>
                    <p className='fontS40 fontW400'>● Darbe kodu modülasyonu iletim bant
genişliğini artırır.</p>
                    <p className='fontS40 fontW400'>● PCM sistemi diğer sistemlerden biraz
daha karmaşıktır.</p>
                   

                </div>
                <div>

                </div>

            </div>
        </div>
    );
}





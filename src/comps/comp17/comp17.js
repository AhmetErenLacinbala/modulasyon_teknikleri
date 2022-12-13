import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../index.css';
import "./../main.css";

export default function Comp17(props) {
    return (

        <div className="comp compFullSize" style={{ backgroundColor: "rgba(11,11,11,0.5)" }}>
            <div className="openSansFont fontW700 compContent bigprocon ">
                <div>
                    <p className='fontS48'>Pam’ın Avantajları</p>
                    <p className='fontS40 fontW400'>● PAM, daha basit.</p>
                    <p className='fontS40 fontW400'>● Daha az karmaşık bir süreçtir.</p>
                    <p className='fontS40 fontW400'>● PAM'ın verici ve alıcılarının tasarımı
                        oldukça basit bir iştir.</p>
                    <p className='fontS40 fontW400'>● Diğer tasarımlardan daha az karmaşıktır.</p>
                    <p className='fontS40 fontW400'>● Darbe Genlik Modülasyonu, diğer darbe
                        modülasyon sinyallerini üretebilir.</p>
                    <p className='fontS40 fontW400'>● Mesaj sinyalini o anda taşıyabilir.</p>
                </div>
                <div>
                    <p className='fontS48'>Pam’ın Dezavantajları</p>
                    <p className='fontS40 fontW400'>● PAM için, iletim için bant genişliği daha
                        büyük olmalıdır.</p>
                    <p className='fontS40 fontW400'>● PAM’da büyük bir gürültü sorunu vardır.</p>
                    <p className='fontS40 fontW400'>● PAM sinyali değişir, böylece iletim için
                        gerekli olan güç artabilir.</p>

                </div>
                <div>

                </div>

            </div>
        </div>
    );
}





import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../index.css';
import "./../main.css";

export default function Comp10(props) {
    return (
        
            <div className="comp compFullSize" style={{backgroundColor:"rgba(11,11,11,0.5)"}}>
            <div className="openSansFont fontW700 compContent">
                <p className='fontS64'>Frekans Modülasyonu Üretim Yöntemleri</p>
                <p className='fontW700 fontS48'>Doğrudan Üretim:</p>
                <p className='fontW400 fontS32'>Taşıyıcı frekansı bir osilatör vasıtasıyla üretilir. Osilatör kondansatör ve varaktörden oluşur.
Varaktörün kapasitesi gerilime bağlı olarak değiştiği için taşıyıcı sinyalin frekansı giriş sinyaline bağlı
olarak değişmektedir.</p>
                <p className='fontW700 fontS48'>Dolaylı Üretim:</p>
                <p className='fontW400 fontS32'>
Bilgi sinyaline öncelikle faz modülasyonu uygulanır. Faz modülasyonu elde edilen çıkış sinyali
istenilen frekansın altında olacağı için daha sonra sinyal frekans çarpıcıdan geçirilir.
Doğrudan üretimde kullanılan devre elemanlarının kapasite değerleri ortama göre değiştiği için dolaylı
üretim tekniği daha avantajlıdır.</p>

            </div>
        </div>
    );
}





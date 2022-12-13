import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../index.css';
import "./../main.css";

export default function Comp24(props) {
    return (

        <div className="comp compFullSize" style={{ backgroundColor: "rgba(11,11,11,0.5)" }}>
            <div className="openSansFont fontW700 compContent">
                <p className='fontS64'>Bunları listelersek:</p>
                <p className='fontW400 fontS32'><span className='fontW700'>Delta:</span> Delta modülasyonlu PWM sinyali, integral alıcı ve limitleyici devre yapıları ile elde edilir.
                    İntegral sonucunun limitlere değmesi "off", diğer durumlarda "on" durumu oluştuğu için kare dalga
                    oluşur.</p>
                <p className='fontW400 fontS32'><span className='fontW700'>Sigma - Delta:</span> Bu modülasyonda ise çıkış sinyali, referans alınan sinyalden çıkartılır.
                    Böylece hata sinyali elde edilmiş olur. Hata sinyalinin integralinin sonucuna göre eğer
                    limite değiyorsa "off", değmiyorsa "on" durumu oluşturularak kare dalga elde edilir.</p>
                                    <p className='fontW400 fontS32'><span className='fontW700'>Boşluk - Vektör:</span> 3 fazlı AC uygulamalar için algoritma kullanılarak kare dalga elde edilir.</p>
                                    <p className='fontW400 fontS32'><span className='fontW700'>Direkt Tork Kontrol (DTC):</span> AC motorlarda kullanılmak üzere geliştirilen bir PWM tekniğidir.
Delta modülasyon tekniğinden üretilmiştir. Motora gönderilen sinyal belirli bir filtreden geçirilir ve
motorun torku ile manyetik akı kontrol altında tutulur.</p>
                                    <p className='fontW400 fontS32'><span className='fontW700'>Zaman Bölücü:</span> Özellikle mikroişlemcilerin PWM çıkışları tarafından kullanılırlar.
Değişken görev döngüsüne sahip devrelerde de kullanılabilirler.</p>


            </div>
        </div>
    );
}





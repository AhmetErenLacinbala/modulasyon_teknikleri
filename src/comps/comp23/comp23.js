import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../index.css';
import "./../main.css";
import BgText from "../bgText/bgText";



export default function Comp23(props) {
    return (
        <div className="comp">
            <div className="openSansFont fontW700 compContent">
                <p className='fontS48'>PWM Tekniğinin Prensipleri</p>
                <p className='fontW400 fontS40'>PWM tekniğinin temeli kare dalga üretmekte yatıyor. Bu kare dalga da genellikle referans olarak
aldığı dalganın ortalaması kadar büyüklüğe sahip oluyor. <br/>Bunun yanı sıra sistemdeki dalganın büyüklüğü ise görev döngüsünün büyüklüğü ile doğru
orantılıdır.<br/>PWM dalgasını elde etmenin birden fazla yöntemi bulunuyor.</p>
            </div>
            <BgText text="Darbe Genişlik" bottom="-40px" left="-35px" />
        </div>
    );
}





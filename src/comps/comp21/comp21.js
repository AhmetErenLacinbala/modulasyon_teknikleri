import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../index.css';
import "./../main.css";
import BgText from "../bgText/bgText";



export default function Comp21(props) {
    return (
        <div className="comp">
            <div className="openSansFont fontW700 compContent1 proscons">
                <div>
                    <p className='fontS40'>PWM’in Avantajları</p>
                    <p className='fontW400 fontS32'>● Anahtarlama kaybı düşük seviyededir.</p>
                    <p className='fontW400 fontS32'>● Güç kaybı azdır.</p>
                    <p className='fontW400 fontS32'>● PWM tekniği dijital kontrol üniteleri ile
                        büyük bir uyum içerisindedir.</p>
                    <p className='fontW400 fontS32'>● Kanal üzerinde çeşitli ayarlamalar ile
                        istenilen sinyaller elde edilebilir.</p>
                </div>
                <div>
                    <p className='fontS40'>PWM’in dezavantajları</p>
                    <p className='fontW400 fontS32'>● Analog sinyalin üretiminde oluşacak olan
gürültü bir dezavantajdır</p>
                    
                </div>
            </div>
            <BgText text="Darbe Genişlik" bottom="-40px" left="-35px" />
        </div>
    );
}





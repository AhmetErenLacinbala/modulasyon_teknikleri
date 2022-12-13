import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../index.css';
import "./../main.css";
import BgText from "../bgText/bgText";



export default function Comp11(props) {
    return (
        <div className="comp">
            <div className="openSansFont fontW700 compContent1 proscons">
            <div>
                <p className='fontS40'>Frekans Modülasyonunun Avantajları</p>
                <p className='fontW400 fontS32'>● Daha düşük interferans ve gürültü</p>
                <p className='fontW400 fontS32'>● Güç tüketimi genlik modülasyonundan
azdır</p>
                <p className='fontW400 fontS32'>● Yakın kanalların koruyucu bant adı
verilen sinyallerle ayrılarak interferans
olmadan aktarımı mümkündür.</p>
            </div>
            <div>
                <p className='fontS40'>Frekans Modülasyonunun dezavantajları</p>
                <p className='fontW400 fontS32'>● Ekipman maliyeti daha yüksektir</p>
                <p className='fontW400 fontS32'>● Alıcı ve verici devreler daha karmaşıktır</p>
                <p className='fontW400 fontS32'>● Daha yüksek sinyal kalitesi için antenler
birbirine yakın olmalıdır.</p>
            </div>
            </div>
            <BgText text="Frekans Modülasyonu" bottom="-40px" left="-35px" />
        </div>
    );
}





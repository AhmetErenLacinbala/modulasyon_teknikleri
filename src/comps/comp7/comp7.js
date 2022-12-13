import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../index.css';
import "./../main.css";


export default function Comp7(props) {
    return (
        <div style={{ display: "flex" }}>

            <div style={{ flexDirection: "column", }} className="comp">
                <p style={{ marginTop: "50px", marginLeft: "50px", marginRight: "50px", marginBottom: "10px" }} className="openSansFont fontW700 fontS48">Genlik Modülasyonunun Özellikleri:</p>
                <p style={{ marginTop: "50px", marginLeft: "50px", marginRight: "50px", marginBottom: "10px" }} className="openSansFont fontW400 fontS40">● Modülasyon oluşurken taşıyıcının genliği
                    değişirken, frekansı sabit kalmaktadır.</p>
                <p style={{ marginTop: "50px", marginLeft: "50px", marginRight: "50px", marginBottom: "10px" }} className="openSansFont fontW400 fontS40">● En önemli ve en belirgin özelliği, sinyalleri en
                    uzak mesafelerden dinlenmesini sağlamaktadır.
                    Fakat bu özellik ses kalitesinin diğer
                    modülasyon çeşitlerine göre daha düşük
                    olmasına neden olmaktadır.</p>

            </div>
        </div>
    );
}





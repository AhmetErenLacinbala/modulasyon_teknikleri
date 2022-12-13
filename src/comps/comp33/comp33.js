import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../index.css';
import "./../main.css";


export default function Comp33(props) {
    return (
        <div style={{ display: "flex" }}>
            <img style={{ width: "20%", position: "fixed", bottom: "25px", right: "25px" }} src="https://raw.githubusercontent.com/AhmetErenLacinbala/modulasyon_teknikleri/master/src/comps/comp32/pcm.jpg" alt="" />
            <div style={{ flexDirection: "column", backgroundColor: "rgba(11,11,11,0.5)" }} className="comp compFullSize compContent">
                <div className='compContent' style={{ width: "80%", }}>

                    <p style={{ marginTop: "50px", marginLeft: "50px", marginRight: "50px", marginBottom: "10px" }} className="openSansFont fontW700 fontS72">PCM Verici</p>
                    <p style={{ marginLeft: "50px" }} className=' fontS32 fontW300 openSansFont'><span className='fontW700'> Kodlayıcı: </span> Bir kodlayıcı, nicelenmiş sinyalin ikili kodlara dönüştürülmesini gerçekleştirir.
Bu birim, modüle edilmiş çıkış görevi gören bir ikili darbe dizisi olan dijital olarak kodlanmış bir sinyal
üretir.</p>
                    <p style={{ marginLeft: "50px" }} className=' fontS32 fontW300 openSansFont'><span className='fontW700'> Niceleyici:</span> Bir niceleyici, her örneği en yakın ayrık seviyeye yuvarlayan bir birimdir.
Örnekleyici sürekli bir aralık sinyali ve dolayısıyla hala bir analog sinyal sağlar.
Niceleyici, her bir örneğin yaklaşımını gerçekleştirir ve böylece ona belirli bir ayrık seviye atar.</p>
   
                    
                </div>



            </div>
        </div>
    );
}





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

                    <p style={{ marginTop: "50px", marginLeft: "50px", marginRight: "50px", marginBottom: "10px" }} className="openSansFont fontW700 fontS72">PCM Alıcı</p>
                    <p style={{ marginLeft: "50px" }} className=' fontS32 fontW300 openSansFont'><span className='fontW700'> Rejeneratör:</span> Alıcı ucuna, tam bir PCM ileten sinyale sahip olacak şekilde rejeneratif bir tekrarlayıcı yerleştirilir.
                        Burada da rejeneratör,
                        iletim yolunda kullanıldığında olduğu gibi benzer şekilde çalışır. Kanal kaynaklı gürültüyü ortadan kaldırır ve darbeyi
                        yeniden şekillendirir.</p>
                    <p style={{ marginLeft: "50px" }} className=' fontS32 fontW300 openSansFont'><span className='fontW700'> DAC ve Örnekleyici:</span> Dijitalden analoga dönüştürücü, örnekleyiciyi kullanarak dijital sinyali tekrar analog formuna
                        dönüştürür.
                        Gerçek mesaj sinyali analog olduğundan, alıcı ucunda onu tekrar orijinal haline dönüştürme ihtiyacı vardır.</p>
                        <p style={{ marginLeft: "50px" }} className=' fontS32 fontW300 openSansFont'><span className='fontW700'> LPF:</span> Örnekleyici analog sinyal üretir, ancak bu orijinal mesaj sinyali değildir. Böylece, örnekleyicinin çıkışı,
fm kesme frekansına sahip LPF’yi besler. Bu bazen orijinal mesaj sinyalini üreten
yeniden yapılandırma filtresi olarak adlandırılır.</p>
 <p style={{ marginLeft: "50px", lineHeight:"20px" }} className=' fontS32 fontW300 openSansFont'> Vericide yapılan işlem, orijinal analog mesaj sinyalini üretmek için alıcıda
tersine çevrilir. Yandaki şekil, alıcıdaki gerçek analog mesaj sinyalinin
yeniden yapılandırılmasını göstermektedir.</p>


                </div>



            </div>
        </div>
    );
}





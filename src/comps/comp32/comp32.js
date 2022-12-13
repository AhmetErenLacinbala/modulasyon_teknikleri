import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../index.css';
import "./../main.css";


export default function Comp32(props) {
    return (
        <div style={{display:"flex"}}>
        
        <div style={{flexDirection:"column", backgroundColor:"rgba(11,11,11,0.5)"}} className="comp compFullSize compContent">
            <p style={{marginTop:"50px", marginLeft:"50px", marginRight:"50px", marginBottom:"10px"}} className="openSansFont fontW700 fontS72">PCM Verici</p>
            <p style={{marginLeft:"50px"}} className=' fontS32 fontW300 openSansFont'><span className='fontW700'> LPF:</span> Burada sürekli zaman formundaki mesaj sinyalinin bir alçak geçiren filtreden (LPF) geçmesine izin verilir. Kesme frekansı fm
olan bu LPF, sinyalin yüksek frekanslı bileşenlerini ortadan kaldırır ve yalnızca fm'in altında kalan frekans bileşenlerini geçer.</p>
<p style={{marginLeft:"50px"}} className=' fontS32 fontW300 openSansFont'><span className='fontW700'> Örnekleyici:</span> LPF'nin çıkışı daha sonra analog giriş sinyalinin düzenli aralıklarla örneklendiği bir örnekleyiciye beslenir.
Sinyalin örneklenmesi fs hızında yapılır. <br/>
Bu örnekleme frekansı şu şekilde ifade edilen örnekleme teoremini takip etmesi gerekir:</p>
<p style={{textAlign:"center"}} className="openSansFont fontW700 fontS72">fs ≥ 2fm</p>
<p></p>
<p style={{marginLeft:"50px"}} className=' fontS32 fontW300 openSansFont'>Örnekleyicinin çıkışı, bir PAM sinyalinden başka bir şey olmayan nTs olarak gösterilen ayrık zamanlı
sürekli genlik sinyali olan bir sinyaldir.</p>
           
       
        </div>
        </div>
    );
}





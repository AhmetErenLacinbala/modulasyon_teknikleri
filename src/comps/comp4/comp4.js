import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../index.css';
import "./../main.css";
import comp4img from "./comp4.png"

export default function Comp4(props) {
    return (
        
            <div className="comp compFullSize" style={{backgroundColor:"rgba(11,11,11,0.5)"}}>
            <div className="openSansFont fontW700 compContent">
                <p className='fontS72'>Modülasyon Çeşitleri</p>
                <p className='fontW400 fontS48'>Modülasyon temel olarak analog modülasyon ve sayısal modülasyon olarak ikiye ayrılır. Analog ve
sayısal modülasyonun da kendi içinde çeşitli türleri vardır.</p>
<div style={{width:"100%", display:"flex", justifyContent:"center", margin:"20px auto auto auto"}}>

<img style={{borderRadius:"10px", border:"2px, solid, #0B0B0B", width: "42vw"}} src="https://raw.githubusercontent.com/AhmetErenLacinbala/modulasyon_teknikleri/master/src/comps/comp4/comp4.png" alt="213" />
</div>
            </div>
        </div>
    );
}





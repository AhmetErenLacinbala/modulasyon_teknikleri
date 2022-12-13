import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../index.css';
import "./../main.css";

export default function Comp20(props) {
    return (

        <div className="comp compFullSize" style={{ backgroundColor: "rgba(11,11,11,0.5)" }}>
            <div style={{display:"flex", justifyContent:"space-between"}} className="openSansFont fontW700 compContent bigprocon ">
                    <div ><img style={{width:"95%"}} src="https://raw.githubusercontent.com/AhmetErenLacinbala/modulasyon_teknikleri/master/src/comps/comp20/pwm2.png" alt="" /></div>
                <div><img style={{marginTop:"125px"}}  src="https://raw.githubusercontent.com/AhmetErenLacinbala/modulasyon_teknikleri/master/src/comps/comp20/pwm1.jpg" alt="" /></div>
        

            </div>
        </div>
    );
}





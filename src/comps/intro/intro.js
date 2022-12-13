import React from 'react';
import ReactDOM from 'react-dom/client';
import '../../index.css';
import "./../main.css";
import Bg from "./../p5/bg";

import gazi from "./gazi.png"

export default function Intro(){
    return(
    <div className='openSansFont center intro' style={{textAlign:"center"}}>

    <p style={{marginTop:"-50px",marginBottom:"50px"}} className="fontW700 fontS72">Modülasyon Çeşitleri</p>
    <div style={{display:"flex", justifyContent:"space-between", width:"800px"}}>
        
        <div><img src={gazi} alt="none"/></div>
        <div style={{marginTop:"75px"}}>
            <p className="fontW700 fontS48"> Gazi Üniversitesi</p>
            <p className="fontW700 fontS40"> Teknoloji Fakültesi</p>
            <p className="fontW300 fontS32"> Elektrik Elektronik Mühendisliği</p>
        </div>
    </div>
        
        <div>
            <p className="fontW300 fontS32"> Ahmet Talha Arslan</p>
            <p className="fontW300 fontS32"> Ahmet Eren Laçinbala</p>
            <p className="fontW300 fontS32"> Aziz Kartal</p>
        </div>

    </div>
    );
}





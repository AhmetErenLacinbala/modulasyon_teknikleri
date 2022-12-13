import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom/client';
import '../index.css';
import "./main.css";
import Intro from "./intro/intro";
import Bg from './p5/bg';
import Comp1 from './comp1/comp1';
import Comp2 from './comp2/comp2';
import Comp3 from './comp3/comp3';
import Modulation from "./p5/modulation";
import Comp4 from './comp4/comp4';
import Comp5 from './comp5/comp5';
import Comp6 from './comp6/comp6';
import Comp7 from './comp7/comp7';
import Comp8 from './comp8/comp8';
import Comp9 from './comp9/comp9';
import Comp10 from './comp10/comp10';
import Comp11 from './comp11/comp11';
import Comp12 from './comp12/comp12';
import Comp13 from './comp13/comp13';
import Comp14 from './comp14/comp14';
import Comp15 from './comp15/comp15';
import Comp16 from './comp16/comp16';
import Comp17 from './comp17/comp17';
import Comp18 from './comp18/comp18';
import Comp19 from './comp19/comp19';
import Comp20 from './comp20/comp20';
import Comp21 from './comp21/comp21';
import Comp22 from './comp22/comp22';
import Comp23 from './comp23/comp23';
import Comp24 from './comp24/comp24';
import Comp25 from './comp25/comp25';
import Comp26 from './comp26/comp26';
import Comp27 from './comp27/comp27';
import Comp28 from './comp28/comp28';
import Comp29 from './comp29/comp29';
import Comp30 from './comp30/comp30';

export default function Main() {
    const [currentPage, setPage] = useState(0);
    const [phaseShiftSpeed, setPhaseShiftSpeed] = useState(1.5);
    const [frequency, setFrequency] = useState(1);
    const [mFrequency, setmFrequency] = useState(9);
    const [mod, setMod] = useState({
        sin: true,
        am: false,
        fm: false,
        pm: false,
        pam: false,
        pwm: false,
        ppm: false
    })

    useEffect(() => {
        if (currentPage >= 5 && currentPage <= 8) {
            setMod({
                sin: true,
                am: true,
                fm: false,
                pm: false,
                pam: false,
                pwm: false,
                ppm: false
            })
        }
        else if (currentPage >= 9 && currentPage <= 11) {
            setMod({
                sin: true,
                am: false,
                fm: true,
                pm: false,
                pam: false,
                pwm: false,
                ppm: false
            })
        }
        else if (currentPage === 12) {
            setMod({
                sin: true,
                am: false,
                fm: false,
                pm: true,
                pam: false,
                pwm: false,
                ppm: false
            })
        }
        else if (currentPage >= 13 && currentPage <=18) {
            setMod({
                sin: true,
                am: false,
                fm: false,
                pm: false,
                pam: true,
                pwm: false,
                ppm: false
            })
        }
                else if (currentPage >= 19 && currentPage <=23) {
            setMod({
                sin: true,
                am: false,
                fm: false,
                pm: false,
                pam: false,
                pwm: true,
                ppm: false
            })
        }
    }, [currentPage])
    useEffect(() => {
        function handleKeyDown(event) {
            if (event.key === "ArrowRight") setPage(currentPage + 1);
            else if ((event.key === "ArrowLeft") && (currentPage !== 0)) setPage(currentPage - 1)
        };
        console.log(currentPage);
        document.addEventListener("keydown", handleKeyDown);
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }); //setTimeout(()=>{return "displayNone"},1500)
    return (
        <div>
            <div className={currentPage === 0 ? "opacity1" : "filterBlur"} style={{ position: "fixed", zIndex: "-5", }}>
                <Bg />
            </div>
            <div className={currentPage === 0 ? "opacity1" : "opacity0"}>

                <Intro />
            </div>
            <div className='halfComps'>
                <div style={{ zIndex: "3" }} className={currentPage === 1 ? "opacity1" : "opacity0"} >
                    <Comp1 />
                </div>

                <div style={{ zIndex: "4" }} className={currentPage === 2 ? "opacity1" : "opacity0"} >
                    <Comp2 />
                </div>
            </div>
            <div style={{ position: "relative", top: "500px", zIndex: "300" }} className={((currentPage >= 1) && (currentPage <= 2)) || (currentPage >= 5 && currentPage <= 9) || (currentPage >= 11 && currentPage <= 16)|| (currentPage>=18 && currentPage<=19) ||(currentPage>=21&&currentPage<=23) ? "opacity1" : "opacity0"}>

                <Modulation currentPage={currentPage} phaseShiftSpeed={phaseShiftSpeed} setPhaseShiftSpeed={setPhaseShiftSpeed} frequency={frequency} setFrequency={setFrequency} mFrequency={mFrequency} setmFrequency={setmFrequency} mod={mod} setMod={setMod} />


            </div>
            <div style={{ position: "absolute", top: "0", zIndex: "5" }} className={currentPage === 3 ? "opacity1" : "opacity0"} >
                <Comp3 />
            </div>
            <div style={{ position: "absolute", top: "0", zIndex: "6" }} className={currentPage === 4 ? "opacity1" : "opacity0"} >
                <Comp4 />
            </div>
            <div style={{ position: "absolute", top: "0", zIndex: "7" }} className={currentPage === 5 ? "opacity1" : "opacity0"} >
                <Comp5 />

            </div>
            <div style={{ position: "absolute", top: "0", zIndex: "7" }} className={currentPage === 6 ? "opacity1" : "opacity0"} >
                <Comp6 />

            </div>
            <div style={{ position: "absolute", top: "0", zIndex: "7" }} className={currentPage === 7 ? "opacity1" : "opacity0"} >
                <Comp7 />

            </div>
            <div style={{ position: "absolute", top: "0", zIndex: "7" }} className={currentPage === 8 ? "opacity1" : "opacity0"} >
                <Comp8 />

            </div>
            <div style={{ position: "absolute", top: "0", zIndex: "7" }} className={currentPage === 9 ? "opacity1" : "opacity0"} >
                <Comp9 />

            </div>
            <div style={{ position: "absolute", top: "0", zIndex: "7" }} className={currentPage === 10 ? "opacity1" : "opacity0"} >
                <Comp10 />

            </div>
            <div style={{ position: "absolute", top: "0", zIndex: "7" }} className={currentPage === 11 ? "opacity1" : "opacity0"} >
                <Comp11 />

            </div>
            <div style={{ position: "absolute", top: "0", zIndex: "7" }} className={currentPage === 12 ? "opacity1" : "opacity0"} >
                <Comp12 />

            </div>
                        <div style={{ position: "absolute", top: "0", zIndex: "7" }} className={currentPage === 13 ? "opacity1" : "opacity0"} >
                <Comp13 />

            </div>
              <div style={{ position: "absolute", top: "0", zIndex: "7" }} className={currentPage === 14 ? "opacity1" : "opacity0"} >
                <Comp14 />

            </div>
                       <div style={{ position: "absolute", top: "0", zIndex: "7" }} className={currentPage === 15 ? "opacity1" : "opacity0"} >
                <Comp15 />

            </div>
             <div style={{ position: "absolute", top: "0", zIndex: "7" }} className={currentPage === 16 ? "opacity1" : "opacity0"} >
                <Comp16 />

            </div>
            <div style={{ position: "absolute", top: "0", zIndex: "7" }} className={currentPage === 17 ? "opacity1" : "opacity0"} >
                <Comp17/>

            </div>

 <div style={{ position: "absolute", top: "0", zIndex: "7" }} className={currentPage === 18 ? "opacity1" : "opacity0"} >
                <Comp18/>

            </div>
            <div style={{ position: "absolute", top: "0", zIndex: "7" }} className={currentPage === 19 ? "opacity1" : "opacity0"} >
                <Comp19/>

            </div>
                        <div style={{ position: "absolute", top: "0", zIndex: "7" }} className={currentPage === 20 ? "opacity1" : "opacity0"} >
                <Comp20/>

            </div>
                   <div style={{ position: "absolute", top: "0", zIndex: "7" }} className={currentPage === 21 ? "opacity1" : "opacity0"} >
                <Comp21/>

            </div>
              <div style={{ position: "absolute", top: "0", zIndex: "7" }} className={currentPage === 22 ? "opacity1" : "opacity0"} >
                <Comp22/>

            </div>
             <div style={{ position: "absolute", top: "0", zIndex: "7" }} className={currentPage === 23 ? "opacity1" : "opacity0"} >
                <Comp23/>

            </div>
 <div style={{ position: "absolute", top: "0", zIndex: "7" }} className={currentPage === 24 ? "opacity1" : "opacity0"} >
                <Comp24/>

            </div>

<div style={{ position: "absolute", top: "0", zIndex: "7" }} className={currentPage === 25 ? "opacity1" : "opacity0"} >
                <Comp25/>

            </div>
            <div style={{ position: "absolute", top: "0", zIndex: "7" }} className={currentPage === 26 ? "opacity1" : "opacity0"} >
                <Comp26/>

            </div>
              <div style={{ position: "absolute", top: "0", zIndex: "7" }} className={currentPage === 27 ? "opacity1" : "opacity0"} >
                <Comp27/>

            </div>
             <div style={{ position: "absolute", top: "0", zIndex: "7" }} className={currentPage === 28 ? "opacity1" : "opacity0"} >
                <Comp28/>

            </div>
             <div style={{ position: "absolute", top: "0", zIndex: "7" }} className={currentPage === 29 ? "opacity1" : "opacity0"} >
                <Comp29/>
            </div>
             <div style={{ position: "absolute", top: "0", zIndex: "7" }} className={currentPage === 30 ? "opacity1" : "opacity0"} >
                <Comp30/>
            </div>



        </div>
    );
}





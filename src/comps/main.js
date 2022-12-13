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
            <div style={{ position: "relative", top: "500px", zIndex: "300" }} className={((currentPage >= 1) && (currentPage <= 2)) || (currentPage >= 5 && currentPage <= 9) || (currentPage >= 11) ? "opacity1" : "opacity0"}>

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


        </div>
    );
}





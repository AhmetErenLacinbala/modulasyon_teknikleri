import React, { useRef, useEffect, useState } from 'react';
import p5 from 'p5';
import Sketch from "react-p5";




let canvas = {
    x: 1500, y: 500
}
let r = 0.5;


let phaseShift = 0.1;
let sawtooth = 0;
let frameRate = 60;

function P5Main({ phaseShiftSpeed, frequency, mFrequency, mod }) {

    function AM(p5, angle, mFrequency) {
        return (((1 + p5.sin(angle + p5.TWO_PI / 2)) * p5.sin(angle * mFrequency))) / 2.1;
    }

    function FM(p5, angle, mFrequency) {
        return (p5.cos(angle * mFrequency + 9 * p5.sin(angle + (p5.TWO_PI / 4))))
    }

    function PM(p5, angle, mFrequency) {
        return (p5.sin(angle * mFrequency + 9 * p5.sin(angle + p5.TWO_PI / 2)))
    }



    const setup = (p5, canvasParentRef) => {
        // use parent to render the canvas in this ref
        // (without that p5 will render the canvas outside of your component)
        p5.createCanvas(canvas.x, canvas.y).parent(canvasParentRef);
        p5.frameRate(frameRate);
    };

    const draw = (p5) => {
        p5.background(0);
        p5.translate(canvas.x / 2, canvas.y / 2);
        let total = p5.floor(canvas.y / (r * 2));
        p5.noFill();
        p5.stroke(255, 0, 0);
        p5.strokeWeight(4);

        p5.beginShape(); //AM
        if (mod.am) {
            for (let i = 0; i < total + 1; i++) {
                let angle = p5.map(i + phaseShift, 0, total, 0, frequency * p5.TWO_PI);
                let y = p5.map(AM(p5, angle, mFrequency), -1, 1, -canvas.y / 2, canvas.y / 2);
                let x = p5.map(i, 0, total + 1, -canvas.x / 2, canvas.x / 2);
                p5.vertex(x, y);
            }
        }
        p5.endShape();



        p5.beginShape(); //FM
        if (mod.fm) {
            for (let i = 0; i < total + 1; i++) {
                let angle = p5.map(i + phaseShift, 0, total, 0, frequency * p5.TWO_PI);
                let y = p5.map(FM(p5, angle, mFrequency), -1, 1, -canvas.y / 2, canvas.y / 2);
                let x = p5.map(i, 0, total + 1, -canvas.x / 2, canvas.x / 2);
                p5.vertex(x, y);
            }
        }
        p5.endShape();

        p5.beginShape(); //PM
        if (mod.pm) {
            for (let i = 0; i < total + 1; i++) {
                let angle = p5.map(i + phaseShift, 0, total, 0, frequency * p5.TWO_PI);
                let y = p5.map(PM(p5, angle, mFrequency), -1, 1, -canvas.y / 2, canvas.y / 2);
                let x = p5.map(i, 0, total + 1, -canvas.x / 2, canvas.x / 2);
                p5.vertex(x, y);
            }
        }
        p5.endShape();


        p5.beginShape(); //PAM top
        if (mod.pam) {
            let flag = true;
            for (let i = 0; i < total + 1; i++) {
                let angle = p5.map(i + phaseShift, 0, total, 0, frequency * p5.TWO_PI);
                let y = p5.map(p5.sin(angle), -1, 1, -canvas.y / 2, canvas.y / 2);
                if (flag === false) y = 0;
                if (i % (30 - mFrequency) === 0) flag = !flag;
                let x = p5.map(i, 0, total + 1, -canvas.x / 2, canvas.x / 2);
                p5.vertex(x, y);
            }
        }
        p5.endShape();

        p5.beginShape(); //PWM
        if (mod.pwm) {
            let sawTooth = 0;
            for (let i = 0; i < total + 1; i++) {
                let angle = p5.map(i + phaseShift, 0, total, 0, frequency * p5.TWO_PI);
                
                sawTooth += mFrequency/10;
                if (sawTooth>30) sawTooth=0;
                let y;
                if( 1 + p5.sin(angle)> sawTooth/15)  y = canvas.y/2; //p5.map(p5.sin(angle), -1, 1, -canvas.y / 2, canvas.y / 2);
                else y = 0;
                console.log(p5.sin(angle), sawTooth/30);
                let x = p5.map(i, 0, total + 1, -canvas.x / 2, canvas.x / 2);
                p5.vertex(x, y);
            }
        }
        p5.endShape();


        p5.beginShape(); //SIN
        if (mod.sin) {
            for (let i = 0; i < total + 1; i++) {
                let angle = p5.map(i + phaseShift, 0, total, 0, frequency * p5.TWO_PI);
                let y = p5.map(p5.sin(angle), -1, 1, -canvas.y / 2, canvas.y / 2);
                let x = p5.map(i, 0, total + 1, -canvas.x / 2, canvas.x / 2);
                p5.vertex(x, y);
            }
        }
        p5.endShape();
        phaseShift += phaseShiftSpeed / 10;
        // NOTE: Do not use setState in the draw function or in functions that are executed
        // in the draw function...
        // please use normal variables or class properties for these purposes
        
    };

    return <Sketch setup={setup} draw={draw} />;
};


export default function App(props) {
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
        console.log(mod);
    })
    return (
        <div>


            <P5Main phaseShiftSpeed={phaseShiftSpeed} frequency={frequency} mod={mod} mFrequency={mFrequency} />
            <div>
                s
                <input onChange={(e) => setPhaseShiftSpeed(e.target.value)} type="range" min="1" max="100" value={phaseShiftSpeed} className='slider'></input>
                f
                <input onChange={(e) => setFrequency(e.target.value)} step={0.1} type="range" min="1" max="10" value={frequency} className='slider'></input>
                mf
                <input onChange={(e) => setmFrequency(e.target.value)} step={1} type="range" min="5" max="30" value={mFrequency} className='slider'></input>
            </div>
            <div>

                <label>
                    <input type="checkbox" onChange={(e) => setMod({ ...mod, sin: !mod.sin })} checked={mod.sin}
                    />
                    sinüs
                </label>
                <label>
                    <input type="checkbox" onChange={(e) => setMod({ ...mod, am: !mod.am })} checked={mod.am}
                    />
                    AM
                </label>
                <label>
                    <input type="checkbox" onChange={(e) => setMod({ ...mod, fm: !mod.fm })} checked={mod.fm}
                    />
                    FM
                </label>
                <label>
                    <input type="checkbox" onChange={(e) => setMod({ ...mod, pm: !mod.pm })} checked={mod.pm}
                    />
                    pm
                </label>
                <label>
                    <input type="checkbox" onChange={(e) => setMod({ ...mod, pam: !mod.pam })} checked={mod.pam}
                    />
                    pam
                </label>
                <label>
                    <input type="checkbox" onChange={(e) => setMod({ ...mod, pwm: !mod.pwm })} checked={mod.pwm}
                    />
                    pwm
                </label>

            </div>
        </div>
    )
}
//<svg width={canvas.x} height={canvas.y}><SineWave/></svg>
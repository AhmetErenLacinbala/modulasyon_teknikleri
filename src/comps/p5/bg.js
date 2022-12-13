import React, { useRef, useEffect, useState } from 'react';
import p5 from 'p5';
import Sketch from "react-p5";
import useWindowDimensions  from "./../../hooks/useWindowDimensions"


export default function Bg(props) {

    const { height, width } = useWindowDimensions();


    

    const setup = (p5, canvasParentRef) => {
        // use parent to render the canvas in this ref
        // (without that p5 will render the canvas outside of your component)
        p5.createCanvas(width, height).parent(canvasParentRef);
        p5.frameRate(60);

        p5.background(0);
        p5.angleMode(p5.DEGREES);
        p5.rectMode(p5.CENTER);

    };

    const draw = (p5) => {
        p5.background(0);
        p5.noFill();

        p5.translate(width/2, height/2);
                    p5.stroke( 45, 40, 85);
        for(let i = 0; i<200; i++){

            p5.push();
            p5.rotate(p5.sin(p5.frameCount + i)*150);
            
            p5.rect(0,0,Math.random()*20+1400-i*3,700-i*3,200-i);
            p5.pop();
        }

            for(let i = 0; i<10; i++){
            p5.push();
            p5.rotate(p5.sin(p5.frameCount + i)*150);
            
            p5.rect(0,0,2000-i*50,1000-i*50,200-i);
            p5.pop();
        }


    };

    return <Sketch setup={setup} draw={draw} />;
};

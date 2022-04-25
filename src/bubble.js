import React, { useEffect, useRef } from 'react';
import Two from 'two.js';

export default function Bubble(props) {
    const domElement = useRef(null);

    useEffect(() => {
        let two = new Two({
            type: Two.Types.svg,
            fullscreen: true,
        }).appendTo(domElement.current);

        two.renderer.domElement.style.background = "#FCF3CF";
        

        let cx = two.width / 2, cy = two.height / 2;
        let startRadius = 50;
        let isOpened = false;
        // let mouse = new Two.Vector(cx, cy);

        let circle = new Two.Circle(cx, cy, startRadius);
    
        circle.fill = "#F5B041";
        circle.noStroke();
        two.add(circle);
        
        
        window.addEventListener("click", () => {
            console.log("clicked!");
            isOpened = !isOpened;
        })
        
        two.bind("update", () => {
            circle.rotation += 0.01;
            circle.skewX = Math.sin(circle.rotation) / 10;
            circle.skewY = Math.cos(circle.rotation) / 15;
            if (isOpened && (circle.radius < two.width || circle.radius <= two.height)) {
                circle.radius *= 1.1;
            } else if (!isOpened) {
                circle.radius = startRadius;
            }
        });

        two.play();
        
    }, []);

    return (
        <div ref={domElement}>
        </div>
    );
}
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles/home.css";
import "./styles/explore.css";
import rainbowbar from "./img/rainbowbar.svg";

const hobbies = require("./hobbies.json")["hobbies"];


export default function Explore() {
    return (
        <div className="parent d-flex flex-column">
            <div className="d-flex justify-content-center pt-2 pb-4">
                <a href="/" className="pf-link px-2 back">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-caret-left" viewBox="0 0 16 16">
                        <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z" />
                    </svg>
                </a>
                explore
                <a href="/explore" className="pf-link px-2 back">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" className="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                        <path fillRule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z" />
                        <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" />
                    </svg>
                </a>
            </div>
            <RandomHobbyBlocks quantity="20" max={hobbies.length.toString()} />
        </div >
    );
}

function HobbyBlock(props) {
    return (
        <div className="container-inline flex-column align-items-center border wrap-text rounded p-4 hobbyblock">
            <div id="hobbyname" className="text-center">{props.name}</div>
            <div className="rainbow d-flex justify-content-center flex-wrap">
                <img src={rainbowbar} alt="rainbowbar" />
            </div>
            <div className="rainbow-point d-flex" style={{ marginLeft: (18 + parseInt(props.interest) / 100.0 * 56) + "%" }}>

                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-caret-up" viewBox="0 0 16 16">
                    <path d="M3.204 11h9.592L8 5.519 3.204 11zm-.753-.659 4.796-5.48a1 1 0 0 1 1.506 0l4.796 5.48c.566.647.106 1.659-.753 1.659H3.204a1 1 0 0 1-.753-1.659z" />
                </svg>
                {props.interest}
            </div>

            <a className="d-flex justify-content-center" href={props.wiki} target="_blank" rel="noopener noreferrer">...wiki!</a>
        </div>
    );
}



function RandomHobbyBlocks(props) {
    const idxs = new Set();
    while (idxs.size < parseInt(props.quantity)) {
        idxs.add(Math.floor(Math.random() * parseInt(props.max)) + 1);
    }

    const blocks = [];
    for (let i of idxs) {
        try {
            blocks.push(HobbyBlock({
                key: hobbies[i]["title"] || "Huh? What's this?",
                name: hobbies[i]["title"] || "Huh? What's this?",
                interest: hobbies[i]["interest"],
                wiki: hobbies[i]["wiki"],
            }));
        } catch (e) {
            continue;
        }
    }
    return (
        <div className="d-flex flex-wrap justify-content-center">
            {blocks}
        </div>
    );
}

import React from "react";

import "./styles/home.css";

import "bootstrap/dist/css/bootstrap.min.css";

export function Home() {
    return (
        <div id="home" className="d-flex flex-column">
            <div className="d-flex justify-content-center">
                passionfruit
            </div>
            <div className="d-flex justify-content-around">
                <a href="/explore" className="pf-link">explore</a>
                <a href="/about" className="pf-link">about</a>
            </div>

        </div>
    );
}


export function About() {
    return (
        <div>about</div>
    );
}


export function NotFoundPage() {
    return (
        <div>NotFoundPage</div>
    );
}
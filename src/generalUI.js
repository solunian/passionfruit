import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "./styles/home.css";


export function Home() {
    return (
        <div id="home" className="d-flex flex-column">
            <div className="d-flex justify-content-center">
                passionfruit
            </div>
            <div className="d-flex justify-content-center">
                <a href="/explore" className="pf-link">explore</a>
                <a href="/bubble" className="pf-link mx-5">bubble</a>
                <a href="/about" className="pf-link">about</a>
            </div>
        </div>
    );
}


export function About() {
    return (
        <div className="parent d-flex flex-column">
            <div className="d-flex justify-content-center pt-2 pb-4">
                <a href="/" className="pf-link px-2 back">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-caret-left" viewBox="0 0 16 16">
                        <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z" />
                    </svg>
                </a>
                about
                <a href="/about" className="pf-link px-2 back">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-arrow-counterclockwise" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z" />
                        <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z" />
                    </svg>
                </a>
            </div>
        </div>
    );
}


export function NotFoundPage() {
    return (
        <div className="parent d-flex flex-column">
            <div className="d-flex justify-content-center pt-2 pb-4">
                <a href="/" className="pf-link px-2 back">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" class="bi bi-caret-left" viewBox="0 0 16 16">
                        <path d="M10 12.796V3.204L4.519 8 10 12.796zm-.659.753-5.48-4.796a1 1 0 0 1 0-1.506l5.48-4.796A1 1 0 0 1 11 3.204v9.592a1 1 0 0 1-1.659.753z" />
                    </svg>
                </a>
                404 page not found :(
            </div>
        </div>
    );
}
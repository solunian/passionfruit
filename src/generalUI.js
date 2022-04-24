import React from "react";

import "./styles/home.css";

export function Home() {
    return (
        <div id="home">
            <a href="/explore" className="link">explore</a>
            <div>passionfruit</div>
            <a href="/about" className="link">about</a>
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
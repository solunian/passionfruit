import React from "react";

export function Home() {
    return (
        <div>
            Home
            <a href="/explore">Explore</a>
            <a href="/about">About</a>
        </div>
    );
}


export function About() {
    return (
        <div>About</div>
    );
}


export function NotFoundPage() {
    return (
      <div>NotFoundPage</div>
    );
  }
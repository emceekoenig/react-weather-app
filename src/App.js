import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather />

        <footer className="text-center">
          This project was coded by{" "}
          <a
            href="https://chelsea-koenig.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Chelsea Koenig
          </a>{" "}
          and is{" "}
          <a
            href="https://sunny-cactus-8b8fbe.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
          .
        </footer>
      </div>
    </div>
  );
}

// import React from "react";
import "./App.css";
import Stars from "./components/Stars";
import Heading from "./components/Heading";
import Hero from "./components/Hero";
import Sapi from "./assets/img/sapihead.png";
// import { loadSlim } from "tsparticles-slim";

function App() {
  return (
    <>
      <div className="flex flex-col h-screen items-center justify-center">
        <img className="md:w-24 w-16" src={Sapi} />
        <Heading />
        <Hero />
      </div>
      <Stars />
    </>
  );
}

export default App;

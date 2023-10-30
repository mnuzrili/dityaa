// import { useState } from "react";
import "./App.css";
import Stars from "./components/Stars";
import Heading from "./components/Heading";
import Hero from "./components/Hero";
import Envelope from "./components/Envelope";
import Maintenance from "./components/Maintenance";
import Footer from "./components/Footer";
import Sapi from "./assets/img/sapihead.png";
// import { loadSlim } from "tsparticles-slim";

const env = "dev";

const Main = () => {
  return (
    <>
      <img className="md:w-24 w-16" src={Sapi} />
      <Heading />
      <Hero />
      <Envelope />
      <div className="relative h-32 w-full">
        <div className="absolute inset-x-0 bottom-0 h-16">
          <Footer />
        </div>
      </div>
    </>
  );
};

function App() {
  return (
    <>
      <div
        className={
          env == "dev"
            ? "flex flex-col items-center justify-center h-screen"
            : "flex flex-col items-center justify-center"
        }
      >
        {env == "dev" ? <Maintenance /> : Main()}
      </div>
      <Stars />
    </>
  );
}

export default App;

// import { useState } from "react";

import { useState, useEffect } from "react";
import "./App.css";
import PacmanLoader from "react-spinners/PacmanLoader";
import Stars from "./components/Stars";
import Heading from "./components/Heading";
import Hero from "./components/Hero";
import Envelope from "./components/Envelope";
import Maintenance from "./components/Maintenance";
import Footer from "./components/Footer";
import Sapi from "./assets/img/sapihead.png";
import { animated, useSpring } from "@react-spring/web";
// import { loadSlim } from "tsparticles-slim";
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
  const [isLoading, setIsLoading] = useState(true);

  const propsOut = useSpring({
    from: { opacity: 0.9 },
    to: { opacity: 0 },
    delay: 5000,
    config: {
      duration: 1500, // duration for the whole animation form start to end
    },
  });

  const propsIn = useSpring({
    from: { opacity: 0, scale: 0, filter: "blur(40px)" },
    to: { opacity: 1, scale: 1, filter: "blur(0)" },
    delay: 7500,
    config: {
      duration: 1500, // duration for the whole animation form start to end
    },
  });

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 6500);
  }, []);

  const override = {
    // display: "block",
    marginRight: "100px",
    borderColor: "white",
    opacity: "0.9",
  };

  return (
    <>
      <Stars />
      {isLoading ? (
        <animated.div style={propsOut}>
          <div className={"flex flex-col items-center justify-center h-screen"}>
            <PacmanLoader
              loading={isLoading}
              color={"#ffffff"}
              cssOverride={override}
              size={50}
            />
          </div>
        </animated.div>
      ) : (
        <>
          <animated.div style={propsIn}>
            <div
              className={
                import.meta.env.VITE_PARAM == "true"
                  ? "flex flex-col items-center justify-center h-screen"
                  : "flex flex-col items-center justify-center"
              }
            >
              {import.meta.env.VITE_PARAM == "true" ? <Maintenance /> : Main()}
            </div>
          </animated.div>
        </>
      )}
    </>
  );
}

export default App;

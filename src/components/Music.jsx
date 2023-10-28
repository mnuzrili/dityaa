import { useState } from "react";
import sound from "../assets/music/sepuh.mp3";

const Music = () => {
  const [isPlay, setPLay] = useState(false);
  const [audio] = useState(new Audio(sound));
  const stopAudio = () => {
    setPLay(false);
    audio.pause();
  };
  const playAudio = () => {
    setPLay(true);
    audio.play();
  };
  return (
    <button onClick={() => (isPlay ? stopAudio() : playAudio())}>audio</button>
  );
};

export default Music;

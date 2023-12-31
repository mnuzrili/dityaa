import sound from "../assets/music/sepuh.mp3";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faEnvelopeOpen,
  faPlay,
  faPause,
} from "@fortawesome/free-solid-svg-icons";

const Envelope = () => {
  let [isOpen, setIsOpen] = useState(false);
  let [isPlay, setPLay] = useState(false);
  let [audio] = useState(new Audio(sound));
  const envelopeClose = <FontAwesomeIcon icon={faEnvelope} />;
  const envelopeOpen = <FontAwesomeIcon icon={faEnvelopeOpen} />;
  const soundPlay = <FontAwesomeIcon icon={faPlay} />;
  const soundStop = <FontAwesomeIcon icon={faPause} />;

  const stopAudio = () => {
    setPLay(false);
    audio.pause();
  };

  const playAudio = () => {
    setPLay(true);
    audio.play();
  };

  audio.onended = function () {
    setPLay(false);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <>
      <div className="mt-5 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className={
            "animate-bounce rounded-md bg-black/20 px-4 py-2 text-2xl font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 " +
            (isOpen ? "border-dashed border-3" : "border-solid border-3")
          }
        >
          {isOpen ? envelopeOpen : envelopeClose}
        </button>
        <button
          type="button"
          onClick={() => (isPlay ? stopAudio() : playAudio())}
          className={
            "animate-bounce animation-delay-150 ml-2 rounded-md bg-black/20 px-4 py-2 text-2xl font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75 outline-offset-2 " +
            (isPlay ? "border-dashed border-3" : "border-solid border-3")
          }
        >
          {isPlay ? soundStop : soundPlay}
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={closeModal}
          PaperProps={{ sx: { borderRadius: "10px" } }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/40" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="transition ease-in-out duration-500 transform"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transition ease-in-out duration-500 transform"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all border-4 border-black">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-medium leading-6 text-gray-900"
                  >
                    Hii Ditt, Congrats! U did it! Finally!😋
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-md text-gray-500">
                      I know this may not be particularly difficult for you, but
                      I recognize that you&apos;re putting in your best effort
                      to get this far. Pretty, brainy, kind, and now a master
                      too? Wow, you&apos;ve really got it!
                      <br />
                      <br />
                      {"Once again, Congrats! n hope u like it :)"}
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-purple-100 px-4 py-2 text-sm font-medium text-purple-900 hover:bg-purple-200 outline-none ring-2 ring-purple-300 ring-offset-2"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default Envelope;

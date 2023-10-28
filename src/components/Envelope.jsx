import sound from "../assets/music/sepuh.mp3";
import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faEnvelopeOpen,
  faPlay,
  faStop,
} from "@fortawesome/free-solid-svg-icons";

const Envelope = () => {
  let [isOpen, setIsOpen] = useState(false);
  let [isPlay, setPLay] = useState(false);
  let [audio] = useState(new Audio(sound));
  const envelopeClose = <FontAwesomeIcon icon={faEnvelope} />;
  const envelopeOpen = <FontAwesomeIcon icon={faEnvelopeOpen} />;
  const soundPlay = <FontAwesomeIcon icon={faPlay} />;
  const soundStop = <FontAwesomeIcon icon={faStop} />;

  const stopAudio = () => {
    setPLay(false);
    audio.pause();
  };
  const playAudio = () => {
    setPLay(true);
    audio.play();
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }
  return (
    <>
      <div className="mt-2 flex items-center justify-center">
        <button
          type="button"
          onClick={openModal}
          className="rounded-md bg-black/20 px-4 py-2 text-2xl font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          {isOpen ? envelopeOpen : envelopeClose}
        </button>
        <button
          type="button"
          onClick={() => (isPlay ? stopAudio() : playAudio())}
          className="ml-2 rounded-md bg-black/20 px-4 py-2 text-2xl font-medium text-white hover:bg-black/30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/75"
        >
          {isPlay ? soundStop : soundPlay}
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-500"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-500"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/80" />
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
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-xl font-medium leading-6 text-gray-900"
                  >
                    Hii Ditt, Congrats! U did it! Finally!😋
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-md text-gray-500">
                      I know this is actually not that difficult for u, but i
                      know u&apos;re doing ur best to get this far. Pretty,
                      brains, kinds and now a master too? Wow, you’ve really got
                      it!
                      <br />
                      <br />
                      {"Once again, Congrats :)"}
                    </p>
                  </div>

                  <div className="mt-4">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-purple-100 px-4 py-2 text-sm font-medium text-purple-900 hover:bg-purple-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
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

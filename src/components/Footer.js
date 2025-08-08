import React from "react";

function speak(text) {
  const utterance = new SpeechSynthesisUtterance(text);
  window.speechSynthesis.speak(utterance);
}

export default function Footer() {
  return (
    <footer className="bg-[#10847e] text-white py-6 px-4 mt-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="text-center md:text-left">
          <h2 className="text-xl font-bold">MEDICO PLUS <sup>+</sup></h2>
          <p className="text-sm mt-1">
            Your trusted healthcare partner online. Order medicines, book tests, and consult doctors — all in one place.
          </p>
        </div>
        <div className="text-center md:text-right text-sm space-y-1">
          <p>&copy; {new Date().getFullYear()} Medico Plus. All rights reserved.</p>
          <p>Made with ❤️ for better health.</p>
          <button
            onClick={() =>
              speak("Your trusted healthcare partner online. Order medicines, book tests, and consult doctors. Made with love for better health.")
            }
            className="mt-2 px-4 py-2 bg-white text-[#10847e] rounded"
          >
            Speak Footer Content
          </button>
        </div>
      </div>
    </footer>
  );
}

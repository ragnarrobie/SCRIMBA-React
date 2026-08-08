import React, { useEffect } from "react";
import { useState } from "react";
const Body = () => {
  const [state, setState] = useState({
    topText: "One does not simply",
    bottomText: "Walk into Mordor",
    imageUrl: "http://i.imgflip.com/1bij.jpg",
  });
  const [meme, setMeme] = useState("");
  function from(event) {
    const { name, value } = event.currentTarget;
    setState((prev) => {
      return { ...prev, [name]: value };
    });
  }
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setMeme(data.data.memes))
      .catch((err) => console.error("failed to fetch!!!", err));
  }, []);
  function getImage() {
    const booo = Math.floor(Math.random() * meme.length);
    const url = meme[booo].url;
    setState((prev) => {
      return { ...prev, imageUrl: url };
    });
  }

  return (
    <div>
      <div className="mx-auto flex max-w-xl flex-col items-center gap-4 rounded-xl bg-white p-6 shadow-md">
        <label className="flex w-full flex-col gap-1 text-sm font-semibold text-gray-700">
          Top Text
          <input
            value={state.topText}
            onChange={from}
            type="text"
            placeholder="One does not simply"
            name="topText"
            className="h-11 rounded-lg border border-gray-300 px-3 text-gray-800 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
          />
        </label>

        <label className="flex w-full flex-col gap-1 text-sm font-semibold text-gray-700">
          Bottom Text
          <input
            value={state.bottomText}
            onChange={from}
            type="text"
            placeholder="Walk into Mordor"
            name="bottomText"
            className="h-11 rounded-lg border border-gray-300 px-3 text-gray-800 outline-none transition focus:border-orange-500 focus:ring-2 focus:ring-orange-200"
          />
        </label>

        <button
          onClick={getImage}
          className="mt-2 h-11 w-full cursor-pointer rounded-lg bg-black font-semibold text-white transition hover:bg-gray-700"
        >
          Get a new meme image 🖼
        </button>
      </div>

      <div className="relative mx-auto mt-8 w-full max-w-xl overflow-hidden rounded-xl shadow-md">
        <img src={state.imageUrl} className="w-full" alt="meme" />
        <span className="absolute top-2 left-1/2 w-full -translate-x-1/2 px-2 text-center text-3xl font-extrabold uppercase text-white [-webkit-text-stroke:1.5px_black] [text-shadow:2px_2px_0_black]">
          {state.topText}
        </span>
        <span className="absolute bottom-2 left-1/2 w-full -translate-x-1/2 px-2 text-center text-3xl font-extrabold uppercase text-white [-webkit-text-stroke:1.5px_black] [text-shadow:2px_2px_0_black]">
          {state.bottomText}
        </span>
      </div>
    </div>
  );
};

export default Body;

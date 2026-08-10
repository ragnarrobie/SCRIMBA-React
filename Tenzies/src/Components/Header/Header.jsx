import React from "react";
import Die from "../Die/Die";
import { useState } from "react";
import { nanoid } from "nanoid";
import Confetti from "react-confetti";

export default function Header() {
  const num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const num2 = [1, 2, 3, 4, 5, 6];

  function Roll() {
    return num1.map(() => {
      const number = Math.floor(Math.random() * num2.length);
      return {
        id: nanoid(),
        isHeld: false,
        value: num2[number],
      };
    });
  }

  const [state, setState] = useState(Roll());

  const gameWon =
    state.every((die) => die.isHeld === true) &&
    state.every((die) => die.value === state[0].value);

  function rollDice() {
    setState((prev) => {
      return prev.map((die) => {
        if (die.isHeld === true) {
          return { ...die };
        } else {
          const news = Math.floor(Math.random() * num2.length);
          return { ...die, isHeld: false, value: num2[news] };
        }
      });
    });
  }

  function hold(id) {
    setState((prev) => {
      return prev.map((di) => {
        if (di.id === id) {
          return { ...di, isHeld: !di.isHeld };
        } else {
          return { ...di };
        }
      });
    });
  }
  function newGame() {
    setState(Roll());
  }
  return (
    <main className="min-h-screen bg-[#0923a31] p-[18px]">
      {gameWon && <Confetti />}
      <section className="flex min-h-[calc(100vh-36px)] w-full items-center justify-center rounded-[5px] bg-[#f4f4f4]">
        <div className="flex flex-col items-center">
          <h1 className="mb-[8px] text-[32px] font-bold text-gray-900">
            Tenzies
          </h1>
          <p className="mb-[24px] max-w-[400px] text-center text-[16px] text-gray-600">
            Roll until all dice are the same. Click each die to freeze it at its
            current value between rolls.
          </p>

          <div className="grid grid-cols-5 gap-x-[18px] gap-y-[18px]">
            {state.map((roll, index) => {
              return (
                <Die
                  hold={hold}
                  key={roll.id}
                  value={roll.value}
                  isHeld={roll.isHeld}
                  id={roll.id}
                />
              );
            })}
          </div>

          <button
            type="button"
            onClick={gameWon ? newGame : rollDice}
            className="cursor-pointer mt-[24px] rounded-[10px] bg-[#092331] px-[24px] py-[12px] text-[18px] font-semibold text-white shadow-[0_2px_2px_rgba(0,0,0,0.2)] transition hover:bg-[#0d3247] active:scale-95"
          >
            {gameWon ? "New Game" : "Roll"}
          </button>
        </div>
      </section>
    </main>
  );
}

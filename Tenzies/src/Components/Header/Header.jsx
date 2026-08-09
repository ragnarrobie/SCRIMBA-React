import React from "react";
import Die from "../Die/Die";

export default function Header() {
  const num = [1, 2, 3, 4, 5, 6];

  
  const numberss = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  function roll(){
    const number = Math.floor(Math.random() * num.length);
    return num[number]
  }

  return (
    <main className="min-h-screen bg-[#092331] p-[18px]">
      <section className="flex min-h-[calc(100vh-36px)] w-full items-center justify-center rounded-[5px] bg-[#f4f4f4]">
        <div className="grid grid-cols-5 gap-x-[18px] gap-y-[18px]">
          {numberss.map((_,index)=>{
            return <Die value={roll()} />
          })}
        </div>
      </section>
    </main>
  );
}

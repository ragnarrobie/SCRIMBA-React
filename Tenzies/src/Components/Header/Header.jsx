import React from "react";
import Die from "../Die/Die";

export default function Header() {
  const num1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const num2 = [1, 2, 3, 4, 5, 6];
  function Roll() {
    const number = Math.floor(Math.random() * num2.length);
    return num2[number];
  }

  return (
    <main className="min-h-screen bg-[#092331] p-[18px]">
      <section className="flex min-h-[calc(100vh-36px)] w-full items-center justify-center rounded-[5px] bg-[#f4f4f4]">
        <div className="grid grid-cols-5 gap-x-[18px] gap-y-[18px]">
          {
            num1.map((_,index)=>{
                return   <Die value={Roll()} />
            })
          
        }
        
        </div>
      </section>
    </main>
  );
}

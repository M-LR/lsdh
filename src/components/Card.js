"use client";
import React from "react";
import {Chip, Image} from "@nextui-org/react";
import Member from "./Member";

export default function Card({values, team}) {

  return (
  <div className="flex flex-col items-center w-full">

    <div className="w-full p-4 relative">
      <h1 className="text-4xl text-center">Les valeurs du Héron 🪿 <span className="text-sm absolute sm:right-600 sm:top-6 w-100">← c&apos; est une oie pas un héron</span></h1>
      <div></div>
    </div>

    <div className="flex md:flex-row flex-col justify-center w-full my-20 shadow-xl dark:shadow-violet-600">
      <div className="flex flex-1 justify-center mx-4">
        <ul className="flex flex-col items-center">

          {values.map((item, index) => (

            <li key={index} className={`${item.text.length > 200 ?' h-[300px] sm:h-[200px]' : 'h-[200px]'}  flex flex-col justify-center p-4 w-full`}>
            <p>
              <Chip size="lg" color="primary">
                <i className={`${item.chip} ri-xl`}></i>
              </Chip> &nbsp; 
                {item.title}
              </p>
              <p className="mx-[65px] mt-4 text-justify text-violet-950 dark:text-violet-600 w-2/3">
                {item.text}
              </p>
          </li>
          ))}
  
        </ul>
      </div>
      <div className="flex flex-1 items-center justify-center mt-8 sm:mt-4">
        <Image
          alt="nextui logo"
          height={500}
          radius="sm"
          src="./images/coffee_with_friends.svg"
          width={500}
        />
      </div>
    </div>


    <div className="w-full p-4 relative my-7">
      <h1 className="text-4xl text-center">L&apos;équipe 💜</h1>
      <div></div>
    </div>

    <div className="flex md:flex-row flex-col justify-center w-full mt-4">
      <div className="flex flex-col md:flex-row justify-center mx-4">
        {team
          .sort((a, b) => a.name.localeCompare(b.name)) 
          .map((item, index) => (
            
            <Member key={index} name={item.name} presentation={item.presentation} status={item.status}/>
           
        ))}
            
      </div> 
    </div>
  </div>
  );
}

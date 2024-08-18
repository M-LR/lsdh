"use client";
import React from "react";
import {Chip, Image} from "@nextui-org/react";
import Member from "./Member";
import { Raleway, Ubuntu } from "next/font/google";

const ubuntu = Ubuntu({ weight: ['300','500', '700'], subsets: ["latin"]});

export default function Card({values, team}) {

  return (
  <div className="flex flex-col items-center w-full">

    <div className="w-full p-4 relative">
      <h1 className={`${ubuntu.className} text-4xl text-center`}>Les valeurs du Héron</h1>
      <div></div>
    </div>

    <div className="flex md:flex-row flex-col w-full my-20 dark:bg-zinc-950 shadow-lg dark:shadow-violet-600 md:rounded-lg bg-violet-700">
      <div className="flex flex-1  mx-4 mt-8">
        <ul className="flex flex-col">

          {values.map((item, index) => (

            <li key={index} className={`${item.text.length > 200 ?' h-[300px] sm:h-[200px]' : 'h-[200px]'}  flex flex-col justify-center p-4 w-full text-violet-50`}>
            <p>
              <Chip size="lg" color="primary">
                <i className={`${item.chip} ri-xl`}></i>
              </Chip> &nbsp; 
                {item.title}
              </p>
              <p className="mx-[65px] mt-4 text-left text-violet-100 dark:text-violet-500 w-2/3">
                {item.text}
              </p>
          </li>
          ))}
  
        </ul>
      </div>
      <div className="md:rounded-r-lg flex flex-1 items-center justify-center pt-8 sm:pt-4 bg-zinc-100 dark:bg-zinc-950">
        <Image
          alt="nextui logo"
          height={500}
          radius="sm"
          src="./images/exploring.svg"
          width={500}
        />
      </div>
    </div>


    <div className="w-full p-4 relative my-7">
      <h1 className={`${ubuntu.className} text-4xl text-center`}>L&apos;équipe</h1>
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

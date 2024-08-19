"use client";
import React from "react";
import {Chip, Image} from "@nextui-org/react";
import Member from "./Member";
import { Ubuntu } from "next/font/google";
import { useInView } from 'react-intersection-observer';
import { LuHeartHandshake } from "react-icons/lu";
import { RiTeamLine } from "react-icons/ri";

const ubuntu = Ubuntu({ weight: ['300','500', '700'], subsets: ["latin"]});


export default function Card({values, team}) {

  const { ref, inView } = useInView({
    threshold: 0.3,    // 30% du texte doit être visible pour déclencher l'animation
  });

  let time = 0;

  return (
  <div className="flex flex-col items-center w-full">

    <div className="flex flex-col w-full p-4 relative text-center items-center text-violet-900 dark:text-pink-500">
      <LuHeartHandshake size={50}/>
      <h1 className={`${ubuntu.className} text-4xl`}>Les valeurs du Héron</h1>  
    </div>

    <div className="flex md:flex-row flex-col w-full my-20 dark:bg-zinc-950 shadow-lg dark:shadow-violet-600 md:rounded-lg bg-violet-700">
      <div className="flex flex-1  mx-4 mt-8">
        <ul className="flex flex-col">

          {values.map((item, index) => (

            <li key={index} className={`${item.text.length > 200 ?' h-[300px] sm:h-[200px]' : 'h-[200px]'}  flex flex-col justify-center p-4 w-full`}>
            <p>
              <Chip size="lg" color="primary">
                <i className={`${item.chip} ri-xl`}></i>
              </Chip> &nbsp; 
               <span className="text-zinc-100 dark:text-pink-400 text-large font-bold"> {item.title}</span>
              </p>
              <p className="mx-[65px] mt-4 text-left text-violet-100 w-2/3">
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


    <div className="flex flex-col w-full p-4 relative my-7 items-center text-center text-violet-900 dark:text-pink-500">
      <RiTeamLine size={50}/>
      <h1 className={`${ubuntu.className} text-4xl`}>L&apos;équipe</h1>
      <div></div>
    </div>

    <div className="flex md:flex-row flex-col justify-center w-full mt-4">
      <div ref={ref} className="flex flex-col md:flex-row justify-center mx-4">
        {team
          .sort((a, b) => b.name.localeCompare(a.name)) 
          .map((item, index) => {
            time += .5;
            return (
            <Member key={index} name={item.name} presentation={item.presentation} status={item.status} css={{
              transition: `all ease-out ${time}s`,
              transform: inView ? 'translateY(0)' : 'translateY(-80px)',
              opacity: inView ? 1 : 0,
            }} />
          )
            
           
          })
        }

            
      </div> 
    </div>
  </div>
  );
}

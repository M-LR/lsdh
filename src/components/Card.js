import React from "react";
import {Chip, Image} from "@nextui-org/react";

export default function App() {
  return (
    <>
        <div className="flex flex-col items-center w-full">

  <div className="w-full p-4 relative">
    <h1 className="text-4xl text-center">Les valeurs du Héron 🪿 <span className="text-sm absolute right-600 top-6 w-100">← c&apos; est une oie pas un héron</span></h1>
    <div></div>
  </div>


  <div className="flex md:flex-row flex-col justify-center w-full mt-4">

    <div className="flex flex-1 justify-center mx-4">
      <ul className="flex flex-col items-center">
        <li className="h-[200px] flex flex-col justify-center p-4 w-full">
          <p>
            <Chip size="lg" color="primary">
              <i className="ri-service-fill ri-xl"></i>
            </Chip> &nbsp;
            Défendre des valeurs humaines et inclusives
          </p>
          <p className="mx-[65px] mt-4 text-justify text-violet-950 dark:text-violet-600 w-2/3">
            Principes essentiels pour favoriser la coexistence pacifique entre les individus de diverses origines, cultures et croyances.
          </p>
        </li>
        <li className="h-[200px] flex flex-col justify-center p-4 w-full">
          <p>
            <Chip size="lg" color="primary">
              <i className="ri-leaf-fill ri-xl"></i>
            </Chip> &nbsp;
            Respecter l&apos;environnement
          </p>
          <p className="mx-[65px] mt-4 text-justify text-violet-950 dark:text-violet-600 w-2/3">
            Protéger la biodiversité commence par une prise de conscience de l&apos;impact de nos actions quotidiennes sur la planète.
          </p>
        </li>
        <li className="h-[200px] flex flex-col justify-center  p-4 w-full">
          <p>
            <Chip size="lg" color="primary">
              <i className="ri-megaphone-fill ri-xl"></i>
            </Chip> &nbsp;
            Exprimer ses opinions 
          </p>
          <p className="mx-[65px] mt-4 text-justify text-violet-950 dark:text-violet-600 w-2/3">
          L&apos;expression de ses opinions est une pierre angulaire de la démocratie et du progrès social. En exerçant cette liberté avec responsabilité et respect, nous pouvons contribuer à un dialogue enrichissant, à une meilleure compréhension mutuelle et à une société plus inclusive et harmonieuse. 
          </p>
        </li>
      </ul>
    </div>


    <div className="flex flex-1 items-center justify-center mt-4">
      <Image
        alt="nextui logo"
        height={500}
        radius="sm"
        src="./images/coffee_with_friends.svg"
        width={500}
      />
    </div>
  </div>
</div>

    </> 
  );
}

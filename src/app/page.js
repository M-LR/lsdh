import styles from "./page.module.scss";
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { Raleway } from "next/font/google";
const raleway = Raleway({ weight: ['300','500', '700'], subsets: ["latin"]});


export default function Home() {
  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center divide-y divide-violet-950">
        <Image
          src="/images/lsh_logo.png"
          alt="Logo de l'association des Studios du héron"
          width={500}
          height={300}
        />
        <div className={`text-xl text-violet-950 ${raleway.className}`}>
         
          <FontAwesomeIcon icon={faTriangleExclamation} />
          Site en construction
        </div>
      </div>
      
    </>
    
  );
}
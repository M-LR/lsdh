"use client";
import styles from "./page.module.scss";
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion"
import { Raleway } from "next/font/google";
const raleway = Raleway({ weight: ['300','500', '700'], subsets: ["latin"]});


export default function Home() {

  const icon = {
    hidden: {
      pathLength: 0,
    },
    visible: {
      pathLength: 1,
    }
  }

  return (
    <>
      <div className="h-screen flex flex-col items-center justify-center divide-y divide-violet-950">
       
        <motion.div
            initial={{ scale: 0 }}
            animate={{ rotate: 360, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 160,
              damping: 40
            }}
            whileHover={{ rotate: 1.2 }}
            onHoverStart={e => {}}
            onHoverEnd={e => {}}
        >
            <Image
            src="/images/lsh_logo.png"
            alt="Logo de l'association des Studios du héron"
            width={500}
            height={300}
          />  
        </motion.div>
        <motion.div 
          initial={{ y: -100}}
          animate={{ y: 100 }}
          transition={{ ease: "easeOut", duration: 2 }}
        >
          <div className={`text-xl text-violet-950 ${raleway.className}`}>
          Site en construction
          </div>
        </motion.div>
      </div>  
    </> 
  );
}
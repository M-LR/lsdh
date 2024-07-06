"use client";
import styles from "./page.module.scss";
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTriangleExclamation } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";



export default function Home() {

  return (
    <>
      <div className="flex items-center justify-center"> 
        <div className="flex w-full max-w-3xl md:w-2/3 p-4 items-center justify-center">
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
        </div>
      </div>  
    </> 
  );
}
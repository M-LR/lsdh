"use client";
import { motion } from "framer-motion";
import { Raleway } from "next/font/google";
const raleway = Raleway({ weight: ['300','500', '700'], subsets: ["latin"]});

const Construction = () => {
    return (
        <div className="fixed bottom-6 w-screen">
            <motion.div 
                initial={{ y: -10}}
                animate={{ y: 10 }}
                transition={{ ease: "easeOut", duration: 2 }}
             >
                <div className={`text-center text-xl text-violet-950 dark:text-indigo-100 ${raleway.className}`}>
                    <p>Site en construction</p>
                </div>
            </motion.div>
        </div>
    )
}

export default Construction;
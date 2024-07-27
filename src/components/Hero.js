"use client"
import {Button} from "@nextui-org/react";
import Link from "next/link";

 const Hero = ({heroTitle, heroText, mainText}) => {
    return (
      <>
        <div className="mx-4 mt-4 md:w-1/3 ">
            <h1 className="text-5xl font-bold"> {heroTitle}</h1>
            <p className="py-6 text-violet-950 dark:text-violet-600">
            {heroText}
            </p>
            
            <Button color="primary" variant="solid" as={Link} href="https://www.helloasso.com/associations/les-studios-du-heron" target="blanl">
                Soutenez-nous
            </Button>
            
            
        </div>
        <div className="mx-4 mt-4 md:w-1/3">
            
            <p className="text-xl text-justify">
            {mainText}
            </p>
            
        </div>    
      </>
    )
  }
  export default Hero;
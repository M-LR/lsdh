import React from 'react';
import { useDisclosure, Button } from "@nextui-org/react";
import TheModal from "@/components/TheModal";

const Footer = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
    <footer className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between">
          <div className="w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4">A propos</h2>
            <p className="">
            LSH est une association loi 1901 fondée en juin 2024.
            </p>
          </div>
          <div className="flex items-center justify-center w-full md:w-1/3 mb-6 md:mb-0">
            <h2 className="text-xl font-bold mb-4"></h2>
              
          </div>
          <div className="w-full md:w-1/3">
            <h2 className="text-xl font-bold mb-4">Suivez-nous</h2>
            <div className="flex space-x-4">
            
              <Button onPress={onOpen} color='primary'>
                <i className="ri-instagram-line ri-xl"></i>
              </Button>

              <Button onPress={onOpen} color='primary'>
                <i className="ri-youtube-line ri-xl"></i>
              </Button>
          
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center text-gray-400">
          &copy; 2024 {process.env.NEXT_PUBLIC_SITE_NAME}.
        </div>
      </div>
    </footer>
    <TheModal isOpen={isOpen} onOpenChange={onOpenChange} />      
    </>
  );
};

export default Footer;

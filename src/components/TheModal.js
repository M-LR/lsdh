"use client"; 
import React from "react";
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, RadioGroup, Radio} from "@nextui-org/react";




const TheModal = ({isOpen, onOpenChange}) => {

   
    return (
        <Modal 
        isOpen={isOpen} 
        placement="top"
        onOpenChange={onOpenChange} 
        >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">🚀 C&apos;est pour bientôt, promis !&nbsp;👀</ModalHeader>
              <ModalBody>
                <p> 
                   Ce n&apos;est pas encore tout à fait prêt...
                </p>
                <p>
                    Notre Héron développeur a décidé de prendre des vacances bien méritées au bord du lac. Il revient bientôt, frais et dispo, avec des lignes de code parfaites ! 🐦💻
                </p>
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="light" onPress={onClose}>
                <i class="ri-close-circle-line"></i> fermer
                </Button>
                {/* <Button color="primary" onPress={onClose}>
                  Action
                </Button> */}
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    );
};

export default TheModal;
"use client";
import Card from "../Card/Card";
import { useState } from "react";
import OptionsToggle from "./OptionsToggle";
import Modal from "../Modal/Modal";

type CardProps = {
   children: React.ReactNode;
   actionsModalContent?: React.ReactNode;
   moreContentModal?: React.ReactNode;
   setMoreOpen?: React.Dispatch<React.SetStateAction<boolean>>;
   moreOpen?: boolean;
};

const CardWithModals = ({
   children,
   actionsModalContent,
   moreContentModal,
   setMoreOpen,
   moreOpen,
}: CardProps) => {
   const [isOpen, setIsOpen] = useState(false);

   return (
      <>
         <Card>
            <OptionsToggle onClick={() => setIsOpen(true)} />
            {children}
         </Card>
         <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            {actionsModalContent}
         </Modal>
         {moreContentModal && setMoreOpen && typeof moreOpen === "boolean" && (
            <Modal isOpen={moreOpen} setIsOpen={setMoreOpen}>
               {moreContentModal}
            </Modal>
         )}
      </>
   );
};

export default CardWithModals;

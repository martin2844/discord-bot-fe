"use client";
import React, { useEffect } from "react";
import disableScroll from "disable-scroll";

interface ModalProps {
   children: React.ReactNode;
   isOpen: boolean;
   setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Modal: React.FC<ModalProps> = ({ children, isOpen, setIsOpen }) => {
   useEffect(() => {
      if (isOpen) {
         disableScroll.on();
      } else {
         disableScroll.off();
      }
   }, [isOpen]);

   const modalClasses = `${
      isOpen ? "block" : "hidden"
   } overscroll-contain z-50 fixed h-full w-screen top-0 right-0 flex items-center justify-center`;

   const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      if (e.target === e.currentTarget) setIsOpen(false);
   };

   return (
      <div
         style={{ backgroundColor: "rgba(46, 46, 47, 0.3)" }}
         className={modalClasses}
         onClick={handleClick}
      >
         <div className="absolute bg-white rounded-md z-50 p-8">
            <div
               onClick={() => setIsOpen(false)}
               className="relative -top-5 text-right text-lg font-bold cursor-pointer"
            >
               X
            </div>
            <div className="-mt-4">{children}</div>
         </div>
      </div>
   );
};

export default Modal;

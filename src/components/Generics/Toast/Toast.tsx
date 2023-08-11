import React, { useEffect, useState } from "react";

type Props = {
   message: string;
   duration?: number; // in milliseconds
   visible: boolean;
   type: "success" | "error";
   onClose: () => void;
};

const Toast: React.FC<Props> = ({
   message,
   duration = 3000,
   visible,
   onClose,
   type,
}) => {
   const [isVisible, setIsVisible] = useState(visible);

   const bgClass = {
      success: "bg-green-500",
      error: "bg-red-500",
   };

   useEffect(() => {
      setIsVisible(visible);
      if (visible) {
         const timer = setTimeout(() => {
            setIsVisible(false);
            onClose();
         }, duration);

         return () => clearTimeout(timer);
      }
   }, [visible, duration, onClose]);

   if (!isVisible) return null;

   return (
      <div className={bgClass[type]}>
         <div className="fixed bottom-4 right-4 bg-green-500 text-white py-2 px-4 rounded shadow-lg">
            {message}
         </div>
      </div>
   );
};

export default Toast;

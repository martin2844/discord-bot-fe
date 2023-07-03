import React from "react";

const Description = ({
   text,
   moreAction,
}: {
   text: string;
   moreAction: () => void;
}) => {
   const truncate = (str: string) => {
      return str.length > 200 ? str.substring(0, 200) + "..." : str;
   };
   return (
      <div className="mt-2 text-sm">
         <p>
            {truncate(text)} &nbsp; [
            <span
               className="underline decoration-2 decoration-red-600 cursor-pointer"
               onClick={moreAction}
            >
               más
            </span>
            ]
         </p>
      </div>
   );
};

export default Description;

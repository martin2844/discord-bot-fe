import React from "react";

const OptionsToggle = ({ onClick }: { onClick: () => void }) => {
   return (
      <div
         className="flex flex-col absolute right-4 text-xl font-bold cursor-pointer"
         onClick={onClick}
      >
         <div style={{ marginBottom: "-20px" }}>.</div>
         <div style={{ marginBottom: "-20px" }}>.</div>
         <div>.</div>
      </div>
   );
};

export default OptionsToggle;

import React from "react";

type Props = {
   loading: boolean;
   onSubmit: () => void;
   label?: string;
};

const SubmitButton: React.FC<Props> = ({
   loading,
   onSubmit,
   label = "Submit Changes",
}) => {
   return (
      <button
         className={`bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded ${
            loading ? "cursor-not-allowed" : ""
         }`}
         onClick={onSubmit}
         disabled={loading}
      >
         {loading ? <div className="spinner"></div> : label}
         <style jsx>{`
            .spinner {
               border: 4px solid rgba(255, 255, 255, 0.3);
               border-radius: 50%;
               border-top: 4px solid white;
               width: 24px;
               height: 24px;
               animation: spin 1s linear infinite;
            }

            @keyframes spin {
               0% {
                  transform: rotate(0deg);
               }
               100% {
                  transform: rotate(360deg);
               }
            }
         `}</style>
      </button>
   );
};

export default SubmitButton;

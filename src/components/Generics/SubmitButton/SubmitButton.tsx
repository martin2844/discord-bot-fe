type Props = {
   loading: boolean;
   onSubmit: () => void;
   label?: string;
   deleteBtn?: boolean;
};

const SubmitButton: React.FC<Props> = ({
   loading,
   onSubmit,
   label = "Submit Changes",
   deleteBtn = false,
}) => {
   return (
      <button
         className={` text-white py-2 px-4 rounded ${
            loading ? "cursor-not-allowed" : ""
         } ${
            deleteBtn
               ? "bg-red-500 hover:bg-red-600"
               : "bg-blue-500 hover:bg-blue-600"
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

"use client";
import React from "react";
import SubmitButton from "../Generics/SubmitButton/SubmitButton";
import Toast from "../Generics/Toast/Toast";
import { updateAiDetails } from "@/services/books";
const AddDetails = () => {
   const [loading, setLoading] = React.useState(false);
   const [showToast, setShowToast] = React.useState(false);
   const [toastMessage, setToastMessage] = React.useState("error");
   const updateDetails = async () => {
      setLoading(true);
      try {
         await updateAiDetails(localStorage.getItem("token")!);
         setToastMessage("success");
      } catch (error) {
         setToastMessage("error updating");
         console.log(error);
      } finally {
         setLoading(false);
         setShowToast(true);
      }
   };

   return (
      <>
         <SubmitButton
            loading={loading}
            onSubmit={updateDetails}
            label="Refresh Ai Details"
         />
         {showToast && (
            <Toast
               type={toastMessage !== "success" ? "error" : "success"}
               onClose={() => setShowToast(false)}
               visible={showToast}
               message={toastMessage}
            />
         )}
      </>
   );
};

export default AddDetails;

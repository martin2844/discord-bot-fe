"use client";
import { useState } from "react";

// This will be our custom hook
export function useAuth() {
   const [error, setError] = useState<string | null>(null);

   const login = async (password: string) => {
      try {
         const res = await fetch(
            "https://api.libros.codigomate.com/api/auth/token",
            {
               method: "POST",
               headers: {
                  "Content-Type": "application/json",
               },
               body: JSON.stringify({ password }),
            }
         );

         if (!res.ok) {
            throw new Error("Failed to login");
         }

         const data = await res.json();

         // Set token in localStorage
         if (typeof window !== "undefined") {
            localStorage.setItem("token", data.token);
         }

         setError(null);
      } catch (error) {
         setError("Failed to login");
         console.log(error);
      }
   };

   const isAuthenticated = (): boolean | undefined => {
      // Check if there's a token in localStorage
      if (typeof window !== "undefined") {
         const token = localStorage.getItem("token");
         return !!token; // Will return true if token exists, false otherwise
      }
   };

   return {
      login,
      isAuthenticated,
      error,
   };
}

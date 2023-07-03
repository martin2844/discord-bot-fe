"use client";
import { FormEvent, useState } from "react";
import { adminLogin } from "@/services/auth";
import Router from "next/router";

const AdminPage = () => {
   const [password, setPassword] = useState("");
   const [error, setError] = useState<string | null>(null);

   const handleLogin = async (event: FormEvent) => {
      event.preventDefault();

      try {
         setError(null);
         const response = await adminLogin(password);
         if (!response.ok) throw new Error(`HTTP status ${response.status}`);
         const data = await response.json();
         localStorage.setItem("token", data.token);
         Router.push("/admin/dashboard");
      } catch (err) {
         setError("Failed to login");
         console.error(err);
      }
   };

   return (
      <div className="min-h-screen bg-gray-100 py-6 flex flex-col justify-center sm:py-12">
         <div className="relative py-3 sm:max-w-xl sm:mx-auto">
            <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-lg sm:p-10">
               <div className="max-w-md mx-auto">
                  <div className="text-center">
                     <h1 className="text-2xl font-semibold text-gray-900">
                        Admin Login
                     </h1>
                  </div>
                  <div className="mt-5">
                     <form onSubmit={handleLogin}>
                        <div>
                           <label className="block text-sm font-medium leading-relaxed tracking-tighter text-gray-700">
                              Password
                           </label>
                           <input
                              type="password"
                              className="mt-1 block w-full border-none bg-gray-100 h-11 rounded-lg shadow-lg hover:bg-blue-100 focus:bg-blue-100 focus:ring-0 p-2 mb-2"
                              placeholder="Your password"
                              onChange={(e) => setPassword(e.target.value)}
                              value={password}
                           />
                        </div>
                        {error && (
                           <div className="mt-4 text-xs text-red-600">
                              {error}
                           </div>
                        )}
                        <div className="mt-6">
                           <button
                              type="submit"
                              className="w-full px-2 py-3 rounded-xl bg-blue-600 text-white font-semibold focus:outline-none"
                           >
                              Login
                           </button>
                        </div>
                     </form>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default AdminPage;

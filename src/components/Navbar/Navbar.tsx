"use client";
import Link from "next/link";
import UserIcon from "../Generics/Icons/User";
import { useAuth } from "../../hooks/useAuth";

const Navbar = () => {
   const { isAuthenticated } = useAuth();

   return (
      <nav className="flex w-full items-center justify-between flex-wrap bg-emerald-500 p-6">
         <div className="flex items-center flex-shrink-0 text-white mr-6">
            <Link href="/">
               <span className="font-semibold text-xl tracking-tight hover:text-teal-200">
                  Libros
               </span>
            </Link>
         </div>
         <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
            <div className="text-sm lg:flex-grow flex justify-end">
               <Link href={isAuthenticated() ? "/admin/dashboard" : "/login"}>
                  <span className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-teal-200 mr-4 text-xl">
                     <UserIcon />
                  </span>
               </Link>
            </div>
         </div>
      </nav>
   );
};

export default Navbar;

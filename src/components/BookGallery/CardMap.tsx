"use client";
import { useState } from "react";
import BookCard from "@/components/BookCard/BookCard";
import { Book } from "@/types/books";
import IconFiltering from "../Generics/Icons/Filter";
import Modal from "../Generics/Modal/Modal";

const CardMap = ({ b }: { b: Book[] }) => {
   const [open, setOpen] = useState(false);
   const [books, setBooks] = useState(b);
   const [searchTerm, setSearchTerm] = useState("");
   const filterBooks = (term: string) => {
      setBooks(
         b.filter(
            (book) =>
               book.subject.includes(term) ||
               book.title.includes(term) ||
               book.author.includes(term) ||
               (book.description && book.description.includes(term)) ||
               (book.keywords &&
                  book.keywords.split(",").join(" ").includes(term))
         )
      );
   };

   const subjects = Array.from(new Set(b.map((b) => b.subject)))
      .filter((b) => b !== "")
      .sort((a, b) => a.localeCompare(b));

   return (
      <>
         <div className="flex flex-row w-full items-center justify-center">
            <input
               className="p-2 border-2 rounded-md"
               type="text"
               value={searchTerm}
               onChange={(e) => {
                  setSearchTerm(e.target.value);
                  filterBooks(e.target.value);
               }}
               placeholder="Search books..."
            />
            <div
               className="ml-2 text-xl rounded-full cursor-pointer p-2 hover:bg-blue-200"
               onClick={() => setOpen(true)}
            >
               <IconFiltering />
            </div>
         </div>
         {books.map((b) => (
            <div key={b.book_id} className="sm:w-full lg:w-1/2 sm:p-12">
               <BookCard key={b.book_id} book={b} />
            </div>
         ))}
         <Modal isOpen={open} setIsOpen={setOpen}>
            <div className="flex flex-row flex-wrap ">
               {subjects.map((s) => (
                  <span
                     key={s}
                     className="text-sm border-indigo-500 my-2 mr-2 border px-3 bg-indigo-200 rounded-lg cursor-pointer font-semibold"
                     onClick={() => filterBooks(s)}
                  >
                     {s}
                  </span>
               ))}
            </div>
            <br />
            <span
               className="text-sm border-emerald-500 border px-3 bg-emerald-200 rounded-lg cursor-pointer font-semibold"
               onClick={() => filterBooks("")}
            >
               Todos
            </span>
         </Modal>
      </>
   );
};

export default CardMap;

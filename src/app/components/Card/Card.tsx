import dayjs from "dayjs";
import React from "react";

import Rating from "../Rating/Rating";
import { Book } from "@/types/books";

const Card = ({ book }: { book: Book }) => {
   let makeShiftTitle = book.file.split("/").pop() as string;
   makeShiftTitle = makeShiftTitle.replace(/[_-]/g, " "); // replace "_" and "-" with space
   makeShiftTitle = makeShiftTitle.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
   });
   if (makeShiftTitle.length > 25)
      makeShiftTitle = makeShiftTitle.slice(0, 25) + "...";
   const title = book?.title || makeShiftTitle;

   const noCover =
      "https://islandpress.org/sites/default/files/default_book_cover_2015.jpg";

   return (
      <article className="px-8 bg-white border rounded-md shadow-md mt-4 ">
         <div className="mb-4 py-4 flex flex-row">
            <div className="h-48 w-32 mr-4 -ml-2 -mt-8 shadow-md flex-shrink-0">
               <img
                  className="h-full w-full object-cover"
                  src={book.cover_image || noCover}
               />
            </div>
            <div className="flex flex-col justify-between">
               <header>
                  <h3
                     className="text-lg font-semibold"
                     style={{
                        wordWrap: "break-word",
                        overflow: "hidden",
                        textOverflow: "ellipsis",
                        width: "100%",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                     }}
                  >
                     {title}
                  </h3>
                  <h4>by {book.author || "unknown"}</h4>
               </header>
               <Rating rating={Math.ceil(Math.random() * 4 + 1)} />

               <div className="mt-2 text-sm">
                  <p>Subido el {dayjs(book.date).format("DD/MM/YYYY")}</p>
                  <p>
                     <a
                        className="underline decoration-2 decoration-red-600"
                        href={book.file}
                     >
                        Descargar
                     </a>
                  </p>
               </div>
            </div>
         </div>
         <div className="border-t -mx-8 px-8 py-4">
            <footer className="flex flex-row items-center">
               <img
                  className="w-8 h-8 rounded-full mr-2 border-2"
                  src={book.avatar}
               />
               Subido por
               <span className="font-semibold">&nbsp; {book.name}</span>
            </footer>
         </div>
      </article>
   );
};

export default Card;

import { useRouter } from "next/navigation";
import { Book } from "@/types/books";
import React, { FC } from "react";

interface ActionsContentProps {
   book: Book;
}

const ActionsContent: FC<ActionsContentProps> = ({ book }) => {
   const router = useRouter();

   const actionMap = {
      1: "Reportar libro malo",
      2: "Reportar mala portada",
      3: "Reportar título/descripción malo",
      4: "Reportar palabras claves/tema malo",
   };

   const missingData = [];
   if (!book.description) missingData.push({ id: 5, name: "descripcion" });
   if (!book.keywords) missingData.push({ id: 6, name: "palabras claves" });
   if (!book.subject) missingData.push({ id: 7, name: "tema" });

   const report = (actionId: number) => {
      router.push(`/reportar?bookId=${book.book_id}&actionId=${actionId}`);
   };

   const suggest = (actionId: number) => {
      router.push(`/cambios?bookId=${book.book_id}&actionId=${actionId}`);
   };

   return (
      <div className="flex flex-col space-y-2">
         {Object.entries(actionMap).map(([id, title]) => (
            <button
               key={id}
               className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
               title={title}
               onClick={() => report(Number(id))}
            >
               {title}
            </button>
         ))}

         {missingData.length > 0 &&
            missingData.map((data) => (
               <button
                  key={data.id}
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                  onClick={() => suggest(data.id)}
               >
                  Sugerir {data.name}
               </button>
            ))}
      </div>
   );
};

export default ActionsContent;

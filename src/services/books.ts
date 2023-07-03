import { Book } from "@/types/books";
import { fetchProtectedData } from "../utils/fetchProtectedData";
import { ServiceStatusResponse } from "@/types/responses";

const getAllBooks = async (): Promise<Book[]> => {
   const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/books`,
      { next: { tags: ["books"] } }
   );
   if (!response.ok) {
      return [];
   } else {
      const books: Book[] = await response.json();
      console.log(books);
      return books;
   }
};

const updateAiDetails = (): Promise<ServiceStatusResponse> => {
   return fetchProtectedData(
      "https://api.libros.codigomate.com/api/update/details",
      {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
         },
         body: JSON.stringify({
            aiData: true,
         }),
      }
   );
};

export { getAllBooks, updateAiDetails };

import { Book } from "@/types/books";
import { fetchProtectedData } from "../utils/fetchProtectedData";
import { ServiceStatusResponse } from "@/types/responses";

const getAllBooks = async (): Promise<Book[]> => {
   const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/books`,
      { next: { tags: ["books"], revalidate: 0 } }
   );
   if (!response.ok) {
      return [];
   } else {
      const books: Book[] = await response.json();
      console.log(books);
      return books;
   }
};

const getBook = async (book_id: string): Promise<Book | null> => {
   const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/books/${book_id}`
   );
   if (!response.ok) {
      return null;
   } else {
      const book: Book = await response.json();
      return book;
   }
};

const modifyBook = async (
   book_id: string,
   book: Partial<Book>,
   token: string
): Promise<Book | null> => {
   const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/books/${book_id}`,
      {
         method: "PATCH",
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
         },
         body: JSON.stringify(book),
      }
   );
   if (!response.ok) {
      return null;
   } else {
      const book: Book = await response.json();
      return book;
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

export { getAllBooks, getBook, updateAiDetails, modifyBook };

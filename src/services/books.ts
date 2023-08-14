import { Book } from "@/types/books";
import { fetchProtectedData } from "../utils/fetchProtectedData";
import { ServiceStatusResponse } from "@/types/responses";

const getAllBooks = async (noCache = false): Promise<Book[]> => {
   const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/books`,
      {
         cache: noCache ? "no-store" : undefined,
         next: { tags: ["books"], revalidate: 0 },
      }
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

const updateAiDetails = (token: string): Promise<ServiceStatusResponse> => {
   return fetchProtectedData(
      `${process.env.NEXT_PUBLIC_API_URL}/api/update/details`,
      {
         method: "POST",
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
         },
         body: JSON.stringify({
            aiData: true,
         }),
      }
   );
};

const deleteBook = async (
   book_id: string,
   token: string
): Promise<ServiceStatusResponse> => {
   const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/books/${book_id}`,
      {
         method: "DELETE",
         headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
         },
      }
   );

   if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.error || "Failed to delete book");
   }

   return await response.json();
};

export { getAllBooks, getBook, deleteBook, updateAiDetails, modifyBook };

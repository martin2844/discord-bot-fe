import { Book } from "@/types/books";

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

export { getAllBooks };

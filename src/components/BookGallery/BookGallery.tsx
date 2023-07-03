import Card from "../Card/Card";
import { getAllBooks } from "@/services/books";

const BookGallery = async () => {
   const books = await getAllBooks();
   return (
      <div className="flex flex-wrap justify-center lg:w-full xl:w-3/4 p-12">
         {books.map((b) => (
            <div key={b.book_id} className="w-full lg:w-1/2 p-12">
               <Card key={b.book_id} book={b} />
            </div>
         ))}
      </div>
   );
};

export default BookGallery;

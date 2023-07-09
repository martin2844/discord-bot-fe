import { getAllBooks } from "@/services/books";
import CardMap from "./CardMap";

const BookGallery = async () => {
   const books = await getAllBooks();
   return (
      <div className="flex flex-wrap justify-center lg:w-full xl:w-3/4 sm:p-12">
         <CardMap b={books} />
      </div>
   );
};

export default BookGallery;

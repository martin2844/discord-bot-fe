import BookCard from "@/components/BookEdit/BookCard";
import { getBook } from "@/services/books";

const BookId = async ({ params }: { params: { bookId: string } }) => {
   const bookData = await getBook(params.bookId);
   return (
      <>
         <div className="mt-8">
            {bookData && <BookCard data={bookData as any} />}
         </div>
      </>
   );
};

export default BookId;

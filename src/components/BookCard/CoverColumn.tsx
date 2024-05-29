"use client";
import axios from "axios";

type CoverColumnProps = {
   bookId: number;
   coverImage?: string;
};

const noCover =
   "https://islandpress.org/sites/default/files/default_book_cover_2015.jpg";

const CoverColumn = ({ bookId, coverImage }: CoverColumnProps) => {
   const handleDownloadClick = async () => {
      try {
         const fileReq = await axios.post(
            "https://api.libros.codigomate.com/api/download",
            { bookId }
         );
         window.location.href = fileReq.data; // Trigger the download
      } catch (error) {
         console.error("Error fetching the download link", error);
      }
   };

   return (
      <div className="w-24 sm:h-48 sm:w-32 mr-2 sm:mr-4 -ml-2 -mt-8 mb-2 sm:mb-4 flex-shrink-0 flex flex-col items-center">
         <a onClick={handleDownloadClick}>
            <img
               className="h-full w-full object-cover mb-4 shadow-md"
               src={coverImage || noCover}
               alt="Book cover"
            />
         </a>
         <p>
            <a
               className="text-sm sm:text-md underline decoration-2 decoration-red-600 cursor-pointer"
               onClick={handleDownloadClick}
            >
               Descargar
            </a>
         </p>
      </div>
   );
};

export default CoverColumn;

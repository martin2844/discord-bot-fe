type CoverColumnProps = {
   file: string;
   coverImage?: string;
};

const noCover =
   "https://islandpress.org/sites/default/files/default_book_cover_2015.jpg";

const CoverColumn = ({ file, coverImage }: CoverColumnProps) => {
   return (
      <div className="w-24 sm:h-48 sm:w-32 mr-2 sm:mr-4 -ml-2 -mt-8 mb-2 sm:mb-4 flex-shrink-0 flex flex-col items-center">
         <a href={file}>
            <img
               className="h-full w-full object-cover mb-4 shadow-md"
               src={coverImage || noCover}
            />
         </a>
         <p>
            <a
               className="text-sm sm:text-md underline decoration-2 decoration-red-600"
               href={file}
            >
               Descargar
            </a>
         </p>
      </div>
   );
};

export default CoverColumn;

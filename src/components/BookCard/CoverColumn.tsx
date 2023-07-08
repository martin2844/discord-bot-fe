type CoverColumnProps = {
   file: string;
   coverImage?: string;
};

const noCover =
   "https://islandpress.org/sites/default/files/default_book_cover_2015.jpg";

const CoverColumn = ({ file, coverImage }: CoverColumnProps) => {
   return (
      <div className="h-48 w-32 mr-4 -ml-2 -mt-8 mb-4 shadow-md flex-shrink-0 flex flex-col items-center">
         <a href={file}>
            <img
               className="h-full w-full object-cover mb-4"
               src={coverImage || noCover}
            />
         </a>
         <p>
            <a
               className="underline decoration-2 decoration-red-600"
               href={file}
            >
               Descargar
            </a>
         </p>
      </div>
   );
};

export default CoverColumn;

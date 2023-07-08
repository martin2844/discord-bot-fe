import Link from "next/link";

type MoreContentProps = {
   description?: string;
   keywords: string;
   id: number;
};

const MoreContent = ({ description, keywords, id }: MoreContentProps) => {
   const keywordsSplit =
      keywords &&
      keywords.split(",").map((keyword, i) => {
         return (
            <span
               key={i}
               className="text-xs bg-gray-200 rounded-md px-2 py-1 mr-1"
            >
               {keyword}
            </span>
         );
      });

   const proposeChange = () => {
      return (
         <div className="flex flex-col mt-4">
            Este libro no tiene descripción o temas. ¿Quieres proponer un
            cambio?
            <div className="flex flex-row mt-2">
               <Link href={`/cambios?id=${id}`}>
                  <button className="border-green-500 bg-green-200 border rounded-md px-2 py-1 mr-2 font-semibold">
                     Enviar sugerencia
                  </button>
               </Link>
            </div>
         </div>
      );
   };

   return (
      <div>
         <div className="flex flex-col">
            <div className="flex flex-col">
               <p className="text-sm font-bold">Descripción</p>
               <p className="text-sm leading-relaxed mt-2 text-justify">
                  {description || "sin descripcion"}
               </p>
            </div>
            <div className="flex flex-col mt-2">
               <p className="text-sm font-bold">Temas</p>
               <p className="text-sm mt-2">
                  {keywords ? keywordsSplit : "sin temas"}
               </p>
            </div>
         </div>
         {(!description || !keywords) && proposeChange()}
      </div>
   );
};

export default MoreContent;

import React from "react";
import Link from "next/link";

type ActionProp = {
   description: string;
   href: string;
};

type TableProps = {
   columns: string[];
   rows: { [key: string]: string | number }[];
   action?: ActionProp;
};

const DataTable: React.FC<TableProps> = ({ columns, rows, action }) => {
   return (
      <div className="overflow-x-auto">
         <table className="min-w-full bg-white">
            <thead>
               <tr>
                  {columns.map((column, index) => (
                     <th key={index} className="py-2 px-4 border-b">
                        {column}
                     </th>
                  ))}
                  {action && <th className="py-2 px-4 border-b">Action</th>}
               </tr>
            </thead>
            <tbody>
               {rows.map((row, rowIndex) => (
                  <tr key={rowIndex}>
                     {columns.map((column, columnIndex) => (
                        <td key={columnIndex} className="py-2 px-4 border-b">
                           {row[column]}
                        </td>
                     ))}
                     {action && (
                        <td className="py-2 px-4 border-b">
                           <Link
                              href={row[action.href] as string}
                              as={row[action.href] as string}
                              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                           >
                              {action.description}
                           </Link>
                        </td>
                     )}
                  </tr>
               ))}
            </tbody>
         </table>
      </div>
   );
};

export default DataTable;

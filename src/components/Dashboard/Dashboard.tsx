import { getAllBooks } from "@/services/books";

import Table from "../Table/Table";
import AddDetails from "../AddDetails/AddDetails";

const Dashboard = async () => {
   const books = await getAllBooks(true);
   const columns = ["book_id", "title", "author", "subject"];
   return (
      <div className="flex items-center flex-col">
         <h1 className="text-lg font-bold my-2">Admin Dash</h1>
         <div> See Full Table </div>
         <div className="my-4">
            <AddDetails />
         </div>
         <Table
            columns={columns}
            rows={books.map((c) => ({
               ...c,
               action: `/admin/dashboard/edit/${c.book_id}`,
            }))}
            action={{ description: "Edit", href: "action" }}
         />
      </div>
   );
};

export default Dashboard;

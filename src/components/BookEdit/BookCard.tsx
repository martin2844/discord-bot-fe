"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";
import SubmitButton from "../Generics/SubmitButton/SubmitButton";
import Toast from "../Generics/Toast/Toast";
import { modifyBook, deleteBook } from "@/services/books";

type BookData = {
   book_id: number;
   book_details_id: number;
   uploader_id: string;
   file: string;
   downloads: number;
   date: string;
   name: string;
   avatar: string;
   source: string;
   cover_image: string;
   title: string;
   author: string;
   subject: string;
   description: string;
   keywords: string;
};

type Props = {
   data: BookData;
};

const BookCard: React.FC<Props> = ({ data }) => {
   // States for each input field
   const router = useRouter();
   const [title, setTitle] = useState(data.title || "");
   const [author, setAuthor] = useState(data.author || "");
   const [subject, setSubject] = useState(data.subject || "");
   const [description, setDescription] = useState(data.description || "");
   const [keywords, setKeywords] = useState(data.keywords || "");
   const [loading, setLoading] = useState(false);
   const [showToast, setShowToast] = useState(false);
   const [deleteLoading, setDeleteLoading] = useState(false);
   const [toastMessage, setToastMessage] = useState("error");

   const handleDelete = async () => {
      setDeleteLoading(true);
      try {
         deleteBook(data.book_id + "", localStorage.getItem("token")!);
         setToastMessage("success");
      } catch (error) {
         setToastMessage("error");
         console.log(error);
      } finally {
         setShowToast(true);
         setDeleteLoading(false);
         handleBack();
      }
   };

   const handleBack = () => {
      router.push("/admin/dashboard");
   };

   const handleSubmit = async () => {
      setLoading(true);
      try {
         await modifyBook(
            data.book_id + "",
            {
               title,
               author,
               subject,
               description,
               // keywords
            },
            localStorage.getItem("token")!
         );
         setToastMessage("success");
      } catch (error) {
         setToastMessage("error");
         console.log(error);
      } finally {
         setShowToast(true);
         setLoading(false);
      }
   };

   return (
      <>
         <button
            onClick={handleBack}
            className="bg-gray-200 text-black px-4 py-2 rounded hover:bg-gray-300 mb-4"
         >
            Go Back
         </button>
         <div className="p-6 max-w-lg mx-auto bg-white rounded-xl shadow-md">
            <div className="flex justify-between items-center">
               <img
                  className="h-12 w-12 rounded-full"
                  src={data.avatar}
                  alt={`${data.name}'s avatar`}
               />
               <span className="text-sm text-gray-500">
                  Uploader: {data.name}
               </span>
            </div>

            <div className="mt-4">
               <label className="block text-sm font-medium text-gray-600">
                  Title
               </label>
               <input
                  className="mt-1 p-2 w-full border rounded-md"
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
               />
            </div>

            <div className="mt-4">
               <label className="block text-sm font-medium text-gray-600">
                  Author
               </label>
               <input
                  className="mt-1 p-2 w-full border rounded-md"
                  type="text"
                  value={author}
                  onChange={(e) => setAuthor(e.target.value)}
               />
            </div>

            <div className="mt-4">
               <label className="block text-sm font-medium text-gray-600">
                  Subject
               </label>
               <input
                  className="mt-1 p-2 w-full border rounded-md"
                  type="text"
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
               />
            </div>

            <div className="mt-4">
               <label className="block text-sm font-medium text-gray-600">
                  Description
               </label>
               <textarea
                  className="mt-1 p-2 w-full border rounded-md"
                  rows={4}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
               />
            </div>

            <div className="mt-4">
               <label className="block text-sm font-medium text-gray-600">
                  Keywords
               </label>
               <input
                  className="mt-1 p-2 w-full border rounded-md"
                  type="text"
                  value={keywords}
                  onChange={(e) => setKeywords(e.target.value)}
               />
            </div>

            <div className="mt-4">
               <a
                  href={data.file}
                  className="text-blue-500 text-sm"
                  target="_blank"
                  rel="noopener noreferrer"
               >
                  View Book File
               </a>
            </div>

            <div className="mt-4">
               <img
                  className="w-full rounded-lg"
                  src={data.cover_image}
                  alt={`${data.title} cover`}
               />
            </div>

            <div className="mt-4 flex flex-row">
               <SubmitButton loading={loading} onSubmit={handleSubmit} />
               <div className="ml-2">
                  <SubmitButton
                     loading={deleteLoading}
                     onSubmit={handleDelete}
                     label="Delete Book"
                     deleteBtn={true}
                  />
               </div>
            </div>
            <Toast
               type={toastMessage as any}
               message={
                  toastMessage === "success"
                     ? "Book Updated!"
                     : "Failed to update"
               }
               visible={showToast}
               onClose={() => setShowToast(false)}
            />
         </div>
      </>
   );
};

export default BookCard;

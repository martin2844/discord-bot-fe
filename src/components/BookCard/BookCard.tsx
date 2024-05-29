"use client";
import { useState } from "react";
import React from "react";

import CoverColumn from "../BookCard/CoverColumn";

import Header from "../BookCard/Header";
import Footer from "../BookCard/Footer";
import { Book } from "@/types/books";
import Description from "../BookCard/Description";
import MoreContent from "../BookCard/MoreContent";
import ActionsContent from "../BookCard/ActionsContent";
import CardWithModals from "../Generics/CardWithModals/CardWithModals";

const BookCard = ({ book }: { book: Book }) => {
   const [moreOpen, setMoreOpen] = useState(false);

   let makeShiftTitle = book.file.split("/").pop() as string;
   makeShiftTitle = makeShiftTitle.replace(/[_-]/g, " "); // replace "_" and "-" with space
   makeShiftTitle = makeShiftTitle.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
   });
   if (makeShiftTitle.length > 25)
      makeShiftTitle = makeShiftTitle.slice(0, 25) + "...";
   const title = book?.title || makeShiftTitle;

   const moreContent = (
      <MoreContent
         description={book?.description}
         keywords={book?.keywords}
         id={book.book_id}
      />
   );

   return (
      <>
         <CardWithModals
            actionsModalContent={<ActionsContent book={book} />}
            moreContentModal={moreContent}
            moreOpen={moreOpen}
            setMoreOpen={setMoreOpen}
         >
            <div className="mb-4 py-4 flex flex-row">
               <CoverColumn
                  bookId={book.book_id}
                  coverImage={book?.cover_image}
               />
               <div className="flex flex-col">
                  <Header title={title} author={book.author} />
                  <Description
                     text={book?.description || "sin descripcion"}
                     moreAction={() => setMoreOpen(true)}
                  />
               </div>
            </div>
            <div className="border-t -mx-8 px-8 py-4">
               <Footer
                  avatar={book.avatar}
                  name={book.name}
                  date={book.date}
                  subject={book?.subject}
               />
            </div>
         </CardWithModals>
      </>
   );
};

export default BookCard;

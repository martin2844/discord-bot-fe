"use client";
import { useState } from "react";
import React from "react";

import OptionsToggle from "./OptionsToggle";
import CoverColumn from "./CoverColumn";

import Header from "./Header";
import Footer from "./Footer";
import { Book } from "@/types/books";
import Modal from "../Modal/Modal";
import Description from "./Description";
import MoreContent from "./MoreContent";
import ActionsContent from "./ActionsContent";

const Card = ({ book }: { book: Book }) => {
   const [isOpen, setIsOpen] = useState(false);
   const [moreOpen, setMoreOpen] = useState(false);

   let makeShiftTitle = book.file.split("/").pop() as string;
   makeShiftTitle = makeShiftTitle.replace(/[_-]/g, " "); // replace "_" and "-" with space
   makeShiftTitle = makeShiftTitle.replace(/\w\S*/g, function (txt) {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
   });
   if (makeShiftTitle.length > 25)
      makeShiftTitle = makeShiftTitle.slice(0, 25) + "...";
   const title = book?.title || makeShiftTitle;

   return (
      <>
         <article className="px-8 bg-white border rounded-md shadow-md mt-4  relative">
            <OptionsToggle onClick={() => setIsOpen(true)} />
            <div className="mb-4 py-4 flex flex-row">
               <CoverColumn file={book.file} coverImage={book?.cover_image} />
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
         </article>
         <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
            <ActionsContent book={book} />
         </Modal>
         <Modal isOpen={moreOpen} setIsOpen={setMoreOpen}>
            <MoreContent
               description={book?.description}
               keywords={book?.keywords}
               id={book.book_id}
            />
         </Modal>
      </>
   );
};

export default Card;

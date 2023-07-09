type CardProps = {
   children: React.ReactNode;
};

const Card = ({ children }: CardProps) => {
   return (
      <article className="px-8 bg-white border rounded-md shadow-md mt-10 sm:mt-4  relative">
         {children}
      </article>
   );
};

export default Card;

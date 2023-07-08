import Rating from "../Generics/Rating/Rating";

const Header = ({ title, author }: { title: string; author?: string }) => {
   return (
      <header>
         <h3
            className="text-lg font-semibold"
            style={{
               wordWrap: "break-word",
               overflow: "hidden",
               textOverflow: "ellipsis",
               width: "100%",
               display: "-webkit-box",
               WebkitLineClamp: 2,
               WebkitBoxOrient: "vertical",
            }}
         >
            {title}
         </h3>
         <h4>de {author || "unknown"}</h4>
         <div className="-ml-1">
            <Rating rating={5} />
         </div>
      </header>
   );
};

export default Header;

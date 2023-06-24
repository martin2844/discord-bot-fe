import dynamic from "next/dynamic";

const BookGallery = dynamic(
   () => import("./components/BookGallery/BookGallery"),
   {
      loading: () => <p>Loading...</p>,
   }
);

const Home = async () => {
   return (
      <div className="flex flex-col items-center w-full">
         <BookGallery />
      </div>
   );
};

export default Home;

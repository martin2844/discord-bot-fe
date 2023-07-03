import dayjs from "dayjs";

type FooterProps = {
   avatar: string;
   name: string;
   date: string;
   subject?: string;
};

const Footer = ({ avatar, name, date, subject }: FooterProps) => {
   return (
      <footer className="flex flex-row items-center justify-between">
         <div className="flex flex-row items-center">
            <img className="w-8 h-8 rounded-full mr-2 border-2" src={avatar} />
            <p>
               Subido por
               <span className="font-semibold">&nbsp; {name}</span>
               &nbsp;el {dayjs(date).format("DD/MM/YYYY")}
            </p>
         </div>
         {subject && (
            <span className="text-sm border-indigo-500 border px-3 bg-indigo-200 rounded-lg cursor-pointer font-semibold">
               {subject}
            </span>
         )}
      </footer>
   );
};

export default Footer;

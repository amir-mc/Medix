import { Bookmark, Command,Pen, Group,Bell, Handshake, Home, HomeIcon, Lightbulb, MoreHorizontal, PersonStanding, Search, X, Twitter, LetterText, PlusCircleIcon, Network } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const Leftbar = () => {
    const menuLsit=[
        {
          id:1,
          name:'home',
          link:'/',
          icon:<HomeIcon/>   
        },
        {
            
            id:2,
            name:'search',
            link:'/',
            icon:<Search/>
        },
        {
            id:3,
            name:'ball',
            link:'/',
            icon:<Bell/>
        },
        {
            id:4,
            name:'gro',
            link:'/',
            icon:<Group/>
        },
        {
            id:11,
            name:'avatar',
            link:'/',
            icon:<PersonStanding></PersonStanding>
        },
        {
            id:12,
            name:'more',
            link:'/',
            icon:<MoreHorizontal/>
        }
    ]
    return  (
        <div className="h-screen sticky top-0 flex flex-col justify-between pt-2 pb-8">
          <div className="flex flex-col gap-4 text-lg items-center xxl:items-start">
            <Link href="/" className="p-2 rounded-full hover:bg-[#181818] ">
              <Twitter/>
            </Link>
            <div className="flex flex-col gap-4">
              {menuLsit.map((item) => (
                <Link
                  href={item.link}
                  className="p-2 rounded-full hover:bg-[#181818] flex items-center gap-4"
                  key={item.id}
                >
                  {item.icon}
                  <span className="hidden xxl:inline">{item.name}</span>
                </Link>
              ))}
            </div>
            <Link
              href="/compose/post"
              className="bg-white text-black rounded-full w-12 h-12 flex items-center justify-center xxl:hidden"
            >
              <LetterText/>
            </Link>
            <Link
              href="/compose/post"
              className="hidden xxl:block bg-white text-black rounded-full font-bold py-2 px-20"
            >
              Post
            </Link>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 relative rounded-full overflow-hidden">
                <Image src='/general/af.JPG' alt="profile" fill  />
              </div>
              <div className="hidden xxl:flex flex-col">
                <span className="font-bold">Amir</span>
                <span className="text-sm text-textGray">@AMIR</span>
              </div>
            </div>
            <div className="hidden xxl:block cursor-pointer font-bold">...</div>
          </div>
        </div>
      );
}
 
export default Leftbar;
import { Bookmark, Command,Pen, Group,Bell, Handshake, Home, HomeIcon, Lightbulb, MoreHorizontal, PersonStanding, Search, X, Twitter, LetterText, PlusCircleIcon } from "lucide-react";
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
    return ( 
        <div className="h-screen sticky top-0 flex flex-col justify-between pt-2 pb-8">
           <div className="flex flex-col gap-4 text-lg items-center xxl:items-start">
                <Link href="/">
                    <Twitter></Twitter>
                </Link>  
                <div className="flex flex-col gap-4 ">
                    {
                        menuLsit.map((list)=>(  
                                    <Link key={list.id} className="p-2 rounded-full hover:bg-gray-400 flex items-center gap-4 " href={list.link} >
                                     {list.icon}
                                    <span className="hidden xxl:inline">{list.name}</span>  
                                    </Link>
                        ))
                    }
                </div>
                <Link href='/' className="xxl:hidden text-black bg-white rounded-full py-2  px-20  items-center justify-center">
                <LetterText/>
                </Link>
                <Link href='/' className="hidden xxl:block text-black bg-white rounded-full py-2  px-20 ">
                POST
                </Link>
           </div>
           <div className="flex items-center justify-between">
                    <div className="felx items-center gap-2 ">
                        
                            <div className="w-10 h-10 relative rounded-full overflow-hidden">
                                <Image src='/general/af.JPG' alt="az " fill/>
                            </div>
                            <div className="hidden xxl:flex flex-col">
                                <span className="font-bold">AMIR</span>
                                <span className="text-sm text-gray-500">@amir</span>
                            </div>
                    </div>
                    <div className="hidden xxl:block cursor-pointer font-bold">
                            ...
                        </div>
           </div>
        </div>
     );
}
 
export default Leftbar;
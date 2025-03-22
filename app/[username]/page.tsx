import Feed from "@/components/feed";
import Imagetoolkit from "@/components/image";
import { Calendar, ExternalLinkIcon, ListTree, Mail, MapPin, MoreHorizontalIcon, PowerOff, Search } from "lucide-react";
import Link from "next/link";

const Username = () => {
    return ( 
        <div className="">
                <div className="flex items-center ">
                    <Link href='/'>
                     <ExternalLinkIcon/>
                    </Link>
                    <h1 className="font-bold text-lg">Lama Dev</h1>
                </div>
                <div className="relative w-full ">
                    <div className="w-full aspect-[3/1] relative">
                        <Imagetoolkit className='' path='general/postImg.jpeg' w={600} h={200} alt='ax' tr={true}/>
                    </div>

                    <div className="w-1/6  aspect-square rounded-full overflow-hidden border-4 border-black bg-gray-500  absolute left-4 -translate-y-1/2">
                        <Imagetoolkit className=''path="general/userImg.jpeg" w={100} h={100} alt='ax' tr={true}/>
                    </div>
                    <div className="flex w-full items-center justify-end gap-2 p-2 ">
                    <div className="w-9 h-9  flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
                        <MoreHorizontalIcon/>
                    </div>
                    <div className="w-9 h-9  flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
                        <Search/>
                    </div>
                    <div className="w-9 h-9  flex items-center justify-center rounded-full border-[1px] border-gray-500 cursor-pointer">
                        <Mail/>
                    </div>
                   
                        <button className="py-2 px-4 bg-white text-black font-bold rounded-full ">Follow</button>
                        </div>
                </div>
                <div className="p-4 flex flex-col gap-2 ">
                    <div className="">
                        <h2 className="text-2xl font-bold">Amir</h2>
                        <span className="text-gray-500 text-sm">@am_black_series</span>
                    </div>
                    <p>Amir Developer</p>
                    <div className="flex gap-4 text-gray-500 text-[15px]">
                            <div className="flex items-center gap-2">
                            <MapPin/>
                            <span>IRAN</span>
                           </div>
                           
                           <div className="flex items-center gap-2">
                            <Calendar/>
                            <span>joined in 2012</span>
                           </div>
                    </div>
                    <div className="flex gap-4 ">
                        <div className="flex items-center gap-2">
                            <span className="font-bold">100</span>
                            <span className="text-gray-500 text-[15px] ">Followrs</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="font-bold">100</span>
                            <span className="text-gray-500 text-[15px] ">Following</span>
                        </div>
                    </div>
                </div>
                <Feed/>
        </div>
     );
}
 
export default Username;
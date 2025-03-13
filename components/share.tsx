import { Calendar, Check, CheckCheck, CheckCircle, Gift, Image, List, LocateIcon, Option, OptionIcon, PaintRoller, Smile, SpellCheck } from "lucide-react";
import Imagetoolkit from "./image";

const Share = () => {
    return ( 
        <div className="p-4 flex gap-4">
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Imagetoolkit path='general/userImg.jpeg' alt='profile' w={100} h={100} />
                </div>
                <div className="flex-1 flex flex-col gap-4">
                    <input type="text" placeholder="Loking for somthing "  className="bg-transparent outline-none placeholder:text-gray-500"/>
                <div className="flex items-center justify-between gap-4 flex--wrap">
                    <div className="flex gap-4 flex-wrap">
                        <Image className="cursor-pointer"/>
                        <Gift className="cursor-pointer"/>
                        <List className="cursor-pointer"/>
                        <Smile className="cursor-pointer"/>
                        <Calendar className="cursor-pointer"/>
                        <LocateIcon className="cursor-pointer"/>
                    </div>
                    <button className="bg-white text-black font-bold rounded-full py-2 px-4">Post</button>
                </div>
                
                </div>
        </div>
     );
}
 
export default Share;
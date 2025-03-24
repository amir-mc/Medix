'use client'

import Imagetoolkit from "@/components/image";
import { Bold, CalendarCheck2, Gift, Image, ListPlus, MapPin, Smile } from "lucide-react";
import { useRouter } from "next/navigation";

const PostModal = () => {
  const router=useRouter()
  const closeModel=()=>{
    router.back()
  }
  return (
    <div className=" fixed w-screen h-screen top-0 left-0 z-20 bg-[#293139a6] flex justify-center">
      <div className="py-4 px-8 rounded-xl bg-black w-[600px] h-max mt-12">
        {/* TOP */}
        <div className="flex items-center justify-between">
          <div className="cursor-pointer" onClick={closeModel} >
            X
          </div>
          <div className="text-blue-500 font-bold">Drafts</div>
        </div>
        {/* CENTER */}
        <div className="py-8 flex gap-4">
          <div className="relative w-10 h-10 rounded-full overflow-hidden">
          <Imagetoolkit path='general/userImg.jpeg' alt='profile' w={100} h={100} tr={true} className='' />
          </div>
          <input
            className="flex-1 bg-transparent outline-none text-lg"
            type="text"
            placeholder="Share your idea?!"
          />
        </div>
        {/* BOTTOM */}
        <div className=" flex items-center justify-between gap-4 flex-wrap border-t border-borderGray pt-4">
          <div className="flex gap-4 flex-wrap">
              <Image/>
              <Gift/>
              <ListPlus/>
              <Smile/>
              <CalendarCheck2/>
              <MapPin/>
          </div>
          <button className="py-2 px-5 text-black bg-white rounded-full font-bold">Post</button>
        </div>
      </div>
    </div>
  );
};

export default PostModal;
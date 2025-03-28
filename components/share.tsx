'use client'
import { Calendar, Gift, Image, List, LocateIcon, Smile } from "lucide-react";
import Imagetoolkit from "./image";
import { useState } from "react";
import { ShareAction } from "@/action/action";
import  NextImage  from "next/image";
import ImageEditor from "./imageEditor";


const Share = () => {
    const  [media,setMedia]=useState<File | null>(null)
    const  [setEditoropen,setidEditoropen]=useState(false)
    const  [setting,setSetting]=useState<{
        type:"original" | "wide" | "square"
        sensitive:boolean   
    }>({
        type:"original",
        sensitive:false
    })
    const handleMedia=(e:React.ChangeEvent<HTMLInputElement>)=>{
        if(e.target.files && e.target.files[0]){
            setMedia(e.target.files[0])
        }
    }
    const PrviewImg=media ? URL.createObjectURL(media):null
    return ( 
        <form className="p-4 flex gap-4" action={formdata=>ShareAction(formdata,setting)}>
                <div className="relative w-10 h-10 rounded-full overflow-hidden">
                    <Imagetoolkit path='general/userImg.jpeg' alt='profile' w={100} h={100} tr={true} className='' />
                </div> 
                <div className="flex-1 flex flex-col gap-4">
                    <input type="text" name="des" placeholder="Looking for something "  className="bg-transparent outline-none placeholder:text-gray-500"/>
                {media?.type.includes("image") && PrviewImg &&
                    <div className="relative rounded-2xl overflow-hidden">
                        <NextImage   className={`w-full ${
                setting.type === "original"
                  ? "h-full object-contain"
                  : setting.type === "square"
                  ? "aspect-square object-cover"
                  : "aspect-video object-cover"
              }`}
               src={PrviewImg} alt="pre" width={600} height={600} />
                        <div  className="absolute left-2 top-2 bg-teal-300 opacity-60 cursor-pointer  rounded-4xl text-black font-bold py-1 px-3 " onClick={()=>setidEditoropen(true)}>Edit</div>
                    </div>
                }
                {
                    media?.type.includes('video') && PrviewImg &&
                    <div className="relative">

                    <video  src={PrviewImg} controls  />
                    <div className="absolute top-2 left-2  bg-black opacity-50 text-white h-8 w-8  flex items-center justify-between rounded-full cursor-pointer font-bold text-sm " onClick={()=>setMedia(null)} >X </div>
                    </div>
                }
                {
                    setEditoropen && PrviewImg && <ImageEditor
                     onClose={()=>setidEditoropen(false)} PrviewImg={PrviewImg} setting={setting} setSetting={setSetting}/>
                }
                <div className="flex items-center justify-between gap-4 flex-wrap">
                    <div className="flex gap-4 flex-wrap">
                        <input accept="image/*,video/*" type="file" name="file" onChange={handleMedia} className="hidden" id="input" />
                        <label htmlFor="input">
                        <Image  className="cursor-pointer"/>
                        </label>
                        <Gift className="cursor-pointer"/>
                        <List className="cursor-pointer"/>
                        <Smile className="cursor-pointer"/>
                        <Calendar className="cursor-pointer"/>
                        <LocateIcon className="cursor-pointer"/>
                    </div>
                    <button className="bg-white text-black font-bold rounded-full py-2 px-4">Post</button>
                </div>
                
                </div>
        </form>
     );
}
 
export default Share;
"use server"

import { imagekits } from "@/utils/utils";


export const ShareAction =async(formdata:FormData , setting:{type: "original" | "wide" | "square"; sensitive: boolean})=>{
    const file = formdata.get('file') as File
    const des = formdata.get('des') as String

    const bytes=await file.arrayBuffer()
    const buffer = Buffer.from(bytes)
    const transformation = `w-600 ${setting.type==="square" ? "ar-1-1" : setting.type==="wide" ? "ar-16-9": ""}`
    imagekits.upload(
        {
            file:buffer,
            fileName:file.name,
            folder:"/posts",
            transformation:{
                pre:transformation
            },
            customMetadata:{
                sensitive:setting.sensitive
            }
        },
        function(error,result){
            if(error) console.log(error)
                else console.log(result)
        }

    )

}
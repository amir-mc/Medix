import Image from "next/image";
import Imagetoolkit from "./image";
import PostDetails from "./postdetail";
import Posttraction from "./postinter";
import { imagekits } from "@/utils/utils";
import Videotool from "./video";
import Link from "next/link";
 interface FileDetailsResponse{
  filePath:string,
  height: number,
  width: number,
  url:string,
  fileType:string,
  customMetadata?:{sensitive: boolean}
 
 }
const PostList =  async() => {
    const getFileDetails= async( fileId:string):Promise<FileDetailsResponse>=>{
    return new Promise((resolve,reject)=>{
        imagekits.getFileDetails(fileId, function(error, result) {
            if(error) reject(error);
            else resolve(result as FileDetailsResponse);
        });
    })
}
const fileData=await getFileDetails('67d7d3bb432c4764163c5e6a')
 //console.log(fileData)
    return ( 

        <div className="p-4 border-y-1 border-gray-700">
                   
            <div className="flex items-center gap-2 text-sm text-gray-500 mb-2 font-bold">
                ico
                <span>Amir</span>
            </div>
            <div className="flex gap-4">
                <Imagetoolkit path="general/userImg.jpeg" alt='avatar' className=' rounded-full '  w={80} h={80} />
            </div>
            <div className="flex-1"> <Link href='/test/status/321'>
                <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2 flex-wrap">
                        <h1 className="text-md font-bold">  
                            AMir
                        </h1>
                        <span className="text-gray-500">@LAMA</span>
                        <span className="text-gray-500">1 day ogo</span>
                    </div>
                    
                    <PostDetails/>

                </div>

                <p>
                    Culpa proident commodo dolor nulla ullamco Lorem mollit proident qui dolore ullamco. Excepteur est pariatur veniam esse irure laborum cillum eiusmod aliqua ea sunt ea. Fugiat ipsum nulla mollit commodo sunt sint aliqua tempor aute excepteur et consectetur in aliqua. Occaecat tempor ad magna duis nostrud labore quis duis dolor ut fugiat. Dolor occaecat nisi commodo dolore nisi ea sint ex nulla.
                </p>
                </Link>
                {/* <Imagetoolkit path="general/postImg.jpeg" alt='avatar'  w={600} h={600} /> */}
                    { fileData  && fileData.fileType==='image' ? (<Imagetoolkit path={fileData.filePath} alt="ax" w={fileData.width} h={fileData.height}  />
                    ):<Videotool path={fileData.filePath} />
                    
                    }
            </div>
            <Posttraction/>
          
        </div>

     );
}
 
export default PostList;
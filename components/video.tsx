'use client'

import { IKVideo } from "imagekitio-next";

 type Viedotype={
    path:string,
    className?:string
 }  
   const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;
const Videotool = ({path,className}:Viedotype) => {


    return ( 
 
            <IKVideo urlEndpoint={urlEndpoint} path={path} className={className} controls 
            transformation={[{width:'1920',height:'1080',q:'90'}]}
            />
  
     );
}
 
export default Videotool;
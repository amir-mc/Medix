"use client";
import { IKImage } from "imagekitio-next";
type imagetype={

    path:string,
    width:string,
    height:string,
    alt:string,
    className:string,
    tr?:boolean
}
const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;
const Imagetoolkit = ({path,width,height,alt,tr,className}) => {
    return ( 
        <IKImage urlEndpoint={urlEndpoint}
        {...(tr?{transformation:[{width:width,height:height}]}
            :{width:width,height:height}
        )}
        path={path} className={className} alt={alt}/>
     );
}
 
export default Imagetoolkit;
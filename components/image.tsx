"use client";
import { IKImage } from "imagekitio-next";
type imagetype={

    path:string,
    w:number,
    h:number,
    alt:string,
    className:string,
    tr?:boolean
}
const urlEndpoint = process.env.NEXT_PUBLIC_URL_ENDPOINT;
const Imagetoolkit = ({path,w,h,alt,tr,className}:imagetype) => {
    return ( 
        <IKImage
      urlEndpoint={urlEndpoint}
      path={path}
      {...(tr
        ? { transformation: [{ width: `${w}`, height: `${h}` }] }
        : { width: w, height: h })}
      lqip={{ active: true, quality: 20 }}
      alt={alt}
      className={className}
    />
     );
}
 
export default Imagetoolkit;
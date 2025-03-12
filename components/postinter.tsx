'use client'
import { Bookmark, ChartNoAxesColumn, Heart, MessageCircle, Repeat2 } from "lucide-react";
import { useState } from "react";

const Posttraction = () => {
    const[active,Isactive]=useState(false)
    const[activeLove,IsactiveLove]=useState(false)
    return ( 
        <div className="col-4 mt-2 flex items-center justify-between  ">
            <div className=" cursor-pointer">
            <Bookmark   onClick={() => Isactive((prev) => !prev)}  className={active?'fill-white':''} />157
                
            </div>
            <div className=" cursor-pointer">

            <Heart onClick={() => IsactiveLove((prev) => !prev)}  className={`${activeLove?'fill-red-700':''}  hover:fill-red-700 transition delay-150 duration-300 ease-in-out `}/>200
            </div>
            <div className=" cursor-pointer">
            <Repeat2/> 45
            </div>
            <div className=" cursor-pointer">
            <MessageCircle/> 45
            </div>
            
            <ChartNoAxesColumn/>
        </div>
     );
} 
 
export default Posttraction;



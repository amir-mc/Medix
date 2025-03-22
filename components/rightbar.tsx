
import Link from "next/link";
import PopularTag from "./poptag";
import Recommended from "./recommenditems";
import Search from "./search";

const Rightbar = () => {
    return (  
        <div className="pt-1 flex flex-col gap-1 sticky top-0 h-max ">
            <Search/>
            <PopularTag/>
            <Recommended/>
            <div className="text-gray-500 text-sm flex gap-x-4 flex-wrap">
                <span>
                All Rights Reserved by <Link href='https://github.com/amir-mc' className="text-white text-xl" >Amir</Link>
                </span>
            </div>
        </div>
    ); 
}
 
export default Rightbar;
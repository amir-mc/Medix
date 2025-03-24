
import Comments from "@/components/comments";
import PostList from "@/components/post";
import { Undo2 } from "lucide-react";
import Link from "next/link";

const Status = () => {
    return ( 
        <div>
            <div className="flex items-center gap-8 sticky top-0 backdrop-blur-md p-4 z-10 bg-[#00000084]">
                <Link href='/'>
                    <Undo2/>
                </Link>
          
            <h1 className="font-bold text-lg">Post</h1>
              </div>
                <PostList/>
                <Comments/>
        </div>
     );
}
 
export default Status;
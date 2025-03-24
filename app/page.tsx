import Feed from "@/components/feed"
import Share from "@/components/share"
import Link from "next/link"



const Homepage = () => {

  return (
    <div>
      <div className="pt-4 px-4 flex justify-between text-gray-500 font-bold border-d-2 border-b-blue-700">
        <Link href="/" className="pb-3 flex items-center border-b-4 border-b-blue-700">For you</Link>
        <Link href="/" className="pb-3 flex items-center ">ALL</Link>
        <Link href="/" className="pb-3 flex items-center ">ALL</Link>

      </div>
<Share/>
<Feed/>

    </div>
     
  )
}

export default Homepage 
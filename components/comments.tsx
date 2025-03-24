import Imagetoolkit from "./image";
import Posttraction from "./postinter";
const text=[
    {
        id:1,
        text:'Ex ad ut fugiat ipsum nostrud adipisicing.'
    },
    {
        id:2,
        text:'Ex ad ut fugiat ipsum nostrud adipisicing.'
    },
    {
        id:3,
        text:'Ex ad ut fugiat ipsum nostrud adipisicing.'
    },
    {
        id:4,
        text:'Ex ad ut fugiat ipsum nostrud adipisicing.'
    },
    {
        id:5,
        text:'Ex ad ut fugiat ipsum nostrud adipisicing.'
    },
]
const Comments = () => {
    return ( 
        <div className="">
            <form className="flex items-center justify-between gap-4 p-4 ">
                <div className="relative w-10 h-10 rounded-full overflow-hidden ">
                <Imagetoolkit path='general/userImg.jpeg' alt='profile' w={100} h={100} tr={true} className='' />
                </div>
                <input type="text" className="flex-1 bg-transparent outline-none p-2 text-xl" placeholder="Reply message"/>
                <button className="py-2 px-4 font-bold bg-white text-black rounded-full ">Reply</button>
            </form>
 {
    text.map((item)=>(
            <div key={item.id} className="p-4 border-y-1 border-gray-700">
            
            <div className="flex gap-4">
              
                <Imagetoolkit path="general/userImg.jpeg" alt='avatar' className=' rounded-full '  w={80} h={80} />
                {item.text}
                {item.text}
            </div>            
        <Posttraction type='comment'/>
        </div>
         ))
        }
        </div>
     );
}   
 
export default Comments;
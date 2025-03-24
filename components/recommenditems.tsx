'use client'

import Link from "next/link";
import { useState } from "react";
import Imagetoolkit from "./image";

const Recommended = () => {
    type User = {
        id: number;
        name: string;
        username: string;
        avatar: string;
        isFollowing: boolean;
      };
    const [users] = useState<User[]>([
        {
          id: 1,
          name: 'Elon Musk',
          username: '@elonmusk',
          avatar: 'https://picsum.photos/200', // Placeholder image
          isFollowing: false,
        },
        {
          id: 2,
          name: 'Satya Nadella',
          username: '@satyanadella',
          avatar: 'https://picsum.photos/201',
          isFollowing: false,
        },
        
      ]);
    return ( 
                <div className="bg-black rounded-lg shadow-md p-2 w-80">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Who to follow</h2>
      <ul className="space-y-4">
        {users.map((user) => (
          <li key={user.id} className="flex items-center justify-between">
            <div className="flex items-center space-x-3 pb-2">
              
               <Imagetoolkit path="general/userImg.jpeg"    alt={`${user.name}'s avatar`} className='rounded-full'  w={50} h={50} />
              <div>
                <p className="font-semibold text-sm">{user.name}</p>
                <p className="text-sm text-gray-500">{user.username}</p>
              </div>
            </div>
            <button
             
              className={`px-4 py-1 rounded-full text-sm font-semibold transition-colors ${
                user.isFollowing
                  ? 'bg-transparent border border-gray-300 text-gray-700 hover:bg-red-50 hover:text-red-600'
                  : 'bg-black text-white hover:bg-gray-800'
              }`}
            >
              {user.isFollowing ? 'Unfollow' : 'Follow'}
            </button>
          </li>
        ))}
      </ul>
      <Link href='/' className="text-blue-400  ">Show more</Link>
    </div>
        
     );
}
 
export default Recommended;
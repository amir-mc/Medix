'use client'
import { SearchIcon } from "lucide-react";
import { useState } from "react";

const Search = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');

    const handleSearch = () => {
      // Implement your search logic here
      console.log('Searching for:', searchQuery);
    };
    return ( 
        <div className="flex items-center justify-center my-1">
        <input
          type="text"
          placeholder="Search..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="px-4 py-2 w-64 border border-gray-500 rounded-l-lg "
        />
        <button
          onClick={handleSearch}
          className="px-4 py-2 bg-gray-500 text-white font-semibold rounded-r-lg hover:bg-gray-700 focus:outline-none focus:ring-2 focus:bg-gray-700 focus:ring-opacity-50"
        >
          <SearchIcon/>
        </button>
      </div>
     );
}
 
export default Search;
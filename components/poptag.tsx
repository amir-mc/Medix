const PopularTag = () => {
    const tags = [
        { id: 1, name: '#ReactJS', count: 1234 },
        { id: 2, name: '#TailwindCSS', count: 987 },
        { id: 3, name: '#TypeScript', count: 765 },
        { id: 4, name: '#WebDevelopment', count: 543 },
        { id: 5, name: '#OpenAI', count: 321 },
      ];
    
      const handleTagClick = (tag: string) => {
        // Handle tag click (e.g., search for the tag)
        console.log('Clicked tag:', tag);
      };
    return ( 
        <div className="bg-black  rounded-lg shadow-md p-1 w-80">
      <h2 className="text-xl font-bold text-gray-800 mb-4">Popular Tags</h2>
      <ul className="space-y-3">
        {tags.map((tag) => (
          <li
            key={tag.id}
           
            className="flex justify-between items-center cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors"
          >
            <span className="text-blue-500 font-medium">{tag.name}</span>
            <span className="text-sm text-gray-500">{tag.count} posts</span>
          </li>
        ))}
      </ul>
    </div>
     );
}
 
export default PopularTag;
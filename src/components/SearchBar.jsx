import {Search} from "lucide-react";

const SearchBar=({value,onChange})=>
{
    return(
        <div className="flex items-center gap-3 bg-gray-900 rounded-full px-5 py-3 shadow-2xl">
            <Search size={20} className="text-gray-400"/>
            <input
                type="text"
                value={value}
                onChange={(e)=>onChange(e.target.value)}
                placeholder="Search for a movie..."
                className="w-full bg-transparent outline-none text-gray-100 placeholder:text-gray-500"/>
        </div>
    );
};
export default SearchBar;
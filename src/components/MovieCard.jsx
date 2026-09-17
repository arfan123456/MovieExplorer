import {Star,Calendar} from "lucide-react";

const MovieCard=({movie,onSeeDetails})=>
{
    const poster=movie.image?.medium||"https://placehold.co/210x295?text=No+Image";
    const year=movie.premiered?movie.premiered.slice(0,4):"N/A";
    const rating=movie.rating?.average??"N/A";
    return(
        <div className="bg-gray-900 rounded-2xl shadow-2xl overflow-hidden flex flex-col hover:scale-105 transition-all">
            <img
                src={poster}
                alt={movie.name}
                className="w-full h-72 object-cover"/>
            <div className="p-4 flex flex-col gap-2 flex-1">
                <h3 className="text-lg font-semibold text-gray-100 line-clamp-1">{movie.name}</h3>
                <div className="flex items-center gap-4 text-sm text-gray-400">
                    <span className="flex items-center gap-1">
                        <Star size={16} className="text-yellow-400"/>
                        {rating}
                    </span>
                    <span className="flex items-center gap-1">
                        <Calendar size={16}/>
                        {year}
                    </span>
                </div>
                <button
                    type="button"
                    onClick={()=>onSeeDetails(movie)}
                    className="mt-auto text-sm font-medium hover:scale-105 transition-all delay-500 bg-blue-500 cursor-pointer py-2 rounded-full text-gray-100">
                    See Details
                </button>
            </div>
        </div>
    );
};
export default MovieCard;
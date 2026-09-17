import {X,Star,Calendar} from "lucide-react";
import {stripHtml} from "../utils/strip-html";

const MovieModal=({movie,onClose})=>
{
    if(!movie) return null;
    const backdrop=movie.image?.original||movie.image?.medium||"https://placehold.co/640x360?text=No+Image";
    const genres=movie.genres?.length?movie.genres.join(", "):"N/A";
    const handleBackdropClick=(e)=>
    {
        if(e.target===e.currentTarget)
        {
            onClose();
        }
    };
    return(
        <div
            onClick={handleBackdropClick}
            className="fixed inset-0 z-50 flex justify-center items-center bg-gray-950/70 p-4">
            <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-2xl bg-gray-100 shadow-2xl">
                <div className="relative">
                    <img src={backdrop} alt={movie.name} className="w-full h-64 object-cover rounded-t-2xl"/>
                    <button
                        onClick={onClose}
                        className="absolute top-3 right-3 bg-gray-950/70 text-gray-100 rounded-full p-2 cursor-pointer hover:scale-105 transition-all">
                        <X size={20}/>
                    </button>
                </div>
                <div className="p-6 space-y-4">
                    <h2 className="text-2xl font-bold text-gray-900">{movie.name}</h2>
                    <div className="flex items-center gap-6 text-gray-700">
                        <span className="flex items-center gap-1 font-medium">
                            <Star size={18} className="text-yellow-500"/>
                            Rating:{movie.rating?.average??"N/A"}
                        </span>
                        <span className="flex items-center gap-1 font-medium">
                            <Calendar size={18}/>
                            Release:{movie.premiered||"N/A"}
                        </span>
                    </div>
                    <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                        <span><span className="font-semibold text-gray-800">Genre:</span>{genres}</span>
                        <span><span className="font-semibold text-gray-800">Status:</span>{movie.status||"N/A"}</span>
                        <span><span className="font-semibold text-gray-800">Network:</span>{movie.network?.name||"N/A"}</span>
                    </div>
                    <div>
                        <h3 className="font-semibold text-gray-800 mb-1">Overview:</h3>
                        <p className="text-gray-700 leading-relaxed">
                            {stripHtml(movie.summary)||"No overview available."}
                        </p>
                    </div>
                    <div className="flex justify-end">
                        <button
                            type="button"
                            onClick={onClose}
                            className="text-md font-medium hover:scale-105 transition-all delay-500 bg-blue-500 px-6 cursor-pointer py-2 rounded-full text-gray-100">
                            ❌ Close
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};
export default MovieModal;
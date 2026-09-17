import {Film} from "lucide-react";
import {useNavigate} from "react-router";

const Home=()=>
{
    const navigate=useNavigate();
    return(
        <div className="relative overflow-hidden bg-gradient-to-br from-gray-950 via-blue-950 to-purple-950">
            <div className="max-w-6xl mx-auto px-5 py-28 text-center">
                <div className="flex justify-center mb-4">
                    <Film size={48} className="text-blue-400"/>
                </div>
                <h1 className="text-4xl sm:text-6xl font-extrabold text-white">DISCOVER
                    <span className="text-blue-400">MOVIES</span>
                </h1>
                <p className="mt-4 text-md sm:text-lg text-gray-300 max-w-xl mx-auto">
                    Explore and discover your favorite movies and TV shows from around the world.
                </p>
                <div className="mt-8 flex justify-center">
                    <button
                        type="button"
                        onClick={()=>navigate("/movies")}
                        className="text-lg font-medium hover:scale-105 transition-all delay-500 bg-blue-500 px-8 cursor-pointer py-3 rounded-4xl text-gray-100">
                        Explore Now
                    </button>
                </div>
            </div>
        </div>
    );
};
export default Home;
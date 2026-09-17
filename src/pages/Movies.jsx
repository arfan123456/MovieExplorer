import {useEffect,useState} from "react";
import SearchBar from "../components/SearchBar";
import MovieCard from "../components/MovieCard";
import MovieModal from "../components/MovieModal";
import {getAllShows,searchShows} from "../services/get-shows";

const Movies=()=>{
    const [query,setQuery]=useState("");
    const [movies,setMovies]=useState([]);
    const [loading,setLoading]=useState(false);
    const [error,setError]=useState("");
    const [selectedMovie,setSelectedMovie]=useState(null);
    useEffect(()=>
    {
        const fetchAllShows=async()=>
        {
            setLoading(true);
            try
            {
                const result=await getAllShows();
                setMovies(result);
            }
            catch(err)
            {
                setError(err.message);
            }
            finally
            {
                setLoading(false);
            }
        };
        fetchAllShows();
    },[]);
    useEffect(()=>
    {
        const value=query.trim();
        const timeoutId=setTimeout(async()=>
        {
            setLoading(true);
            setError("");
            try
            {
                if(!value)
                {
                    const result=await getAllShows();
                    setMovies(result);
                }
                else
                {
                    const result=await searchShows(value);
                    setMovies(result);
                }
            }
            catch(err)
            {
                setError(err.message);
            }
            finally
            {
                setLoading(false);
            }
        },400);
        return ()=>clearTimeout(timeoutId);
    },[query]);
    return(
        <div className="max-w-6xl mx-auto px-5 py-10">
            <div className="max-w-xl mx-auto mb-10">
                <SearchBar value={query} onChange={setQuery}/>
            </div>
            {loading&&<p className="text-center text-gray-400">Loading movies...</p>}
            {error&&<p className="text-center text-red-500 font-medium">{error}</p>}
            {!loading&&!error&&movies.length===0&&
            (
                <p className="text-center text-gray-400">No movies found.</p>
            )}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {movies.map((movie)=>
                (
                    <MovieCard key={movie.id} movie={movie} onSeeDetails={setSelectedMovie}/>
                ))}
            </div>
            {selectedMovie&&
            (
                <MovieModal movie={selectedMovie} onClose={()=>setSelectedMovie(null)} />
            )}
        </div>
    );
};
export default Movies;
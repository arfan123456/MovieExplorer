import {Film} from "lucide-react";
import {NavLink} from "react-router";
const Navbar=()=>
{
    return(
        <header className="sticky top-0 z-40 bg-gray-950/80 backdrop-blur border-b border-gray-800">
            <div className="max-w-6xl mx-auto flex items-center justify-between px-5 py-4">
                <span className="flex items-center gap-2 text-xl font-bold text-blue-400">
                    <Film size={26}/>
                    MovieExplorer
                </span>
                <nav className="flex items-center gap-6">
                    <NavLink
                        to="/"
                        className={({isActive})=>`text-sm font-medium transition-colors ${isActive?"text-blue-400":"text-gray-300 hover:text-blue-400"}`}>
                        Home
                    </NavLink>
                    <NavLink
                        to="/movies"
                        className={({isActive})=>
                            `text-sm font-medium px-4 py-2 rounded-full transition-all ${
                                isActive?"bg-blue-500 text-white":"bg-gray-800 text-gray-200 hover:bg-blue-500 hover:text-white"}`}>
                        Movies
                    </NavLink>
                </nav>
            </div>
        </header>
    );
};
export default Navbar;
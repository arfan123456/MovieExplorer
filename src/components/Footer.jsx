import {ExternalLink,Film} from "lucide-react";

const Footer=()=>
{
    return(
        <footer className="border-t border-gray-800 bg-gray-950">
            <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 px-5 py-6">
                <p className="flex items-center gap-2 text-lg font-bold text-blue-400">
                    <Film size={22}/>
                    MovieExplorer
                </p>
                <p className="text-sm text-gray-400">© 2026 MovieExplorer. All rights reserved.</p>
                <a
                    href="https://github.com/arfan123456"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-400 hover:text-blue-400 transition-colors"
                >
                    <ExternalLink size={18}/>
                    GitHub
                </a>
            </div>
        </footer>
    );
};
export default Footer;
import { Link, NavLink } from 'react-router-dom';

const menu = [
    ['Home', '/'],
    ['About', '/about'],
    ['Programs', '/programs'],
    ['Insights', '/insights'],
    ['Inspiration', '/stories'],
    ['Resources', '/resources'],
    ['Contact', '/contact']
];

export default function Navbar() {
    return (
        <nav className="fixed top-4 left-0 right-0 z-50 px-6 md:px-12 lg:px-20">
            <div className="bg-[#060a13]/80 backdrop-blur-md border border-[#0a1120] rounded-full flex items-center justify-between py-3 px-6 shadow-lg shadow-[#00e5ff]/10">
                <div className="flex items-center gap-4">
                    <div className="text-white font-bold text-lg tracking-wider">
                        EM<span className="text-[#00e5ff]">Power</span>U
                    </div>
                </div>
                <div className="hidden md:flex items-center gap-2">
                    {menu.map(([label, to]) => (
                        <NavLink
                            key={label}
                            to={to}
                            className={({ isActive }) =>
                                `text-sm px-3 py-2 rounded-full transition-all duration-100 ${isActive
                                    ? 'text-white bg-[#00e5ff]/10 border border-[#00e5ff]/30'
                                    : 'text-slate-400 hover:text-white hover:bg-[#00e5ff]/5 '
                                }`
                            }
                        >
                            {label}
                        </NavLink>
                    ))}
                </div>
                <div className="flex items-center gap-3">
                    <button className="text-slate-400 hover:text-white text-sm px-4 py-2 rounded-full hover:bg-[#00e5ff]/5 border border-transparent hover:border-[#00e5ff]/20 transition-all duration-300">
                        Sign in
                    </button>
                    <button className="bg-linear-to-r from-[#00e5ff] to-[#0099cc] text-black px-6 py-2 rounded-full text-sm font-semibold hover:shadow-lg hover:shadow-[#00e5ff]/25 transition-all duration-300">
                        Join
                    </button>
                </div>
            </div>
        </nav>
    );
}

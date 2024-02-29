import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
const Navbar = () => {
    const location = useLocation();
    const isActive = (path) => location.pathname === path;
    const [showNav, setShowNav] = useState(false);

    const handleNav = (condition) => {
        setShowNav(!condition);
        console.log(condition);
    }
    return ( 
        <nav className="absolute top-0 left-0 right-0 bg-white border-b-2">
            <div className={`p-4 flex flex-row lg:justify-center items-center lg:gap-x-10 mx-auto max-w-6xl duration-300`}>
                <ul className="flex flex-row mr-auto lg:mr-0">
                    <li>
                    <i className="fa-solid fa-hands inline-block text-2xl text-gray-400 drop-shadow-md"></i>
                    <span className="h-full text-3xl drop-shadow-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">JanKen</span>
                    </li>
                </ul>
                <ul className="flex flex-row ml-auto lg:ml-0">
                    <li>
                        <NavLink to='/' className={
                        `px-4 py-2 text-lg font-semibold text-black hidden rounded-lg md:inline-block hover:bg-gray-400 hover:text-white mx-1 ${isActive('/') ? 'bg-gray-400 text-white shadow-sm ' : ''}`}>Game</NavLink>
                    </li>
                    <li>
                        <NavLink to='/history' className={`px-4 text-black py-2 text-lg hidden font-semibold rounded-lg md:inline-block hover:bg-gray-400 hover:text-white mx-1 ${isActive('/history') ? 'bg-gray-400 text-white shadow-sm' : ''}`}>History</NavLink>
                    </li>
                    <li>
                        <NavLink to='/about' className={`px-4 py-2 text-black text-lg hidden font-semibold rounded-lg md:inline-block hover:bg-gray-400 hover:text-white mx-1 ${isActive('/about') ? 'bg-gray-400 text-white shadow-sm' : ''}`}>About</NavLink>
                    </li>
                    <li className="inline-block md:hidden cursor-pointer">
                        <svg onClick={()=> setShowNav(!showNav)} xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30"><path d="M120-240v-80h720v80H120Zm0-200v-80h720v80H120Zm0-200v-80h720v80H120Z"/></svg>
                    </li>
                </ul>
                { showNav && <ul id="sidebar" className="fixed flex flex-col z-10 bg-white top-0 right-0 sm:w-[300px] h-screen w-full md:hidden duration-200">
                    
                    <li className="w-full h-12 flex flex-col justify-center">
                        <svg onClick={() => setShowNav(!showNav)} className="cursor-pointer" xmlns="http://www.w3.org/2000/svg" height="30" viewBox="0 -960 960 960" width="30"><path d="m256-200-56-56 224-224-224-224 56-56 224 224 224-224 56 56-224 224 224 224-56 56-224-224-224 224Z"/></svg>
                    </li>
                    <li className="w-full h-12 text-center">
                    <i className="fa-solid fa-hands inline-block text-2xl text-gray-400 drop-shadow-md"></i>
                    <span className="h-full text-3xl drop-shadow-lg font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">JanKen</span>
                    </li>
                    <li className="w-full h-12">
                        <NavLink to='/' className={
                        `w-full h-full inline-block text-lg font-semibold px-4 text-black py-2 hover:bg-gray-400 hover:text-white  ${isActive('/') ? 'bg-gray-400 text-white shadow-sm ' : ''}`}>Game</NavLink>
                    </li>
                    <li className="w-full h-12">
                        <NavLink to='/history' className={` w-full h-full inline-block px-4 text-black py-2 text-lg font-semibold hover:bg-gray-400 hover:text-white  ${isActive('/history') ? 'bg-gray-400 text-white shadow-sm' : ''}`}>History</NavLink>
                    </li>
                    <li className="w-full h-12">
                        <NavLink to='/about' className={`w-full h-full inline-block px-4 py-2 text-black text-lg font-semibold hover:bg-gray-400 hover:text-white  ${isActive('/about') ? 'bg-gray-400 text-white shadow-sm' : ''}`}>About</NavLink>
                    </li>
                </ul>
                }
            </div> 
        </nav>
    );
}
 
export default Navbar;
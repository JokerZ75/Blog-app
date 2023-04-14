import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faPaperPlane,faPersonRifle,faSun } from '@fortawesome/free-solid-svg-icons'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';
import { useEffect, useState } from 'react';

interface LinkElementProps {
    path: string;
    element: any;
}

const LinkElement = ({path, element}:LinkElementProps) => {
    return (
        <Link className='w-full h-full text-center' to={path}>
            {element}
        </Link>
    )
}

const NavBar = () => {
    const [theme, setTheme] = useState(localStorage.theme ?? true);
    useEffect (() => {
        localStorage.setItem("theme", theme);
        if (localStorage.getItem("theme") === 'true') {
          document.documentElement.classList.add("dark");
        } else if (localStorage.getItem("theme") === 'false') {
          document.documentElement.classList.remove("dark");
        }
    }, [theme])

    return (
        <>
        <nav className="w-screen h-32 fixed bottom-0 md:relative bg-slate-300 text-black flex justify-evenly dark:bg-slate-700 dark:text-white transition-colors duration-500 ">
            <LinkElement path="/" element={<FontAwesomeIcon className="w-2/6 h-2/6 mt-10" icon={faHouse} />} />
            <LinkElement path="/blogs" element={<FontAwesomeIcon className="w-2/6 h-2/6 mt-10" icon={faPaperPlane} />} />
            <LinkElement path="/profile" element={<FontAwesomeIcon className="w-2/6 h-2/6 mt-10" icon={faPersonRifle} />} />
            <button onClick={() => setTheme(!theme)} className='w-full h-full text-center'><FontAwesomeIcon className="w-2/6 h-2/6" icon={faSun} /></button>
        </nav>
        <Outlet />
        </>
    )
}

export default NavBar;
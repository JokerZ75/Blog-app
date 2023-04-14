import React from 'react';
import {Link, Outlet} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHouse, faPaperPlane } from '@fortawesome/free-solid-svg-icons'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro';

interface LinkElementProps {
    path: string;
    i: any;
}

const LinkElement = ({path, i}:LinkElementProps) => {
    return (
        <Link to={path}>
                {i}
        </Link>
    )
}

const NavBar = () => {
    return (
        <>
        <nav className="w-screen h-32 fixed bottom-0 md:relative bg-slate-600 text-white ">
            <LinkElement path="/" i={<FontAwesomeIcon icon={faHouse} />} />
            <LinkElement path="/blogs" i={<FontAwesomeIcon icon={faPaperPlane} />} />
        </nav>

        <Outlet />
        </>
    )
}

export default NavBar;
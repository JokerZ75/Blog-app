import React from 'react';
import NavBar from './Navbar';

const Layout = ({children}:any) =>{
    return (
        <div className="bg-slate-50 text-black dark:bg-slate-500 dark:text-white h-screen w-screen overflow-x-hidden relative">
            <NavBar />
            <main className="mb-36 md:mb-0">{children}</main>
        </div>
    )
}

export default Layout;
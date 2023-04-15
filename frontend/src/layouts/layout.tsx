import React from 'react';
import NavBar from './Navbar';

const Layout = ({children}:any) =>{
    return (
        <div>
            <NavBar />
            <main className="bg-slate-50 text-black dark:bg-slate-500 dark:text-white h-screen w-screen overflow-hidden">{children}</main>
        </div>
    )
}

export default Layout;
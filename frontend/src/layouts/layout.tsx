import React from 'react';
import NavBar from './Navbar';

const Layout = ({children}:any) =>{
    return (
        <div>
            <NavBar />
            <main>{children}</main>
        </div>
    )
}

export default Layout;
import React from 'react';
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";

function Layout({children}) {
    return (
        <div>
            <Navbar/>
            {children}
            <Footer/>
        </div>
    );
}

export default Layout;
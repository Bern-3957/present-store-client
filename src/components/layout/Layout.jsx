import React from "react";
import Upheader from "./Upheader/Upheader";
import Header from "./Header/Header"
import Footer from "./Footer/Footer";
import {Outlet} from "react-router-dom";

const Layout = (props) => {
    return (
        <div>
            <Upheader/>
            <Header/>
            <Outlet />
            <Footer/>
        </div>
    )
}


export default Layout
import React from "react";
import Header from "./Header/Header"
import Footer from "./Footer/Footer";
import {Outlet} from "react-router-dom";
import UpheaderContainer from "./Upheader/UpheaderContainer";

const Layout = (props) => {
    return (
        <div>
            <UpheaderContainer/>
            <Header/>
            <Outlet />
            <Footer/>
        </div>
    )
}


export default Layout
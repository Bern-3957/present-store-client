import React from "react";
import './App.css';
import Layout from "./components/layout/Layout";
import BigCarousel from "./components/BigCarousel/BigCarousel";
import Footer from "./components/layout/Footer/Footer";
import InfoBlock from "./components/Infoblock/Infoblock";
import {Route, Routes} from "react-router-dom";
import Catalog from "./components/Catalog/Catalog";


function App() {
    return (<div>
            <Layout/>
            <Routes>
                <Route path={'/index'} element={
                    <div className="index_page">
                        <div className="containerForBigCarousel"><BigCarousel/></div>
                        <div className="container"><InfoBlock/></div>
                    </div>
                }/>
                <Route path={'/firstcatalog'} element={<Catalog/>}/>
            </Routes>
            <Footer/>
        </div>

    );
}

export default App;

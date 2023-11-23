import React from "react";
import './App.css';
import Layout from "./components/layout/Layout";
import {Route, Routes} from "react-router-dom";
import BigCarousel from "./components/BigCarousel/BigCarousel";
import InfoBlock from "./components/Infoblock/Infoblock";
import {ROUTES} from "./utils/routes";
import Catalog from "./components/Catalog/Catalog";
import PRCatalog from "./components/PRCatalog/PRCatalog";


function App() {
    return (<div>
            {/*<Layout/>*/}
            <Routes>
                <Route path='/' element={<Layout/>}>
                    <Route index element={
                        <div className="index_page">
                            <div className="containerForBigCarousel"><BigCarousel/></div>
                            <div className="container"><InfoBlock/></div>
                        </div>
                    }/>
                    <Route path={ROUTES.CATALOG} element={<Catalog/>}/>
                    <Route path={ROUTES.PRCATALOG} element={<PRCatalog/>}/>
                    <Route path={`${ROUTES.PRCATALOG}/:category`} element={<PRCatalog/>}/>

                </Route>
            </Routes>

        </div>
    );
}

export default App;


// return (<div>
//         <Layout/>
//         <Routes>
//             <Route path={'/index'} element={
//                 <div className="index_page">
//                     <div className="containerForBigCarousel"><BigCarousel/></div>
//                     <div className="container"><InfoBlock/></div>
//                 </div>
//             }/>
//             <Route path={'/firstcatalog'} element={<Catalog/>}/>
//         </Routes>
//         <Footer/>
//     </div>
//
// );
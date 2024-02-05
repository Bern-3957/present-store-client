import React from "react";
import './App.css';
import Layout from "./components/layout/Layout";
import {Route, Routes} from "react-router-dom";
import BigCarousel from "./components/BigCarousel/BigCarousel";
import InfoBlock from "./components/Infoblock/Infoblock";
import {ROUTES} from "./utils/routes";
import Catalog from "./components/Catalog/Catalog";
import PRCatalog from "./components/PRCatalog/PRCatalog";
import ModalBaseContainer from "./components/Modals/modalBaseContainer";

import PersonalAreaContainer from "./components/PersonalArea/personalAreaContainer";
import CartContainer from "./components/Cart/CartContainer";
import {useSelector} from "react-redux";
// import WithAuth from "./hoc/withAuth";

function App() {
    const isModalActive = useSelector(state => state.modal.isModalActive)
    // const dispatch = useDispatch()
    //
    // useEffect(() => {
    //     const token = getToken()
    //     const isAuthenticated = !!token
    //
    //     if (isAuthenticated){
    //         debugger
    //         userAPI.aboutUser(token.value)
    //             .then((userInfo) => {
    //                     console.log('usetinfoooooooooo', userInfo)
    //                     dispatch(setUserInfoAC(userInfo.data))
    //                 }
    //             )
    //     }
    // }, []);

    return (<div className="app">
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
                    <Route path={`${ROUTES.PERSONAL_AREA}`} element={<PersonalAreaContainer/>}/>
                    <Route path={ROUTES.CART} element={<CartContainer/>}/>
                </Route>
            </Routes>
            {isModalActive && <ModalBaseContainer/>}
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
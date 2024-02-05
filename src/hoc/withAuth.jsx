// import React, { useState, useEffect } from 'react';
//
// import {getToken, removeToken} from "../customProvider/tokenProvider";
// import {useDispatch} from "react-redux";
// import {openModalAC} from "../store/actions/actionCreators";


// const WithAuth = (props) => {
//     debugger;
//     const dispatch = useDispatch()
//     const { children } = props;
//     const [isAuthenticated, setIsAuthenticated] = useState(false);
//
//     const openModal = (currentModalID)  =>{
//         dispatch(openModalAC(currentModalID))
//     }
//
//
//     useEffect(() => {
//         const checkToken = async () => {
//             try {
//                 const token = getToken();
//                 if (token) {
//                     setIsAuthenticated(true);
//                 } else {
//                     debugger
//                     openModal('auth-modal');
//                 }
//             } catch (err) {
//                 alert(
//                     `Не удалось загрузить токен доступа. Сейчас вы будете перенаправлены на страницу авторизации.`
//                 );
//                 openModal('auth-modal');
//             }
//         };
//
//         checkToken();
//     }, []);
//
//     let res = isAuthenticated ? children : null
//     if (res !== null) {
//         return <div>{res}</div>;
//     }
// };
//
// export default WithAuth;

// useEffect(() => {
//     const fetchToken = async () => {
//         try {
//
//             const token = getToken()
//             if (token){
//                 setIsAuthenticated(true);
//                 setTokenFetchingStatus(false);
//             }
//         } catch (err) {
//             alert(
//                 `Неудалось загрузить токен доступа. Сейчас вы будете перенаправлены на страницу авторизации. Details: ${msg}`
//             );
//
//         }
//     };
//
//     if (isTokenFetchingActive) {
//         const token = getToken();
//
//         if (token) {
//             setIsAuthenticated(true);
//             setTokenFetchingStatus(false);
//         } else {
//             fetchToken();
//         }
//     }
// }, [isTokenFetchingActive]);

// const AuthWrapper = ({ children }) => {
//     const dispatch = useDispatch()
//     const token = getToken()
//     const isAuthenticated = !!token
//
//     // if (typeof children === 'function') {
//     //     return children(isAuthenticated);
//     // }
//     //
//     // // В случае, если children не является функцией, возвращаем null или другое значение по умолчанию
//     // return null;
//
//     return (
//         <div>
//             {/* Возможно, здесь могут быть другие действия, связанные с авторизацией */}
//             {children(isAuthenticated)}
//         </div>
//     );
// };
//
// export default AuthWrapper;

import {createContext, useContext, useEffect, useState} from 'react';
import {getToken} from "../customProvider/tokenProvider";
import {userAPI} from "../api/api";
import {setIsAuthenticatedAC, setUserInfoAC} from "../store/actions/actionCreators";
import {useDispatch, useSelector} from "react-redux";

const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const dispatch = useDispatch()
    const isAuthenticated = useSelector(state => state.user.isAuthenticated)

    useEffect( () => {
        const token = getToken()
        if (token) {
            userAPI.aboutUser(token.value)
                .then((userInfo) => {
                        console.log('usetinfoooooooooo', userInfo)
                        dispatch(setUserInfoAC(userInfo.data))
                        dispatch(setIsAuthenticatedAC(true))
                    }
                )
        }
    }, []);

    // const isAuthenticated = !!token

    return (
        <AuthContext.Provider value={{isAuthenticated}}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    return useContext(AuthContext);
};

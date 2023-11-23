// import { Suspense, lazy } from "react";
// // Коренные компоненты для основных разделов сайта
// const AppRoutes = lazy(() => import("./components/Routes/Routes"));
//
// // Отдельно вынес роуты, чтобы уменьшить вложенность
// const clientRoutes: RouteObject[] = [
//     // {
//     //     path: "",
//     //     element: (
//     //         <Suspense>
//     //             <Main />
//     //         </Suspense>
//     //     ),
//     // },
//     // {
//     //     path: "about",
//     //     element: (
//     //         <Suspense>
//     //             <About />
//     //         </Suspense>
//     //     ),
//     // },
//     {
//         path: "",
//         element: (
//             <Suspense>
//                 <AppRoutes />
//             </Suspense>
//         ),
//     }
//
// ];
//
// export const router = createBrowserRouter([
//     {
//         path: "/",
//         element: <Index />,
//         errorElement: (
//             <Suspense>
//                 <Error />
//             </Suspense>
//         ),
//         children: [
//             {
//                 path: "",
//                 element: (
//                     <Suspense>
//                         <Client />
//                     </Suspense>
//                 ),
//                 children: clientRoutes,
//             },
//             {
//                 path: "admin",
//                 element: (
//                     <Suspense>
//                         <Outlet />
//                     </Suspense>
//                 ),
//                 children: adminRoutes,
//             },
//         ],
//     },
// ]);
// export default router;

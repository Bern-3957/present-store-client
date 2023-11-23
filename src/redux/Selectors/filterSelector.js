
// selectors.js

// -------------------мой код
export const getFilteredProducts = (state) => {
    const { products, sideBar } = state.prCatalogPage;
    const activeConsistsCh  = sideBar.present_consists.filter(ch=> ch.isActive)
    const activePurposesCh  = sideBar.purposes.filter(ch=> ch.isActive)
    const activePackagesCh  = sideBar.packages.filter(ch=> ch.isActive)

    let activeCatIds = sideBar.categories.filter(category => category.isActive).map(category => category.id);
    // если будет выбрана категория с id=1 "Все подарки" то возвращаем все товары
    if (activeCatIds[0] === 1){
        const commonProducts = [];
        debugger;
        if (activeConsistsCh.length !== 0 && activeConsistsCh[0].id === 1){
            commonProducts.push(...products.filter(p=>p.isEdible))
        } else if(activeConsistsCh.length !== 0 && activeConsistsCh[0].id === 2){
            commonProducts.push(...products.filter(p=>p.isEdible===false))
        }
        if (activePackagesCh.length !== 0 && activePackagesCh[0].id === 1){
            commonProducts.push(...products.filter(p=>p.packing_id===1))
        } else if(activePackagesCh.length !== 0 && activePackagesCh[0].id === 2){
            commonProducts.push(...products.filter(p=>p.packing_id===2))
        }else if(activePackagesCh.length !== 0 && activePackagesCh[0].id === 3){
            commonProducts.push(...products.filter(p=>p.packing_id===3))
        }else if(activePackagesCh.length !== 0 && activePackagesCh[0].id === 4){
            commonProducts.push(...products.filter(p=>p.packing_id===4))
        }
        if (activePurposesCh.length !== 0 && activePurposesCh[0].id === 1){
            commonProducts.push(...products.filter(p=>p.purpose_id===1))
        } else if(activePurposesCh.length !== 0 && activePurposesCh[0].id === 2){
            commonProducts.push(...products.filter(p=>p.purpose_id===2))
        }else if(activePurposesCh.length !== 0 && activePurposesCh[0].id === 3){
            commonProducts.push(...products.filter(p=>p.purpose_id===3))
        }else if(activePurposesCh.length !== 0 && activePurposesCh[0].id === 4){
            commonProducts.push(...products.filter(p=>p.purpose_id===4))
        }
        if(commonProducts.length!==0){
            return commonProducts
        } else {
            return products
        }
    }

    const pr_c = products.filter(product => {
        // Возвращаем true, если категория продукта входит в массив активных категорий
        return activeCatIds.includes(product.category_id);
    });
    if (activeConsistsCh.length !== 0 && activeConsistsCh[0].id === 1){
        return pr_c.filter(p=>p.isEdible)
    } else if(activeConsistsCh.length !== 0 && activeConsistsCh[0].id === 2){
        return pr_c.filter(p=>p.isEdible===false)
    }
    if (activePackagesCh.length !== 0 && activePackagesCh[0].id === 1){
        return pr_c.filter(p=>p.packing_id===1)
    } else if(activePackagesCh.length !== 0 && activePackagesCh[0].id === 2){
        return pr_c.filter(p=>p.packing_id===2)
    }else if(activePackagesCh.length !== 0 && activePackagesCh[0].id === 3){
        return pr_c.filter(p=>p.packing_id===3)
    }else if(activePackagesCh.length !== 0 && activePackagesCh[0].id === 4){
        return pr_c.filter(p=>p.packing_id===4)
    }

    if (pr_c.length === 0){return []} else {return pr_c}
};





// ---------------------------------------------------------Код чат-jpt
// export const getFilteredProducts = (state) => {
//     const { products, sideBar } = state.prCatalogPage;
//
//     const activeConsistsCh = sideBar.present_consists.filter(ch => ch.isActive);
//     const activePurposesCh = sideBar.purposes.filter(ch => ch.isActive);
//     const activePackagesCh = sideBar.packages.filter(ch => ch.isActive);
//
//     const activeCatIds = sideBar.categories.filter(category => category.isActive).map(category => category.id);
//
//     return products.filter(product => {
//         // Фильтрация по категории
//         if (activeCatIds.length > 0 && !activeCatIds.includes(product.category_id)) {
//             return false;
//         }
//
//         // Фильтрация по составу
//         if (activeConsistsCh.length > 0 && !activeConsistsCh.some(ch => ch.id === (product.isEdible ? 1 : 2))) {
//             return false;
//         }
//
//         // Фильтрация по упаковке
//         if (activePackagesCh.length > 0 && !activePackagesCh.some(ch => ch.id === product.packing_id)) {
//             return false;
//         }
//
//         // Фильтрация по назначению
//         if (activePurposesCh.length > 0 && !activePurposesCh.some(ch => ch.id === product.purpose_id)) {
//             return false;
//         }
//
//         return true;
//     });
// };


// return products.filter((product) => {
//     // Фильтрация по категории
//     const categoryIsActive =
//         !sideBar.categories || !sideBar.categories.length ||
//         !sideBar.category ||
//         product.category_id === sideBar.category;
//
//     // Фильтрация по составу
//     const checkboxIsActive =
//         !sideBar.present_consists || !sideBar.present_consists.length ||
//         !sideBar.checkbox ||
//         (product.isEdible && sideBar.present_consists[0].isActive) ||
//         (!product.isEdible && sideBar.present_consists[1].isActive);
//
//     // Фильтрация по назначению
//     const purposeIsActive =
//         !sideBar.purposes || !sideBar.purposes.length ||
//         !sideBar.purpose ||
//         sideBar.purposes.find((purpose) => purpose.id === sideBar.purpose)
//             .isActive;
//
//     // Фильтрация по упаковке
//     const packageIsActive =
//         !sideBar.packages || !sideBar.packages.length ||
//         !sideBar.package ||
//         sideBar.packages.find((pack) => pack.id === sideBar.package).isActive;
//
//     return categoryIsActive && checkboxIsActive && purposeIsActive && packageIsActive;
// });

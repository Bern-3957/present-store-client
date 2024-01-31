
export const getFilteredProducts = (all_products, activeCategory, activeFilters, activeEdible, activeSortSelect) => {

    function checkingCheckboxes(products, activeFilters, activeEdible) {
        let afterEdiblePr = []

        if (activeEdible === true) {
            afterEdiblePr = products.filter(pr => pr.is_edible)
        } else if (activeEdible === false) {
            afterEdiblePr = products.filter(pr => !pr.is_edible)
        } else {
            afterEdiblePr = [...products]
        }

        let afterPurposeCheckboxesPr = [];

        if (activeFilters.purposes.length !== 0) {
            afterPurposeCheckboxesPr = afterEdiblePr.filter(product =>
                product.purpose && activeFilters.purposes.includes(product.purpose)
            );
        } else {
            afterPurposeCheckboxesPr = afterEdiblePr
        }

        let afterPackageCheckboxesPr = [];
        if (activeFilters.packages.length !== 0){
            afterPackageCheckboxesPr = afterPurposeCheckboxesPr.filter(product =>
                product.package && activeFilters.packages.includes(product.package)
            );
        }else {
            afterPackageCheckboxesPr = afterPurposeCheckboxesPr
        }
        return afterPackageCheckboxesPr


    }

    function sortBySelect(products, selectID) {

        switch (selectID) {
            // По умолчанию
            case 1:
                return products
            // По убыванию
            case 2:
                return products.sort((a, b) => {
                    let priceA = a.price;
                    let priceB = b.price;
                    return priceB - priceA
                })
            // По возрастанию
            case 3:
                return products.sort((a, b) => {
                    let priceA = a.price;
                    let priceB = b.price;
                    return priceA - priceB
                })
            default:
                return products
        }
    }

    if (activeCategory === null) {
        return sortBySelect(checkingCheckboxes(all_products, activeFilters, activeEdible), activeSortSelect)
    } else if (activeCategory) {
        let products = all_products.filter(pr => pr.category_id === activeCategory ? pr : '')
        if (activeCategory === 1) {
            products = all_products
        }
        return sortBySelect(checkingCheckboxes(products, activeFilters, activeEdible), activeSortSelect)
    }
};




// export const getFilteredProducts = (all_products, activeCategory, activeFilters, activeEdible, activeSortSelect) => {
//     debugger;
//
//     function checkingCheckboxes(products, activeFilters, activeEdible) {
//         debugger;
//         let afterEdiblePr = []
//         if (activeEdible === true) {
//             afterEdiblePr = products.filter(pr => pr.is_edible)
//         } else if (activeEdible === false) {
//             afterEdiblePr = products.filter(pr => pr.is_edible === false)
//         } else {
//             afterEdiblePr = [...products]
//         }
//
//         // let afterLastCheckboxesPr = [];
//         // if (activeFilters.length !== 0) {
//         //     let foundMatch = false;
//         //
//         //     for (let pr of afterEdiblePr) {
//         //         for (let filter_id of activeFilters) {
//         //             if (pr.filterIDs.includes(filter_id)) {
//         //                 afterLastCheckboxesPr.push(pr)
//         //                 foundMatch = true;
//         //             }
//         //             if (pr.purpose !== null && pr.purpose === filter_id){
//         //                 afterLastCheckboxesPr.push(pr)
//         //                 foundMatch = true;
//         //             }
//         //         }
//         //     }
//         //     if (!foundMatch) {
//         //         return [];
//         //     }
//         // } else {
//         //     afterLastCheckboxesPr = afterEdiblePr
//         // }
//         // return afterLastCheckboxesPr;
//         debugger
//         let afterPurposeCheckboxesPr = [];
//
//         if (activeFilters.purposes.length !== 0) {
//             afterPurposeCheckboxesPr = afterEdiblePr.filter((product) => {
//                 if (product.purpose && activeFilters.purposes.includes(product.purpose)) {
//                     return true
//                 }
//             });
//         } else {
//             afterPurposeCheckboxesPr = afterEdiblePr
//         }
//
//         let afterPackageCheckboxesPr = [];
//         if (activeFilters.packages.length !== 0){
//             afterPackageCheckboxesPr = afterPurposeCheckboxesPr.filter((product) => {
//                 if (product.package && activeFilters.packages.includes(product.package)) {
//                     return true
//                 }else {
//                     return false
//                 }
//             });
//         }else {
//             afterPackageCheckboxesPr = afterPurposeCheckboxesPr
//         }
//         return afterPackageCheckboxesPr
//
//
//     }
//
//     function sortBySelect(products, selectID) {
//
//         switch (selectID) {
//             // По умолчанию
//             case 1:
//                 return products
//             // По убыванию
//             case 2:
//                 return products.sort((a, b) => {
//                     let priceA = a.price;
//                     let priceB = b.price;
//                     return priceB - priceA
//                 })
//             // По возрастанию
//             case 3:
//                 return products.sort((a, b) => {
//                     let priceA = a.price;
//                     let priceB = b.price;
//                     return priceA - priceB
//                 })
//             default:
//                 return products
//         }
//     }
//
//     if (activeCategory === null) {
//         return sortBySelect(checkingCheckboxes(all_products, activeFilters, activeEdible), activeSortSelect)
//     } else if (activeCategory) {
//         let products = all_products.filter(pr => pr.category_id === activeCategory ? pr : '')
//         if (activeCategory === 1) {
//             products = all_products
//         }
//         return sortBySelect(checkingCheckboxes(products, activeFilters, activeEdible), activeSortSelect)
//     }
// };
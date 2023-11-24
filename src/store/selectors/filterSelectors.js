
export const getFilteredProducts = (all_products, activeCategory, activeFilters, activeEdible) => {
    let currentProducts = all_products.filter(pr=>pr.category_id===activeCategory ? pr : '')

    if (activeEdible===true){
        currentProducts = currentProducts.filter(pr=>pr.isEdible)
    } else if (activeEdible===false){
        currentProducts = currentProducts.filter(pr=>pr.isEdible===false)
    } else {
        currentProducts = [...currentProducts]
    }

    debugger;
    let totalProducts = [];
    if (activeFilters.length!==0){
        let foundMatch = false;

        for (let pr of currentProducts){
            for (let filter_id of activeFilters){
                if (pr.filterIDs.includes(filter_id)){
                    totalProducts.push(pr)
                    foundMatch = true;
                }
            }
        }
        if (!foundMatch) {
            return [];
        }
    }

    if (totalProducts.length === 0){
        return currentProducts;
    }
    else {
        return totalProducts;
    }

};
















// export const getFilteredProducts = (all_products, activeCategory, activeFilters, activeEdible) => {
//     let currentProducts = all_products.filter(pr => pr.category_id === activeCategory ? pr : '');
//
//     if (activeEdible) {
//         currentProducts = currentProducts.filter(pr => pr.isEdible);
//     }else if (activeEdible===false){
//         currentProducts = currentProducts.filter(pr=>pr.isEdible===false)
//     } else {
//         currentProducts = [...currentProducts]
//     }
//
//     let totalProducts = [];
//     if (activeFilters.length !== 0) {
//         let foundMatch = false; // Флаг для отслеживания наличия хотя бы одного соответствия
//
//         for (let pr of currentProducts) {
//             for (let filter_id of activeFilters) {
//                 if (pr.filterIDs.includes(filter_id)) {
//                     totalProducts.push(pr);
//                     foundMatch = true;
//                     // Можно использовать break, если вы хотите прекратить проверку фильтров после первого соответствия
//                 }
//             }
//         }
//
//         if (!foundMatch) {
//             return [];
//         }
//     }
//
//     return totalProducts.length === 0 ? currentProducts : totalProducts;
// };

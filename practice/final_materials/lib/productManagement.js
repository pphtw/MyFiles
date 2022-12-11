import { Product } from "./product.js";

function productManagement(){
    let productList = [];
    function addProduct(item, amount){
        const newItem = new Product(item, amount)
        productList.push(newItem)
        return newItem.id
    }

    function getProductList(){
        return productList;
    }

    function clearProduct(){
        return productList = []
    }

    function getNumberOfPending(){
        return productList.filter(e => e.status === false).length
    }

    function getNumberOfDone(){
        return productList.filter(e => e.status === true).length
    }

    function setDoneItem(itemId){
        return productList.find(e => e.id === Number(itemId)).setDone()
    }

    return {addProduct, getProductList, clearProduct, getNumberOfPending, getNumberOfDone, setDoneItem}
}

export {productManagement}
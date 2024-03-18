import {sendHTTPRequest} from './script.js';
import { addProductToContainer } from './function.js';
const productsURL = 'https://fakestoreapi.com/products';

sendHTTPRequest('GET', productsURL)
    .then(productData=>{
    const filteredProducts = productData.filter(product => product.category == "jewelery")
    document.getElementById('container').innerHTML = ''; //clear container
    for(let i=0; i<filteredProducts.length; i++)
    {
        addProductToContainer(filteredProducts[i].title, filteredProducts[i].price, filteredProducts[i].description, filteredProducts[i].category, filteredProducts[i].image, filteredProducts[i].rating.rate, filteredProducts[i].rating.count)
    }
})

//sort by price functions
const sortByPriceAsc = ()=>{
    sendHTTPRequest('GET', productsURL)
    .then(productData=>{
    const filteredProducts = productData.filter(product => product.category == "jewelery")   
    filteredProducts.sort((a,b)=>a.price < b.price ? -1: 1);
    document.getElementById('container').innerHTML = ''; //clear container
    for(let i=0; i<filteredProducts.length; i++)
    {
        addProductToContainer(filteredProducts[i].title, filteredProducts[i].price, filteredProducts[i].description, filteredProducts[i].category, filteredProducts[i].image, filteredProducts[i].rating.rate, filteredProducts[i].rating.count)
    }
})
}
const sortByPriceDesc = ()=>{
    sendHTTPRequest('GET', productsURL)
    .then(productData=>{
        const filteredProducts = productData.filter(product => product.category == "jewelery")   
        filteredProducts.sort((a,b)=>a.price > b.price ? -1: 1);
        document.getElementById('container').innerHTML = ''; //clear container
        for(let i=0; i<filteredProducts.length; i++)
        {
            addProductToContainer(filteredProducts[i].title, filteredProducts[i].price, filteredProducts[i].description, filteredProducts[i].category, filteredProducts[i].image, filteredProducts[i].rating.rate, filteredProducts[i].rating.count)
        }
})
}
//sort buttons
document.getElementById('sortAsc').addEventListener('click',()=>{
    sortByPriceAsc();
})
document.getElementById('sortDesc').addEventListener('click',()=>{
    sortByPriceDesc();
})
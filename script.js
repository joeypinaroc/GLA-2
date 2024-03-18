import { addProductToContainer } from "./function.js";
const productsURL = 'https://fakestoreapi.com/products';

const sendHTTPRequest = (method, url)=>{
    return new Promise(function(resolve, reject){
        var xhr = new XMLHttpRequest();
        xhr.onload = function(){
            if(xhr.status >= 300)
            {
                reject(`Error, status code ${xhr.status}: ${xhr.statusText}`);
            }
            else
            {
                let data = JSON.parse(xhr.response);
                resolve(data);
            }
        }
        xhr.open(method, url);
        xhr.send();
    })
}
//get data and show on page
sendHTTPRequest('GET', productsURL)
.then(productData=>{
    productData.sort((a,b)=>a.id < b.id ? -1: 1);
    for(let i=0; i<productData.length; i++)
    {
        addProductToContainer(productData[i].title, productData[i].price, productData[i].description, productData[i].category, productData[i].image, productData[i].rating.rate, productData[i].rating.count)
    }
})

//sort by price functions
const sortByPriceAsc = ()=>{
    sendHTTPRequest('GET', productsURL)
    .then(productData=>{
    productData.sort((a,b)=>a.price < b.price ? -1: 1);
    document.getElementById('container').innerHTML = ''; //clear container
    for(let i=0; i<productData.length; i++)
    {
        addProductToContainer(productData[i].title, productData[i].price, productData[i].description, productData[i].category, productData[i].image, productData[i].rating.rate, productData[i].rating.count)
    }
})
}
const sortByPriceDesc = ()=>{
    sendHTTPRequest('GET', productsURL)
    .then(productData=>{
    productData.sort((a,b)=>a.price > b.price ? -1: 1);
    document.getElementById('container').innerHTML = ''; //clear container
    for(let i=0; i<productData.length; i++)
    {
        addProductToContainer(productData[i].title, productData[i].price, productData[i].description, productData[i].category, productData[i].image, productData[i].rating.rate, productData[i].rating.count)
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

//filter
//show dropdown menu on click
document.getElementsByClassName('dropdownBtn')[0].addEventListener('click', ()=>{
    document.getElementById('navDropdown').classList.toggle('show');
})
document.getElementsByClassName('dropdownBtn')[1].addEventListener('click', ()=>{
    document.getElementById('dropdownMenu').classList.toggle('show');
})

export {sendHTTPRequest}

// //filter functions
// const filterByMens = ()=>{
//     sendHTTPRequest('GET', productsURL)
//     .then(productData=>{
//     const filteredProducts = productData.filter(product => product.category == "men's clothing")
//     document.getElementById('container').innerHTML = ''; //clear container
//     for(let i=0; i<filteredProducts.length; i++)
//     {
//         addProductToContainer(filteredProducts[i].title, filteredProducts[i].price, filteredProducts[i].category, filteredProducts[i].description, filteredProducts[i].image, filteredProducts[i].rating.rate, filteredProducts[i].rating.count)
//     }
// })
// }
// //filter on button click
// document.getElementById('filterByMens').addEventListener('click', ()=>{
//     filterByMens();
// })
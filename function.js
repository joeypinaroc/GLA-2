function addProductToContainer(title, price, description, category, imageURL, rating, count){
    document.getElementById('container').innerHTML +=
        `<div class='productCard'>
            <h2>${title}</h2>
            <img src=${imageURL} width='200px>'
            <h4>Category: ${category}</h4>
            <h4>Price: $${price}</h4>
            <p class='desc'>${description}</p>
            <div class='ratings'>
            <p class='rating'>Average Rating: ${rating}</p>
            <p class='ratingCount'>Ratings: ${count}</p>
            </div>
        </div>`
}

export {addProductToContainer};
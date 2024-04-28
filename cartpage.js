let cartdata = JSON.parse(localStorage.getItem('cartdata'));
console.log(cartdata);
let mainblock = document.getElementById('main-block');
let totalprice=0;
cartdata.forEach(element => {
    totalprice+=element.price;
    let div=document.createElement('div')
    div.innerHTML = `
    <img src=${element.image}>
    <h2>${element.title}</h2>
    <p>Price : ${element.price}</p>`
    mainblock.appendChild(div)
});
let price=document.createElement('h2')
price.innerText=`Total Price : ${totalprice}`
mainblock.appendChild(price);

// localStorage.clear();
// move hamburger menu

const hamburger = document.querySelector(".hamburger");
const listItems = document.querySelector(".right-list");
hamburger.addEventListener('click', () =>{
    listItems.classList.toggle('list-show');
})


// menu i
const buttonI = document.querySelector(".fa-info-circle");
const contentPd = document.querySelector(".product-4-1");
const iconFafaI = document.querySelector(".icon-fafa-i");
const titleFafaI = document.querySelector(".title-product-i");

buttonI.addEventListener("click", () =>{
    contentPd.classList.toggle("product-4-1-animation");
    iconFafaI.classList.toggle("icon-fafa-show");
    titleFafaI.classList.toggle("title-product-show");
})
// dropdown menu
const arrow = document.querySelectorAll(".fa-caret-down");
const content = document.querySelectorAll(".items-li");

for(let i = 0; i < arrow.length; i++){
    arrow[i].addEventListener("click", () =>{
        content[i].classList.toggle("items-li-show");
    })
}
// menu normal
const contentAll = document.querySelectorAll(".pd-1, .pd-2, .products-2, .products-3, .product-4-2");
const fafaAll = document.querySelectorAll(".icon-fafa-a");
const titlePda = document.querySelectorAll(".title-pd-a");
const picture = document.querySelectorAll(".img-pds1, .products-2 img, .products-3 img, .product-4-2 .first-picture");
for(let a = 0; a < contentAll.length; a++){
    picture[a].addEventListener("click", () =>{
        contentAll[a].classList.toggle("product-4-1-animation");
        fafaAll[a].classList.toggle("icon-fafa-show");
        titlePda[a].classList.toggle("title-product-show");
    })
}
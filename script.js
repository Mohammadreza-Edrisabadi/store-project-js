const request = new XMLHttpRequest();
request.open("GET", " https://fakestoreapi.com/products");
request.send();
let products = null;


request.addEventListener("load", getData)


function getData() {

   const data = JSON.parse(request.responseText)
   products = data
   render(data)
}


function render(list) {
   const template = list.map(function (products) {
      return `
    <div class="products">
    <img class=products-image src="${products.image}" alt="">
    <h2 class=products-title>${products.title}</h2>
    <p class=products-price>${products.price}$</p>
    </div>
     
    `
   });
   document.getElementById("products").innerHTML = template.join("");


}


function filterByButton(btnFilter) {

   if (btnFilter === 1) {
      btnFilter = "jewelery"
   }
   if (btnFilter === 2) {
      btnFilter = "men's clothing"
   }
   if (btnFilter === 3) {
      btnFilter = "electronics"
   }
   if (btnFilter === 4) {
      btnFilter = "women's clothing"
   }


   const filterproducts = products.filter(function (item) {

      return item.category == btnFilter
   });

   render(filterproducts);

}






let background = document.querySelector(".background")
let colorSection = document.getElementById("main page")
let Show = document.getElementById("sec1")
let Show1 = document.getElementById("sec2")
let Show2 = document.getElementById("sec3")
let Show3 = document.getElementById("sec4")
let Show4 = document.getElementById("sec5")
let Show5 = document.getElementById("sec6")

function getstarted(event) {
   event.preventDefault();
   background.classList.remove("background");
   colorSection.classList.remove("color-sec");
   Show.classList.remove("display-none");
   Show1.classList.remove("display-none");
   Show2.classList.remove("display-none");
   Show3.classList.remove("display-none");
   Show4.classList.remove("display-none");
   Show5.classList.remove("display-none");

}


function removeButton() {
   let button = document.querySelector(".removeableButton");
   if (button) {
      button.parentNode.removeChild(button); // Remove the button from its parent node
   }
}







const searchInput = document.getElementById("searchInput")
searchInput.addEventListener("input", e => {

   const value = e.target.value.toLowerCase();

   let filterproduct = products.filter(item => item.title.toLowerCase().includes(value));

   render(filterproduct);
})











 let icon = document.getElementById("search");
 icon.onclick = function(){
    search_form = document.querySelector(".search-form");
  search_form.classList.toggle("active");
 }
 let iconn = document.getElementById("close");
 iconn.onclick = function(){
    search_form = document.querySelector(".search-form");
    search_form.classList.toggle("active");
 }

 let userr = document.getElementById("user");
 userr.onclick = function(){
     user_form = document.querySelector(".user-form");
    user_form.classList.toggle("active");
 }
 let users = document.getElementById("closee");
 users.onclick = function(){
     user_form = document.querySelector(".user-form");
     user_form.classList.toggle("active");
}

let shopping_cart = document.getElementById("shopping-cart");
shopping_cart.onclick = function(){
  shooping = document.querySelector(".shooping");
  shooping.classList.toggle("active");
}
let shopping_close = document.getElementById("shopping-close");
shopping_close.onclick = function(){
    shooping = document.querySelector(".shooping");
    shooping.classList.toggle("active");
}


const sliderr = () =>{
    const images = document.querySelector(".image");
    const sliderbtns = document.querySelectorAll(".sliderbtn");

    sliderbtns.forEach(button =>{
        button.addEventListener("click", () => {
        //console.log(button)
        const direction = button.id === "prev-btn" ? -1 : 1;
        const scrollAmount = images.clientWidth * direction;
        images.scrollBy({ left : scrollAmount , behavior : "smooth" });

    });
    });

}
 window.addEventListener("load", sliderr);
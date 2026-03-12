// ======================
// MOBILE MENU
// ======================

const menu = document.querySelector(".menu-toggle");
const nav = document.querySelector(".nav-links");

menu.addEventListener("click",()=>{
nav.classList.toggle("active");
});


// ======================
// SMOOTH SCROLL
// ======================

document.querySelectorAll('a[href^="#"]').forEach(anchor=>{
anchor.addEventListener("click",function(e){

e.preventDefault();

document.querySelector(this.getAttribute("href"))
.scrollIntoView({
behavior:"smooth"
});

});
});


// ======================
// PORTFOLIO FILTER
// ======================

const filters = document.querySelectorAll(".filters button");
const items = document.querySelectorAll(".portfolio-grid .item");

filters.forEach(btn=>{
btn.addEventListener("click",()=>{

let filter = btn.dataset.filter;

items.forEach(item=>{
if(filter==="all" || item.classList.contains(filter)){
item.style.display="block";
}else{
item.style.display="none";
}
});

});
});


// ======================
// TESTIMONIAL SLIDER
// ======================

let index = 0;

const testimonials = document.querySelectorAll(".testimonial");

function showTestimonials(){

testimonials.forEach(t => t.classList.remove("active"));

index++;

if(index > testimonials.length){
index = 1;
}

testimonials[index-1].classList.add("active");

setTimeout(showTestimonials,4000);

}

showTestimonials();


// ======================
// FORM VALIDATION
// ======================

const form = document.getElementById("contactForm");

form.addEventListener("submit",function(e){

e.preventDefault();

const name = document.getElementById("name").value.trim();
const email = document.getElementById("email").value.trim();
const message = document.getElementById("message").value.trim();

const msg = document.getElementById("formMsg");

if(name==="" || email==="" || message===""){

msg.innerText="Please fill all fields";
msg.style.color="red";

return;

}

msg.innerText="Message sent successfully!";
msg.style.color="lightgreen";

form.reset();

});
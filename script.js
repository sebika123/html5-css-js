// to show navbar in clicking hamberger
const bar=document.getElementById('bar');
const close=document.getElementById('close');
const nav=document.getElementById('navbar');

if (bar){//to check if hamburger clicked or not if clicked show navbar and onclick hamburger and viceversa
    bar.addEventListener('click',()=>{
        nav.classList.add('active'); 
    })
}
const hamburger=document.querySelector('.hamburger');
const times=document.querySelector('.times'); 
const mobNav=document.querySelector('.mobile-nav');
const menu=document.querySelector('.menu');
const menu1=document.querySelector('.menu1');
const menu2=document.querySelector('.menu2');
const menu3=document.querySelector('.menu3');
const menu4=document.querySelector('.menu4');
const menu5=document.querySelector('.menu5')
hamburger.addEventListener('click', () => {
    mobNav.classList.add('open');
});
times.addEventListener('click', () => {
    mobNav.classList.remove('open');
});
menu.addEventListener('click' , () =>{
    mobNav.classList.remove('open');
});
menu1.addEventListener('click' , () =>{
    mobNav.classList.remove('open');
});
menu2.addEventListener('click' , () =>{
    mobNav.classList.remove('open');
});
menu3.addEventListener('click' , () =>{
    mobNav.classList.remove('open');
});
menu4.addEventListener('click' , () =>{
    mobNav.classList.remove('open');
});
menu5.addEventListener('click' , () =>{
    mobNav.classList.remove('open');
});
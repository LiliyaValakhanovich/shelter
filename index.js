console.log("Score: 95");

const burger=document.querySelector(".burger");
const burgerMenu=document.querySelector(".burger-menu");
const menu=document.querySelector(".adaptive-box");
const menuLink=document.querySelector(".menu-link");
const contentMenu=document.querySelector(".adaptive-menu");


burger.addEventListener('click', appearAdaptiveMenu);
menuLink.addEventListener('click', disappearAdaptiveMenu);
menu.addEventListener('click', disappearAdaptiveMenu);

function appearAdaptiveMenu (event) {
  if(menu.style.visibility==='hidden') {
    menu.style.visibility='visible';
    menu.style.opacity='1';
    contentMenu.style.opacity='1';
    contentMenu.style.transform='translate(0px, 0px)';
    document.body.style.overflow='hidden';
  } else {
    menu.style.visibility='hidden';
    menu.style.opacity='0';
    contentMenu.style.opacity='0';
    contentMenu.style.transform='translate(100%, 0px)';
    document.body.style.overflow='visible';
  }
}

function disappearAdaptiveMenu (event) {
  console.log(event.target);
  menu.style.visibility='hidden';
  menu.style.opacity='0';
  contentMenu.style.opacity='0';
  contentMenu.style.transform='translate(100%, 0px)';
  document.body.style.overflow='visible';
}


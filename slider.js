console.log(map);
document.querySelector(".slide").remove();
const slider=document.querySelector(".pets-slider");
const arrowRight=document.querySelector(".slider-right");
const arrowLeft=document.querySelector(".slider-left");
const modal=document.querySelector(".modal-pets");
const closeBtn=document.querySelector(".close-btn");
const whiteModal=document.querySelector(".white-modal-pets");
const modalBtn=document.querySelector(".close-btn");

arrowRight.addEventListener('click', left);
arrowLeft.addEventListener('click', right);

modalBtn.addEventListener('click', closeModalPets);

let random=Math.random();
let step=Math.floor(random*(7-0+1)+0);
console.log(step);
let offset=0;

function drawCards(){
  let img=createImg();
  let name=createName();
  let button=createButton();
  let card=createCard();

  card.append(img, name, button);
  slider.append(card); 
  
  card.style.left = offset*360 + 'px';
  if (step+1===map.length){
    step=0;
  }
  else{
    step++;
  }
  offset++; 
}

function drawCardsBegin(){
  let img=createImg();
  let name=createName();
  let button=createButton();
  let card=createCard();

  card.append(img, name, button);
  slider.append(card);
  
  card.style.left = -offset*360 + 'px';
  if (step+1===map.length){
    step=0;
  }
  else{
    step++;
  }
  offset++; 
}

function createCard(){
  return createElement('div', ['card'])
}

function createImg(){
  const attributes= [
    {
    prop: 'src',
    value: map[step].img,
    },

    {
      prop: 'alt',
      value: 'pet'
    }
  ]
  return createElement('img', ['card-image'], attributes);
}

function createName(){
  return createElement('p', ['name-pet'], null, `${map[step].name}`);
}

function createButton(){
  const heandler=[
    {
      event: 'click',
      heandler: appearModalPets,
    }
  ]
  return createElement('button', ['card-button'], null, 'Learn more', heandler);
}

function left(){
  document.onclick=null;
  let mapViewCards=document.querySelectorAll(".card");
  console.log(mapViewCards);
  let offset2=0;
  for (let i=0; i<mapViewCards.length; i++){
    /*slider.style.left=offset2*990 - 990 + 'px';
  offset2++;*/
   mapViewCards[i].style.left=offset2*360 - 360 + 'px';
    offset2++;
  }
  
  setTimeout(function(){
    mapViewCards[0].remove();
    drawCards();
  }, 1000);
}

drawCards();drawCards();drawCards();drawCards();drawCards();drawCards();

function right(){
  let mapViewCards=document.querySelectorAll(".card");
  let offset3=0;
  
  for (let i=0; i<mapViewCards.length; i++){
    mapViewCards[i].style.left=offset3*360 + 360 + 'px';
    offset3++;
    mapViewCards[mapViewCards.length].remove();
    drawCardsBegin();
    
    
   
  }
  
}

function appearModalPets(event){
  console.log(event.target);
  const nameElCard = event.target.parentElement.querySelector(".name-pet").textContent;
  console.log(nameElCard);
  addInfoToModal(nameElCard);
  
  modal.style.visibility='visible';
  modal.style.opacity='1';
  closeBtn.style.opacity='1';
  whiteModal.style.opacity='1';
  document.body.style.overflow='hidden';
}

function closeModalPets(){
  modal.style.visibility='hidden';
  modal.style.opacity='0';
  closeBtn.style.opacity='0';
  whiteModal.style.opacity='0';
  document.body.style.overflow='visible';
}

function addInfoToModal(nameElCard){
  map.forEach(el=>{
    if(el.name===nameElCard){
      console.log(el.name);
      const name=el.name;
      const type=`${el.type} - ${el.breed}`;
      const image=el.img;
      const descr=el.description;
      const age=el.age;
      const inoculations=el.inoculations;
      const diseases=el.diseases;
      const parasites=el.parasites;
      createModalInfo(name, type, image, descr, age, inoculations, diseases, parasites);
    }
  })
}

function createModalInfo(name, type, image, descr, age, inoculations, diseases, parasites){
  const img=createModalImg(image);
  const namePet=createNamePet(name);
  const typePet=createTypePet(type);
  const boxName=createBoxName();
  const descrPet=createDescrPet(descr);
  const agePet=createAgePet(age);
  const inoculationsPet=createInoculationsPet(inoculations);
  const diseasesPet=createDiseasesPet(diseases);
  const parasitesPet=createParasitesPet(parasites);
  const boxInfo=createBoxInfo();
  const boxContent=createBoxContent();

  boxName.append(namePet, typePet);
  boxInfo.append(agePet, inoculationsPet, diseasesPet, parasitesPet);
  boxContent.append(boxName, descrPet, boxInfo);
  whiteModal.replaceChildren(img, boxContent);
}

function createModalImg(image){
  const attributes=[
    {
      prop: 'src',
      value: image,
    },

    {
      prop: 'alt',
      value: 'pet'
    }
  ]
  return createElement('img', ['modal-image'], attributes);
}

function createBoxContent(){
  return createElement('div', ['box-content']);
}

function createBoxName(){
  return createElement('div', ['box-name']);
}

function createBoxInfo(){
  return createElement('div', ['box-info']);
}

function createNamePet(name){
  return createElement('p', ['modal-name'], null, `${name}`);
}

function createTypePet(type){
  return createElement('p', ['modal-type'], null, `${type}`);
}

function createDescrPet(descr){
  return createElement('p', ['modal-descr'], null, `${descr}`);
}

function createAgePet(age){
  return createElement('p', ['modal-age'], null, `Age:${age}`);
}

function createInoculationsPet(inoculations){
  return createElement('p', ['modal-inoculations'], null, `Inoculations:${inoculations}`);
}

function createDiseasesPet(diseases){
  return createElement('p', ['modal-diseases'], null, `Diseases:${diseases}`);
}

function createParasitesPet(parasites){
  return createElement('p', ['modal-parasites'], null, `Parasites:${parasites}`);
}


function createElement(tag, classList, attributes, textContent, heandlers, children, childrenAction){
  const element=document.createElement(tag);

  if (classList?.length){
    element.classList.add(...classList);
    
  }

  if (attributes?.length){
    attributes.forEach(({prop, value})=>{
      element.setAttribute(prop, value);
    });
  }

  if (textContent){
    element.textContent=textContent;
  }

  if (heandlers?.length){
    heandlers.forEach(({event, heandler})=>{
      element.addEventListener(event,heandler);
    });
  }

  if (children){
    element[childrenAction](...children);
  }

  return element;
}
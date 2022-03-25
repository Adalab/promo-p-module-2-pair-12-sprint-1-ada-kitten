"use strict";

const newForm = document.querySelector(".js-new-form");
/*newForm.classList.remove("collapsed");*/

const kittenImg_1 = "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg";
const kittenName_1 = "Anastacio";
const kittenRace_1 = "British Shorthair";
const kittenDescription_1 =
  "Risueño, cariñoso, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";

const kitten_1 = `<li class="card">
<article>
  <img class="card_img"src= ${kittenImg_1} alt="gatito"/>
  <h3 class="card_title">${kittenName_1}</h3>
  <h4 class="card_race">${kittenRace_1}</h4>
  <p class="card_description">${kittenDescription_1}</p>
</article>
</li>`;

const kittenImg_2 =
  "https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg";
const kittenName_2 = "Fiona";
const kittenRace_2 = "British Shorthair";
const kittenDescription_2 =
  "cariñoso, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";

const kitten_2 = `<li class="card">
<article>
  <img
    class="card_img"src = ${kittenImg_2} alt="gatito"/>
  <h3 class="card_title">${kittenName_2}</h3>
  <h4 class="card_race">${kittenRace_2}</h4>
  <p class="card_description">${kittenDescription_2}</p>
</article>
</li>`;

const kittenImg_3 =
  "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg";
const kittenName_3 = "Cielo";
const kittenRace_3 = "British Shorthair";
const kittenDescription_3 =
  "Ruiseño, adorable, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";

const kitten_3 = `<li class="card">
<article>
  <img
    class="card_img"src= ${kittenImg_3} alt="gatito"/>
  <h3 class="card_title">${kittenName_3} </h3>
  <h4 class="card_race">${kittenRace_3} </h4>
  <p class="card_description">${kittenDescription_3}</p>
</article>
</li>`;

const list = document.querySelector(".js-list");
list.innerHTML = kitten_1 + kitten_2 + kitten_3;

const input_search_desc = document.querySelector(".js_in_search_desc");

input_search_desc.value = "cariñoso";

const descrSearchText = input_search_desc.value;

let resultadoBusqueda = "";
if (kittenDescription_1.includes(descrSearchText)) {
  resultadoBusqueda = kitten_1;
}

if (kittenDescription_2.includes(descrSearchText)) {
  resultadoBusqueda = resultadoBusqueda + kitten_2;
}

if (kittenDescription_3.includes(descrSearchText)) {
  resultadoBusqueda = resultadoBusqueda + kitten_3;
}

list.innerHTML = resultadoBusqueda;

newForm.classList.remove("collapsed");


if(newForm.classList.contains("collapsed")) {
  newForm.classList.add ("collapsed");
  }else  {
    newForm.classList.remove ("collapsed");
  }*/
  
  const itemPlus = document.querySelector (".js_item");
  
  function hidden () {
    if(newForm.classList.contains("collapsed")) {
      newForm.classList.add ("collapsed");
      }else{
        newForm.classList.remove ("collapsed");
        console.log ("hola");
  }
  
  
  itemPlus.addEventListener("click", hidden);
  

/*const formElement = document.querySelector(".js-new-form")

if (newForm.classList.contains("collapsed")) {
  newForm.classList.add("collapsed");
} else {
  newForm.classList.remove("collapsed");
}*/

//Convertir cada gatito en un objeto

const kittenData_1 = {
  image: "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg",
  name: "Anastacio",
  race: "British Shorthair",
  desc: "Risueño, cariñoso, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!",
};

const kittenData_2 = {
  image: "https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg"
  name: "Fiona",
  race: "British Shorthair",
  desc: "cariñoso, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!",
};

const kittenData_3 = {
  image: "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg",
  name: "Cielo",
  race: "British Shorthair",
  desc: "Ruiseño, adorable, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!",
};

function kitten () {
  const kittenInfo ={
    
  };


}





function renderKitten (kitten) {
list.innerHTML +=`<li class="card">
<article>
  <img
    class="card_img"src= ${kitten.img} alt="gatito"/>
  <h3 class="card_title">${kitten.name} </h3>
  <h4 class="card_race">${kitten.race} </h4>
  <p class="card_description">${kitten.desc}</p>
</article>
</li>`;

}



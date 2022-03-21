"use strict";

const newForm = document.querySelector(".js-new-form");
newForm.classList.remove("collapsed");


const kittenImg_1 = "https://ychef.files.bbci.co.uk/976x549/p07ryyyj.jpg" ;
const kittenName_1= "Anastacio";
const kittenRace_1= "British Shorthair";
const kittenDescription_1= "Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste. Es una maravilla acariciarle!";

const kitten_1 = `<li class="card">
<article>
  <img
    class="card_img"
    src= $ {kittenImg_1} alt="gatito"
  />
  <h3 ${kittenName_1}class="card_title"></h3>
  <h4 ${kittenRace_1}class="card_race"></h4>
  <p ${kittenName_1}class="card_description">
  
  </p>
</article>
</li>`;




const kitten_2 = `<li class="card">
<article>
  <img
    class="card_img"
    src="https://images.emedicinehealth.com/images/article/main_image/cat-scratch-disease.jpg"
    alt="gatito"
  />
  <h3 class="card_title">Fiona</h3>
  <h4 class="card_race">British Shorthair</h4>
  <p class="card_description">
  Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste.
  Es una maravilla acariciarle!
  </p>
</article>
</li>`;

const kitten_3= `<li class="card">
<article>
  <img
    class="card_img"
    src="https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2019_39/3021711/190923-cat-pet-stock-cs-1052a.jpg"
    alt="gatito"
  />
  <h3 class="card_title">Cielo</h3>
  <h4 class="card_race">British Shorthair</h4>
  <p class="card_description">
  Ruiseño, juguetón, le guta estar tranquilo y que nadie le moleste.
  Es una maravilla acariciarle!
  </p>
</article>
</li>`;

const list = document.querySelector (".js-list");
list.innerHTML = kitten_1 + kitten_2 + kitten_3;
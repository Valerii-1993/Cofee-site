/////////// FILTERS TEA/////////////
const filtersTea = document.querySelector('#filtersTea');

filtersTea.addEventListener('input', filterGoodsTea);

function filterGoodsTea() {   
  const 
  sortTea1 = [...filtersTea.querySelectorAll('#sortTea1 input:checked')].map(n => n.value),
  sortTea2 = [...filtersTea.querySelectorAll('#sortTea2 input:checked')].map(n => n.value);
  outputTea(DATATEA.filter(n => (
    (!sortTea1.length || sortTea1.includes(n.typeTea)) &&
    (!sortTea2.length || sortTea2.includes(n.typeTea)))
  ));
}



///////////// OUTPUT GOODS TEA/////////////
function outputTea(good) {
  document.getElementById("goodsTea").innerHTML = good.map(n => `
    <div class="catalog-tea__single-good__container-item" review-tea="${n.reviewTea}" raiting-tea="${n.raitTea}" price-tea="${n.costTea}">

    <div class="catalog-tea__single-good__top">
      <ul class="catalog-tea__single-good__top--stars">
        <li class="catalog-tea__single-good__top-img"><img src="images/Star-cofee.svg" alt=""></li> ${n.starsTea}
      </ul>
      <p class="catalog-tea__single-good__top-text">${n.raitTea}<a class="discount__container-item--rightside--link" href="">(${n.reviewTea} отзывов)</a></p>
    </div>

    <div class="catalog-tea__single-good-img--container">
      <img class="catalog-tea__single-good-img" src="${n.imageTea}">
      </div>

      <div class="catalog-tea__single-good__bottom">
    <h5 class="catalog-tea__single-good-title">${n.nameTea}</h5>
    <p class="catalog-tea__single-good-text">${n.descriptionTea}</p>
      <div class="catalog-tea__single-good__buy">          
            <p class="catalog-tea__single-good__price">
            ${n.costTea} ₴
          </p>
          <a href="#"> <button class="catalog-tea__list-btn"data-art="${n.nameTea}">В корзину</button></a>
      </div>
      </div>

    </div>
  `).join('');
}

const DATATEA = [
  {
    "typeTea" : "Черный чай",
    "nameTea" : "Черный чай 'Амброзия'",
    "costTea" : 250,
    "imageTea" : "images/catalog-black-tea.png",
    "starsTea": "5",
    "raitTea": "5.0",
    "descriptionTea": "Чай - описание товара, вкус, аромат",
    "reviewTea": "18",
  },
  {
    "typeTea" : "Зеленый чай",
    "nameTea" : "Зеленый чай 'Амброзия'",
    "costTea" : 340,
    "imageTea" : "images/catalog-green-tea.png.png",
    "starsTea": "4",
    "raitTea": "4.0",
    "descriptionTea": "Чай - описание товара, вкус, аромат",
    "reviewTea": "22",
  },
  {
    "typeTea" : "Молочный улунг",
    "nameTea" : "Молочный улунг 'Амброзия'",
    "costTea" : 550,
    "imageTea" : "images/catalog-green-tea.png.png",
    "starsTea": "4",
    "raitTea": "4.0",
    "descriptionTea": "Чай - описание товара, вкус, аромат",
    "reviewTea": "32",
  },
  {
    "typeTea" : "Травяной чай",
    "nameTea" : "Травяной чай 'Амброзия'",
    "costTea" : 580,
    "imageTea" : "images/catalog-herbal-tea.png",
    "starsTea": "4",
    "raitTea": "4.0",
    "descriptionTea": "Чай - описание товара, вкус, аромат",
    "reviewTea": "33",
  },
  {
    "typeTea" : "Матча",
    "nameTea" : "Матча 'Амброзия'",
    "costTea" : 140,
    "imageTea" : "images/catalog-Matcha.png",
    "starsTea": "3",
    "raitTea": "3.0",
    "descriptionTea": "Чай - описание товара, вкус, аромат",
    "reviewTea": "12",
  },
  {
    "typeTea" : "Пуэр",
    "nameTea" : "Пуэр 'Амброзия'",
    "costTea" : 475,
    "imageTea" : "images/catalog-puer.png",
    "starsTea": "3",
    "raitTea": "3.0",
    "descriptionTea": "Чай - описание товара, вкус, аромат",
    "reviewTea": "16",
  },
  {
    "typeTea" : "Кофейные напитки",
    "nameTea" : "Кофейные напитки 'Амброзия'",
    "costTea" : 330,
    "imageTea" : "images/catalog-cofein.png",
    "starsTea": "2",
    "raitTea": "2.0",
    "descriptionTea": "Чай - описание товара, вкус, аромат",
    "reviewTea": "29",
  },
  {
    "typeTea" : "Черный чай",
    "nameTea" : "Черный чай 'Амброзия'",
    "costTea" : 250,
    "imageTea" : "images/catalog-black-tea.png",
    "starsTea": "5",
    "raitTea": "5.0",
    "descriptionTea": "Чай - описание товара, вкус, аромат",
    "reviewTea": "18",
  },
  {
    "typeTea" : "Зеленый чай",
    "nameTea" : "Зеленый чай 'Амброзия'",
    "costTea" : 340,
    "imageTea" : "images/catalog-green-tea.png.png",
    "starsTea": "4",
    "raitTea": "4.0",
    "descriptionTea": "Чай - описание товара, вкус, аромат",
    "reviewTea": "22",
  },
  {
    "typeTea" : "Молочный улунг",
    "nameTea" : "Молочный улунг 'Амброзия'",
    "costTea" : 550,
    "imageTea" : "images/catalog-green-tea.png.png",
    "starsTea": "4",
    "raitTea": "4.0",
    "descriptionTea": "Чай - описание товара, вкус, аромат",
    "reviewTea": "32",
  },
  {
    "typeTea" : "Травяной чай",
    "nameTea" : "Травяной чай 'Амброзия'",
    "costTea" : 580,
    "imageTea" : "images/catalog-herbal-tea.png",
    "starsTea": "4",
    "raitTea": "4.0",
    "descriptionTea": "Чай - описание товара, вкус, аромат",
    "reviewTea": "33",
  },
  {
    "typeTea" : "Матча",
    "nameTea" : "Матча 'Амброзия'",
    "costTea" : 140,
    "imageTea" : "images/catalog-Matcha.png",
    "starsTea": "3",
    "raitTea": "3.0",
    "descriptionTea": "Чай - описание товара, вкус, аромат",
    "reviewTea": "12",
  },
  {
    "typeTea" : "Пуэр",
    "nameTea" : "Пуэр 'Амброзия'",
    "costTea" : 475,
    "imageTea" : "images/catalog-puer.png",
    "starsTea": "3",
    "raitTea": "3.0",
    "descriptionTea": "Чай - описание товара, вкус, аромат",
    "reviewTea": "16",
  },
  {
    "typeTea" : "Кофейные напитки",
    "nameTea" : "Кофейные напитки 'Амброзия'",
    "costTea" : 330,
    "imageTea" : "images/catalog-cofein.png",
    "starsTea": "2",
    "raitTea": "2.0",
    "descriptionTea": "Чай - описание товара, вкус, аромат",
    "reviewTea": "29",
  },
  {
    "typeTea" : "Черный чай",
    "nameTea" : "Черный чай 'Амброзия'",
    "costTea" : 250,
    "imageTea" : "images/catalog-black-tea.png",
    "starsTea": "5",
    "raitTea": "5.0",
    "descriptionTea": "Чай - описание товара, вкус, аромат",
    "reviewTea": "18",
  },
  {
    "typeTea" : "Зеленый чай",
    "nameTea" : "Зеленый чай 'Амброзия'",
    "costTea" : 340,
    "imageTea" : "images/catalog-green-tea.png.png",
    "starsTea": "4",
    "raitTea": "4.0",
    "descriptionTea": "Чай - описание товара, вкус, аромат",
    "reviewTea": "22",
  },
  {
    "typeTea" : "Молочный улунг",
    "nameTea" : "Молочный улунг 'Амброзия'",
    "costTea" : 550,
    "imageTea" : "images/catalog-green-tea.png.png",
    "starsTea": "4",
    "raitTea": "4.0",
    "descriptionTea": "Чай - описание товара, вкус, аромат",
    "reviewTea": "32",
  },
  {
    "typeTea" : "Травяной чай",
    "nameTea" : "Травяной чай 'Амброзия'",
    "costTea" : 580,
    "imageTea" : "images/catalog-herbal-tea.png",
    "starsTea": "4",
    "raitTea": "4.0",
    "descriptionTea": "Чай - описание товара, вкус, аромат",
    "reviewTea": "33",
  },
  {
    "typeTea" : "Матча",
    "nameTea" : "Матча 'Амброзия'",
    "costTea" : 140,
    "imageTea" : "images/catalog-Matcha.png",
    "starsTea": "3",
    "raitTea": "3.0",
    "descriptionTea": "Чай - описание товара, вкус, аромат",
    "reviewTea": "12",
  },
  {
    "typeTea" : "Пуэр",
    "nameTea" : "Пуэр 'Амброзия'",
    "costTea" : 475,
    "imageTea" : "images/catalog-puer.png",
    "starsTea": "3",
    "raitTea": "3.0",
    "descriptionTea": "Чай - описание товара, вкус, аромат",
    "reviewTea": "16",
  },
  {
    "typeTea" : "Кофейные напитки",
    "nameTea" : "Кофейные напитки 'Амброзия'",
    "costTea" : 330,
    "imageTea" : "images/catalog-cofein.png",
    "starsTea": "2",
    "raitTea": "2.0",
    "descriptionTea": "Чай - описание товара, вкус, аромат",
    "reviewTea": "29",
  },
  {
    "typeTea" : "Матча",
    "nameTea" : "Матча 'Амброзия'",
    "costTea" : 140,
    "imageTea" : "images/catalog-Matcha.png",
    "starsTea": "3",
    "raitTea": "3.0",
    "descriptionTea": "Чай - описание товара, вкус, аромат",
    "reviewTea": "12",
  },
  {
    "typeTea" : "Пуэр",
    "nameTea" : "Пуэр 'Амброзия'",
    "costTea" : 475,
    "imageTea" : "images/catalog-puer.png",
    "starsTea": "3",
    "raitTea": "3.0",
    "descriptionTea": "Чай - описание товара, вкус, аромат",
    "reviewTea": "16",
  },
  {
    "typeTea" : "Кофейные напитки",
    "nameTea" : "Кофейные напитки 'Амброзия'",
    "costTea" : 330,
    "imageTea" : "images/catalog-cofein.png",
    "starsTea": "2",
    "raitTea": "2.0",
    "descriptionTea": "Чай - описание товара, вкус, аромат",
    "reviewTea": "29",
  }
]

outputTea(DATATEA);


/////////////////////SEE MORE TEA//////////////////////////////

$(document).ready(function(){
  $(".catalog-tea__single-good__container-item").slice(8).hide();
  $(".catalog-tea__see-more-goods").on("click", function(l){
    l.preventDefault();
    $(".catalog-tea__single-good__container-item:hidden").slice(0, 8).slideDown();
    if($(".catalog-tea__single-good__container-item:hidden").length == 0) {
      $(".catalog-tea__see-more-goods").text("Чая больше нет(").addClass(".catalog-tea__see-more-goods-none");
    }
  });
  
});

///////////// SORT TEA/////////////

document.querySelector('#аscendingTea').onclick = function(){
  outputTea(DATATEA);
  mySortTea('price-tea');
}
document.querySelector('#descendingTea').onclick = function(){
  outputTea(DATATEA);
  mySortTeaDesc('price-tea');
}
document.querySelector('#raitTea').onclick = function(){
  outputTea(DATATEA);
  mySortTeaDesc('raiting-tea');
}
document.querySelector('#reviewTea').onclick = function(){
  outputTea(DATATEA);
  mySortTeaDesc('review-tea');
}

function mySortTea(sortTypetea) {
  let teas = document.querySelector('.catalog-tea__goods');
  for(let i=0; i<teas.children.length; i++){
    for(let j=i; j<teas.children.length; j++){
      if(+teas.children[i].getAttribute(sortTypetea) > +teas.children[j].getAttribute(sortTypetea)){
        replacedNode = teas.replaceChild(teas.children[j], teas.children[i]);
        insertAfter(replacedNode, teas.children[i]);
      }
    }
  }
}

function mySortTeaDesc(sortTypetea){
  let teas = document.querySelector('.catalog-tea__goods');
  for(let i=0; i < teas.children.length; i++){
    for(let j=i; j < teas.children.length; j++){
      if(+teas.children[i].getAttribute(sortTypetea) < +teas.children[j].getAttribute(sortTypetea)){
        replacedNode = teas.replaceChild(teas.children[j], teas.children[i]);
        insertAfter(replacedNode, teas.children[i]);
      }
    }
  }
}

function insertAfter(elem, refElem){
  return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
}

///////////// RESET FILTERS/////////////

$(document).ready(function(){
    $('.catalog__reset-filter--btn').on('click', function(){
         $('input[type="radio"]').prop('checked', false);
         outputTea(DATATEA);
     });
   });
///////// FILTERS food/////////////
const filtersfood = document.querySelector('#filtersfood');

filtersfood.addEventListener('input', filterGoodsfood);

function filterGoodsfood() {   
  const 
  sortFood1 = [...filtersfood.querySelectorAll('#sortFood1 input:checked')].map(n => n.value),
  sortFood2 = [...filtersfood.querySelectorAll('#sortFood2 input:checked')].map(n => n.value);
  outputfood(DATAFOOD.filter(n => (
    (!sortFood1.length || sortFood1.includes(n.typefood)) &&
    (!sortFood2.length || sortFood2.includes(n.typefood)))
  ));
}

///////////// OUTPUT GOODS food/////////////
function outputfood(good) {
  document.getElementById("goodsFood").innerHTML = good.map(n => `
    <div class="catalog-food__single-good__container-item" review-food="${n.reviewfood}" raiting-food="${n.raitfood}" price-food="${n.costfood}">

    <div class="catalog-food__single-good__top">
      <ul class="catalog-food__single-good__top--stars">
        <li class="catalog-food__single-good__top-img"><img src="images/Star-cofee.svg" alt=""></li> ${n.starsfood}
      </ul>
      <p class="catalog-food__single-good__top-text">${n.raitfood}<a class="discount__container-item--rightside--link" href="">(${n.reviewfood} отзывов)</a></p>
    </div>

    <div class="catalog-food__single-good-img--container">
      <img class="catalog-food__single-good-img" src="${n.imagefood}">
      </div>

      <div class="catalog-food__single-good__bottom">
    <h5 class="catalog-food__single-good-title">${n.namefood}</h5>
    <p class="catalog-food__single-good-text">${n.descriptionfood}</p>
      <div class="catalog-food__single-good__buy">          
            <p class="catalog-food__single-good__price">
            ${n.costfood} ₴
          </p>
           <button class="catalog-food__list-btn"data-art="${n.key}">В корзину</button>
      </div>
      </div>

    </div>
  `).join('');
}

const DATAFOOD = [
  {
    "typefood" : "Цикорий и корень цикория",
    "namefood" : "Цикорий и корень цикория 'Амброзия'",
    "costfood" : 250,
    "imagefood" : "images/catalog-food-item.png",
    "starsfood": "5",
    "raitfood": "5.0",
    "descriptionfood": "Здоровое питание - описание товара, вкус, аромат",
    "reviewfood": "18",

},
{
    "typefood" : "Ячменные напитки",
    "namefood" : "Ячменные напитки 'Амброзия'",
    "costfood" : 340,
    "imagefood" : "images/catalog-food-item.png",
    "starsfood": "4",
    "raitfood": "4.0",
    "descriptionfood": "Здоровое питание - описание товара, вкус, аромат",
    "reviewfood": "22",
  },
{
    "typefood" : "Напитки для здоровья",
    "namefood" : "Напитки для здоровья 'Амброзия'",
    "costfood" : 550,
    "imagefood" : "images/catalog-food-item.png",
    "starsfood": "4",
    "raitfood": "4.0",
    "descriptionfood": "Здоровое питание - описание товара, вкус, аромат",
    "reviewfood": "32",
  },
{
    "typefood" : "Протеиновые смеси",
    "namefood" : "Протеиновые смеси 'Амброзия'",
    "costfood" : 580,
    "imagefood" : "images/catalog-food-item.png",
    "starsfood": "4",
    "raitfood": "4.0",
    "descriptionfood": "Здоровое питание - описание товара, вкус, аромат",
    "reviewfood": "33",
  },
{
    "typefood" : "Толокняные каши",
    "namefood" : "Толокняные каши 'Амброзия'",
    "costfood" : 140,
    "imagefood" : "images/catalog-food-item.png",
    "starsfood": "3",
    "raitfood": "3.0",
    "descriptionfood": "Здоровое питание - описание товара, вкус, аромат",
    "reviewfood": "12",
  },
  {
    "typefood" : "Пуэр",
    "namefood" : "Пуэр 'Амброзия'",
    "costfood" : 475,
    "imagefood" : "images/catalog-food-item.png",
    "starsfood": "3",
    "raitfood": "3.0",
    "descriptionfood": "Здоровое питание - описание товара, вкус, аромат",
    "reviewfood": "16",
  },
  {
    "typefood" : "Кофейные напитки",
    "namefood" : "Кофейные напитки 'Амброзия'",
    "costfood" : 330,
    "imagefood" : "images/catalog-food-item.png",
    "starsfood": "2",
    "raitfood": "2.0",
    "descriptionfood": "Здоровое питание - описание товара, вкус, аромат",
    "reviewfood": "29",
  },
  {
    "typefood" : "Цикорий и корень цикория",
    "namefood" : "Цикорий и корень цикория 'Амброзия'",
    "costfood" : 250,
    "imagefood" : "images/catalog-food-item.png",
    "starsfood": "5",
    "raitfood": "5.0",
    "descriptionfood": "Здоровое питание - описание товара, вкус, аромат",
    "reviewfood": "18",
  },
  {
    "typefood" : "Ячменные напитки",
    "namefood" : "Ячменные напитки 'Амброзия'",
    "costfood" : 340,
    "imagefood" : "images/catalog-food-item.png",
    "starsfood": "4",
    "raitfood": "4.0",
    "descriptionfood": "Здоровое питание - описание товара, вкус, аромат",
    "reviewfood": "22",
  },
  {
    "typefood" : "Напитки для здоровья",
    "namefood" : "Напитки для здоровья 'Амброзия'",
    "costfood" : 550,
    "imagefood" : "images/catalog-food-item.png",
    "starsfood": "4",
    "raitfood": "4.0",
    "descriptionfood": "Здоровое питание - описание товара, вкус, аромат",
    "reviewfood": "32",
  },
  {
    "typefood" : "Протеиновые смеси",
    "namefood" : "Протеиновые смеси 'Амброзия'",
    "costfood" : 580,
    "imagefood" : "images/catalog-food-item.png",
    "starsfood": "4",
    "raitfood": "4.0",
    "descriptionfood": "Здоровое питание - описание товара, вкус, аромат",
    "reviewfood": "33",
  },
  {
    "typefood" : "Толокняные каши",
    "namefood" : "Толокняные каши 'Амброзия'",
    "costfood" : 140,
    "imagefood" : "images/catalog-food-item.png",
    "starsfood": "3",
    "raitfood": "3.0",
    "descriptionfood": "Здоровое питание - описание товара, вкус, аромат",
    "reviewfood": "12",
  },
  {
    "typefood" : "Пуэр",
    "namefood" : "Пуэр 'Амброзия'",
    "costfood" : 475,
    "imagefood" : "images/catalog-food-item.png",
    "starsfood": "3",
    "raitfood": "3.0",
    "descriptionfood": "Здоровое питание - описание товара, вкус, аромат",
    "reviewfood": "16",
  },
  {
    "typefood" : "Кофейные напитки",
    "namefood" : "Кофейные напитки 'Амброзия'",
    "costfood" : 330,
    "imagefood" : "images/catalog-food-item.png",
    "starsfood": "2",
    "raitfood": "2.0",
    "descriptionfood": "Здоровое питание - описание товара, вкус, аромат",
    "reviewfood": "29",
  },
  {
    "typefood" : "Цикорий и корень цикория",
    "namefood" : "Цикорий и корень цикория 'Амброзия'",
    "costfood" : 250,
    "imagefood" : "images/catalog-food-item.png",
    "starsfood": "5",
    "raitfood": "5.0",
    "descriptionfood": "Здоровое питание - описание товара, вкус, аромат",
    "reviewfood": "18",
  },
  {
    "typefood" : "Ячменные напитки",
    "namefood" : "Ячменные напитки 'Амброзия'",
    "costfood" : 340,
    "imagefood" : "images/catalog-food-item.png",
    "starsfood": "4",
    "raitfood": "4.0",
    "descriptionfood": "Здоровое питание - описание товара, вкус, аромат",
    "reviewfood": "22",
  },
  {
    "typefood" : "Напитки для здоровья",
    "namefood" : "Напитки для здоровья 'Амброзия'",
    "costfood" : 550,
    "imagefood" : "images/catalog-food-item.png",
    "starsfood": "4",
    "raitfood": "4.0",
    "descriptionfood": "Здоровое питание - описание товара, вкус, аромат",
    "reviewfood": "32",
  },
  {
    "typefood" : "Протеиновые смеси",
    "namefood" : "Протеиновые смеси 'Амброзия'",
    "costfood" : 580,
    "imagefood" : "images/catalog-food-item.png",
    "starsfood": "4",
    "raitfood": "4.0",
    "descriptionfood": "Здоровое питание - описание товара, вкус, аромат",
    "reviewfood": "33",
  },
  {
    "typefood" : "Толокняные каши",
    "namefood" : "Толокняные каши 'Амброзия'",
    "costfood" : 140,
    "imagefood" : "images/catalog-food-item.png",
    "starsfood": "3",
    "raitfood": "3.0",
    "descriptionfood": "Здоровое питание - описание товара, вкус, аромат",
    "reviewfood": "12",
  },
  {
    "typefood" : "Пуэр",
    "namefood" : "Пуэр 'Амброзия'",
    "costfood" : 475,
    "imagefood" : "images/catalog-food-item.png",
    "starsfood": "3",
    "raitfood": "3.0",
    "descriptionfood": "Здоровое питание - описание товара, вкус, аромат",
    "reviewfood": "16",
  },
  {
    "typefood" : "Кофейные напитки",
    "namefood" : "Кофейные напитки 'Амброзия'",
    "costfood" : 330,
    "imagefood" : "images/catalog-food-item.png",
    "starsfood": "2",
    "raitfood": "2.0",
    "descriptionfood": "Здоровое питание - описание товара, вкус, аромат",
    "reviewfood": "29",
  },
  {
    "typefood" : "Толокняные каши",
    "namefood" : "Толокняные каши 'Амброзия'",
    "costfood" : 140,
    "imagefood" : "images/catalog-food-item.png",
    "starsfood": "3",
    "raitfood": "3.0",
    "descriptionfood": "Здоровое питание - описание товара, вкус, аромат",
    "reviewfood": "12",
  },
  {
    "typefood" : "Пуэр",
    "namefood" : "Пуэр 'Амброзия'",
    "costfood" : 475,
    "imagefood" : "images/catalog-food-item.png",
    "starsfood": "3",
    "raitfood": "3.0",
    "descriptionfood": "Здоровое питание - описание товара, вкус, аромат",
    "reviewfood": "16",
  },
  {
    "typefood" : "Кофейные напитки",
    "namefood" : "Кофейные напитки 'Амброзия'",
    "costfood" : 330,
    "imagefood" : "images/catalog-food-item.png",
    "starsfood": "2",
    "raitfood": "2.0",
    "descriptionfood": "Здоровое питание - описание товара, вкус, аромат",
    "reviewfood": "29",
  }
  ]

outputfood(DATAFOOD);


///////////////////SEE MORE food//////////////////////////////

$(document).ready(function(){
  $(".catalog-food__single-good__container-item").slice(8).hide();
  $(".catalog-food__see-more-goods").on("click", function(l){
    l.preventDefault();
    $(".catalog-food__single-good__container-item:hidden").slice(0, 8).slideDown();
    if($(".catalog-food__single-good__container-item:hidden").length == 0) {
      $(".catalog-food__see-more-goods").text("больше нет товаров(").addClass(".catalog-food__see-more-goods-none");
    }
  });
  
});

///////////// SORT food/////////////

document.querySelector('#аscendingfood').onclick = function(){
  outputfood(DATAFOOD);
  mySortfood('price-food');
}
document.querySelector('#descendingfood').onclick = function(){
  outputfood(DATAFOOD);
  mySortfoodDesc('price-food');
}
document.querySelector('#raitfood').onclick = function(){
  outputfood(DATAFOOD);
  mySortfoodDesc('raiting-food');
}
document.querySelector('#reviewfood').onclick = function(){
  outputfood(DATAFOOD);
  mySortfoodDesc('review-food');
}

function mySortfood(sortTypefood) {
  let foods = document.querySelector('.catalog-food__goods');
  for(let i=0; i<foods.children.length; i++){
    for(let j=i; j<foods.children.length; j++){
      if(+foods.children[i].getAttribute(sortTypefood) > +foods.children[j].getAttribute(sortTypefood)){
        replacedNode = foods.replaceChild(foods.children[j], foods.children[i]);
        insertAfter(replacedNode, foods.children[i]);
      }
    }
  }
}

function mySortfoodDesc(sortTypefood){
  let foods = document.querySelector('.catalog-food__goods');
  for(let i=0; i < foods.children.length; i++){
    for(let j=i; j < foods.children.length; j++){
      if(+foods.children[i].getAttribute(sortTypefood) < +foods.children[j].getAttribute(sortTypefood)){
        replacedNode = foods.replaceChild(foods.children[j], foods.children[i]);
        insertAfter(replacedNode, foods.children[i]);
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
         outputfood(DATAFOOD);
     });
   });
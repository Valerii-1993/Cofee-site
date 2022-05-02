/////////// FILTERS vending/////////////
const filtersvending = document.querySelector('#filtersvending');

filtersvending.addEventListener('input', filterGoodsvending);

function filterGoodsvending() {   
  const 
  sortvending1 = [...filtersvending.querySelectorAll('#sortvending1 input:checked')].map(n => n.value),
  sortvending2 = [...filtersvending.querySelectorAll('#sortvending2 input:checked')].map(n => n.value);
  outputvending(DATAVEN.filter(n => (
    (!sortvending1.length || sortvending1.includes(n.typevending)) &&
    (!sortvending2.length || sortvending2.includes(n.typevending)))
  ));
}



///////////// OUTPUT GOODS vending/////////////
function outputvending(good) {
  document.getElementById("goodsvending").innerHTML = good.map(n => `
    <div class="catalog-vending__single-good__container-item" review-vending="${n.reviewvending}" raiting-vending="${n.raitvending}" price-vending="${n.costvending}">

    <div class="catalog-vending__single-good__top">
      <ul class="catalog-vending__single-good__top--stars">
        <li class="catalog-vending__single-good__top-img"><img src="images/Star-cofee.svg" alt=""></li> ${n.starsvending}
      </ul>
      <p class="catalog-vending__single-good__top-text">${n.raitvending}<a class="discount__container-item--rightside--link" href="">(${n.reviewvending} отзывов)</a></p>
    </div>

    <div class="catalog-vending__single-good-img--container">
      <img class="catalog-vending__single-good-img" src="${n.imagevending}">
      </div>

      <div class="catalog-vending__single-good__bottom">
    <h5 class="catalog-vending__single-good-title">${n.namevending}</h5>
    <p class="catalog-vending__single-good-text">${n.descriptionvending}</p>
      <div class="catalog-vending__single-good__buy">          
            <p class="catalog-vending__single-good__price">
            ${n.costvending} ₴
          </p>
          <a href="#"> <button class="catalog-vending__list-btn"data-art="${n.namevending}">В корзину</button></a>
      </div>
      </div>

    </div>
  `).join('');
}

const DATAVEN = [
  {
    "typevending" : "Гранулированный кофе",
    "namevending" : "Гранулированный кофе 'Амброзия'",
    "costvending" : 250,
    "imagevending" : "images/catalog-granolas.png",
    "starsvending": "5",
    "raitvending": "5.0",
    "descriptionvending": "Кофе - описание товара, вкус, аромат",
    "reviewvending": "18",
  },
  {
    "typevending" : "Гранулированный цикорий",
    "namevending" : "Гранулированный цикорий 'Амброзия'",
    "costvending" : 340,
    "imagevending" : "images/catalog-granolas.png",
    "starsvending": "4",
    "raitvending": "4.0",
    "descriptionvending": "Кофе - описание товара, вкус, аромат",
    "reviewvending": "22",
  },
  {
    "typevending" : "Гранулированный кофе",
    "namevending" : "Гранулированный кофе 'Амброзия'",
    "costvending" : 550,
    "imagevending" : "images/catalog-granolas.png",
    "starsvending": "4",
    "raitvending": "4.0",
    "descriptionvending": "Кофе - описание товара, вкус, аромат",
    "reviewvending": "32",
  },
  {
    "typevending" : "Гранулированный какао",
    "namevending" : "Гранулированный какао 'Амброзия'",
    "costvending" : 580,
    "imagevending" : "images/catalog-granolas.png",
    "starsvending": "4",
    "raitvending": "4.0",
    "descriptionvending": "Кофе - описание товара, вкус, аромат",
    "reviewvending": "33",
  },
  {
    "typevending" : "Гранулированный кофе",
    "namevending" : "Гранулированный кофе 'Амброзия'",
    "costvending" : 140,
    "imagevending" : "images/catalog-granolas.png",
    "starsvending": "3",
    "raitvending": "3.0",
    "descriptionvending": "Кофе - описание товара, вкус, аромат",
    "reviewvending": "12",
  },
  {
    "typevending" : "Гранулированный кофе",
    "namevending" : "Гранулированный кофе 'Амброзия'",
    "costvending" : 475,
    "imagevending" : "images/catalog-granolas.png",
    "starsvending": "3",
    "raitvending": "3.0",
    "descriptionvending": "Кофе - описание товара, вкус, аромат",
    "reviewvending": "16",
  },
  {
    "typevending" : "Кофейные напитки",
    "namevending" : "Кофейные напитки 'Амброзия'",
    "costvending" : 330,
    "imagevending" : "images/catalog-granolas.png",
    "starsvending": "2",
    "raitvending": "2.0",
    "descriptionvending": "Кофе - описание товара, вкус, аромат",
    "reviewvending": "29",
  },
  {
    "typevending" : "Гранулированный кофе",
    "namevending" : "Черный Кофе 'Амброзия'",
    "costvending" : 250,
    "imagevending" : "images/catalog-granolas.png",
    "starsvending": "5",
    "raitvending": "5.0",
    "descriptionvending": "Кофе - описание товара, вкус, аромат",
    "reviewvending": "18",
  },
  {
    "typevending" : "Гранулированный цикорий",
    "namevending" : "Гранулированный цикорий 'Амброзия'",
    "costvending" : 340,
    "imagevending" : "images/catalog-granolas.png",
    "starsvending": "4",
    "raitvending": "4.0",
    "descriptionvending": "Кофе - описание товара, вкус, аромат",
    "reviewvending": "22",
  },
  {
    "typevending" : "Зерновой кофе",
    "namevending" : "Зерновой кофе 'Амброзия'",
    "costvending" : 550,
    "imagevending" : "images/catalog-granolas.png",
    "starsvending": "4",
    "raitvending": "4.0",
    "descriptionvending": "Кофе - описание товара, вкус, аромат",
    "reviewvending": "32",
  },
  {
    "typevending" : "Гранулированный какао",
    "namevending" : "Гранулированный какао 'Амброзия'",
    "costvending" : 580,
    "imagevending" : "images/catalog-granolas.png",
    "starsvending": "4",
    "raitvending": "4.0",
    "descriptionvending": "Кофе - описание товара, вкус, аромат",
    "reviewvending": "33",
  },
  {
    "typevending" : "Гранулированные кофейные напитки",
    "namevending" : "Гранулированные кофейные напитки 'Амброзия'",
    "costvending" : 140,
    "imagevending" : "images/catalog-granolas.png",
    "starsvending": "3",
    "raitvending": "3.0",
    "descriptionvending": "Кофе - описание товара, вкус, аромат",
    "reviewvending": "12",
  },
  {
    "typevending" : "Кофе порошкообразный",
    "namevending" : "Кофе порошкообразный 'Амброзия'",
    "costvending" : 475,
    "imagevending" : "images/catalog-granolas.png",
    "starsvending": "3",
    "raitvending": "3.0",
    "descriptionvending": "Кофе - описание товара, вкус, аромат",
    "reviewvending": "16",
  },
  {
    "typevending" : "Гранулированный цикорий",
    "namevending" : "Гранулированный цикорий 'Амброзия'",
    "costvending" : 330,
    "imagevending" : "images/catalog-granolas.png",
    "starsvending": "2",
    "raitvending": "2.0",
    "descriptionvending": "Кофе - описание товара, вкус, аромат",
    "reviewvending": "29",
  },
  {
    "typevending" : "Гранулированный цикорий",
    "namevending" : "Гранулированный цикорий 'Амброзия'",
    "costvending" : 250,
    "imagevending" : "images/catalog-granolas.png",
    "starsvending": "5",
    "raitvending": "5.0",
    "descriptionvending": "Кофе - описание товара, вкус, аромат",
    "reviewvending": "18",
  },
  {
    "typevending" : "Гранулированный цикорий",
    "namevending" : "Гранулированный цикорий 'Амброзия'",
    "costvending" : 340,
    "imagevending" : "images/catalog-granolas.png",
    "starsvending": "4",
    "raitvending": "4.0",
    "descriptionvending": "Кофе - описание товара, вкус, аромат",
    "reviewvending": "22",
  },
  {
    "typevending" : "Зерновой кофе",
    "namevending" : "Зерновой кофе 'Амброзия'",
    "costvending" : 550,
    "imagevending" : "images/catalog-granolas.png",
    "starsvending": "4",
    "raitvending": "4.0",
    "descriptionvending": "Кофе - описание товара, вкус, аромат",
    "reviewvending": "32",
  },
  {
    "typevending" : "Гранулированный какао",
    "namevending" : "Гранулированный какао 'Амброзия'",
    "costvending" : 580,
    "imagevending" : "images/catalog-granolas.png",
    "starsvending": "4",
    "raitvending": "4.0",
    "descriptionvending": "Кофе - описание товара, вкус, аромат",
    "reviewvending": "33",
  },
  {
    "typevending" : "Гранулированные кофейные напитки",
    "namevending" : "Гранулированные кофейные напитки 'Амброзия'",
    "costvending" : 140,
    "imagevending" : "images/catalog-granolas.png",
    "starsvending": "3",
    "raitvending": "3.0",
    "descriptionvending": "Кофе - описание товара, вкус, аромат",
    "reviewvending": "12",
  },
  {
    "typevending" : "Кофе порошкообразный",
    "namevending" : "Кофе порошкообразный 'Амброзия'",
    "costvending" : 475,
    "imagevending" : "images/catalog-granolas.png",
    "starsvending": "3",
    "raitvending": "3.0",
    "descriptionvending": "Кофе - описание товара, вкус, аромат",
    "reviewvending": "16",
  },
  {
    "typevending" : "Кофейные напитки",
    "namevending" : "Кофейные напитки 'Амброзия'",
    "costvending" : 330,
    "imagevending" : "images/catalog-granolas.png",
    "starsvending": "2",
    "raitvending": "2.0",
    "descriptionvending": "Кофе - описание товара, вкус, аромат",
    "reviewvending": "29",
  },
  {
    "typevending" : "Гранулированные кофейные напитки",
    "namevending" : "Гранулированные кофейные напитки 'Амброзия'",
    "costvending" : 140,
    "imagevending" : "images/catalog-granolas.png",
    "starsvending": "3",
    "raitvending": "3.0",
    "descriptionvending": "Кофе - описание товара, вкус, аромат",
    "reviewvending": "12",
  },
  {
    "typevending" : "Кофе порошкообразный",
    "namevending" : "Кофе порошкообразный 'Амброзия'",
    "costvending" : 475,
    "imagevending" : "images/catalog-granolas.png",
    "starsvending": "3",
    "raitvending": "3.0",
    "descriptionvending": "Кофе - описание товара, вкус, аромат",
    "reviewvending": "16",
  },
  {
    "typevending" : "Кофейные напитки",
    "namevending" : "Кофейные напитки 'Амброзия'",
    "costvending" : 330,
    "imagevending" : "images/catalog-granolas.png",
    "starsvending": "2",
    "raitvending": "2.0",
    "descriptionvending": "Кофе - описание товара, вкус, аромат",
    "reviewvending": "29",
  }
]

outputvending(DATAVEN);


/////////////////////SEE MORE vending//////////////////////////////

$(document).ready(function(){
  $(".catalog-vending__single-good__container-item").slice(8).hide();
  $(".catalog-vending__see-more-goods").on("click", function(l){
    l.preventDefault();
    $(".catalog-vending__single-good__container-item:hidden").slice(0, 8).slideDown();
    if($(".catalog-vending__single-good__container-item:hidden").length == 0) {
      $(".catalog-vending__see-more-goods").text("Продукции для вендинга больше нет(").addClass(".catalog-vending__see-more-goods-none");
    }
  });
  
});

///////////// SORT vending/////////////

document.querySelector('#аscendingvending').onclick = function(){
  outputvending(DATAVEN);
  mySortvending('price-vending');
}
document.querySelector('#descendingvending').onclick = function(){
  outputvending(DATAVEN);
  mySortvendingDesc('price-vending');
}
document.querySelector('#raitvending').onclick = function(){
  outputvending(DATAVEN);
  mySortvendingDesc('raiting-vending');
}
document.querySelector('#reviewvending').onclick = function(){
  outputvending(DATAVEN);
  mySortvendingDesc('review-vending');
}

function mySortvending(sortTypevending) {
  let vendings = document.querySelector('.catalog-vending__goods');
  for(let i=0; i<vendings.children.length; i++){
    for(let j=i; j<vendings.children.length; j++){
      if(+vendings.children[i].getAttribute(sortTypevending) > +vendings.children[j].getAttribute(sortTypevending)){
        replacedNode = vendings.replaceChild(vendings.children[j], vendings.children[i]);
        insertAfter(replacedNode, vendings.children[i]);
      }
    }
  }
}

function mySortvendingDesc(sortTypevending){
  let vendings = document.querySelector('.catalog-vending__goods');
  for(let i=0; i < vendings.children.length; i++){
    for(let j=i; j < vendings.children.length; j++){
      if(+vendings.children[i].getAttribute(sortTypevending) < +vendings.children[j].getAttribute(sortTypevending)){
        replacedNode = vendings.replaceChild(vendings.children[j], vendings.children[i]);
        insertAfter(replacedNode, vendings.children[i]);
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
         outputvending(DATAVEN);
     });
   });
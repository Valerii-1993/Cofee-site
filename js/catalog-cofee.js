

///////////// FILTERS COFEE/////////////

const filters = document.querySelector('#filters');

filters.addEventListener('input', filterGoods);

function filterGoods() {
  const
    geografy = [...filters.querySelectorAll('#geografy input:checked')].map(n => n.value),
    treatment = [...filters.querySelectorAll('#treatment input:checked')].map(n => n.value),
    type = [...filters.querySelectorAll('#type input:checked')].map(n => n.value),
    others = [...filters.querySelectorAll('#others input:checked')].map(n => n.value),
    name = [...filters.querySelectorAll('#name input:checked')].map(n => n.value),
    cost = [...filters.querySelectorAll('#cost input:checked')].map(n => n.value),
    acidity = [...filters.querySelectorAll('#acidity input:checked')].map(n => n.value),
    degree5 = [...filters.querySelectorAll('#degree5 input:checked')].map(n => n.value),
    degree4 = [...filters.querySelectorAll('#degree4 input:checked')].map(n => n.value),
    degree3 = [...filters.querySelectorAll('#degree3 input:checked')].map(n => n.value),
    degree2 = [...filters.querySelectorAll('#degree2 input:checked')].map(n => n.value),
    degree1 = [...filters.querySelectorAll('#degree1 input:checked')].map(n => n.value);
    
  outputGoods(DATA.filter(n => (
    (!geografy.length || geografy.includes(n.country)) &&
    (!acidity.length || acidity.includes(n.acidity)) &&
    (!type.length || type.includes(n.type)) &&
    (!others.length || others.includes(n.others)) &&
    (!name.length || name.includes(n.name)) &&
    (!cost.length || cost.includes(n.cost)) &&
    (!degree5.length || degree5.includes(n.degree)) &&
    (!degree4.length || degree4.includes(n.degree)) &&
    (!degree3.length || degree3.includes(n.degree)) &&
    (!degree2.length || degree2.includes(n.degree)) &&
    (!degree1.length || degree1.includes(n.degree)) &&
    (!treatment.length || treatment.includes(n.treatment))
  )));
};


///////////// OUTPUT GOODS COFEE/////////////

function outputGoods(goods) {
  document.getElementById("goods").innerHTML = goods.map(n => `
    <div class="catalog-cofee__single-good__container-item" acidity="${n.acidity}" raiting="${n.rait}" data-price="${n.cost}">

    <div class="catalog-cofee__single-good__container">

    <div class="catalog-cofee__single-good__leftside">

      <img class="catalog-cofee__single-good-img" src="${n.image}">
    </div>

    <div class="catalog-cofee__single-good__rightside">
      <ul class="discount__container-item--rightside--stars">
        <li discount__container-item--rightside-img><img src="images/Star-cofee.svg" alt=""></li> \*${n.stars}
      </ul>
      <p class="discount__container-item--rightside--rait">${n.rait}<a class="discount__container-item--rightside--link" href="">(${n.review} отзывов)</a></p>

      <p class="catalog-cofee__single-good__type-specifications">Кислинка</p>
      <p class="catalog-cofee__single-good__specifications">${n.acidity}</p>
      <p class="catalog-cofee__single-good__type-specifications">Вид кофе</p>
      <p class="catalog-cofee__single-good__specifications">${n.type}</p>
      <p class="catalog-cofee__single-good__type-specifications">Способ обработки</p>
      <p class="catalog-cofee__single-good__specifications">${n.treatment}</p>
      </div>

    </div>
    <h5 class="catalog-cofee__single-good-title">${n.name}</h5>
    <p class="catalog-cofee__single-good-text">${n.description}</p>
      <div class="catalog-cofee__single-good__buy">          
            <p class="catalog-cofee__single-good__price">
            ${n.cost} ₴
          </p>
          <a href="#"> <button class="catalog-cofee__list-btn"data-art="${n.name}">В корзину</button></a>
        </div>

    </div>
  `).join('');
};

const DATA = [
  {
    "type" : "Арабика",
    "name" : "Colombia Supremo",
    "cost" : 250,
    "country" : "Африка",
    "treatment" : "Сухая",
    "others": "Популярное",
    "image" : "images/discount-item.png",
    "acidity": "Высокая",
    "stars": "5",
    "rait": "5.0",
    "description": "Свежеобжаренный кофе - описание товара, вкус, аромат",
    "review": "18",
    "discount": "yes",
    "degree": "1",
  },
  {
    "type" : "Робуста",
    "name" : "Colombia Supremo",
    "cost" : 305,
    "country" : "Йемен",
    "treatment" : "Прочее",
    "others": "Популярное",
    "image" : "images/discount-item.png",
    "acidity": "Средняя",
    "stars": "4",
    "rait": "4.0",
    "description": "Свежеобжаренный кофе - описание товара, вкус, аромат",
    "review": "17",
    "degree": "1",
  },
  {
    "type" : "Смесь арабик",
    "name" : "Colombia Supremo",
    "cost" : 505,
    "country" : "Уганда",
    "treatment" : "Мытая",
    "others": "Новинки",
    "image" : "images/discount-item.png",
    "acidity": "Высокая",
    "stars": "3",
    "rait": "3.0",
    "description": "Свежеобжаренный кофе - описание товара, вкус, аромат",
    "review": "28",
    "discount": "yes",
    "degree": "2",
  },
  {
    "type" : "Смесь арабики и робусты",
    "name" : "Colombia Supremo",
    "cost" : 148,
    "country" : "Эфиопия",
    "treatment" : "Сухая",
    "others": "Скидки",
    "image" : "images/discount-item.png",
    "acidity": "Средняя",
    "stars": "4",
    "rait": "4.0",
    "description": "Свежеобжаренный кофе - описание товара, вкус, аромат",
    "review": "32",
    "degree": "3",
  },
  {
      "type" : "Робуста",
      "name" : "Colombia Supremo",
      "cost" : 505,
      "country" : "Азия",
      "treatment" : "Прочее",
      "others": "Сорт недели",
      "image" : "images/discount-item.png",
      "acidity": "Высокая",
      "stars": "5",
      "rait": "5.0",
      "description": "Свежеобжаренный кофе - описание товара, вкус, аромат",
      "review": "13",
      "discount": "yes",
      "degree": "3",
    },
    {
      "type" : "Смесь арабики и робусты",
      "name" : "Colombia Supremo",
      "cost" : 765,
      "country" : "Центр. Америка",
      "treatment" : "Сухая",
      "others": "Микролот",
      "image" : "images/discount-item.png",
      "acidity": "Средняя",
      "stars": "2",
      "rait": "2.0",
      "description": "Свежеобжаренный кофе - описание товара, вкус, аромат",
      "review": "12",
      "degree": "3",
    },
    {
      "type" : "Смесь арабик",
      "name" : "Colombia Supremo",
      "cost" : 467,
      "country" : "Лат. Америка",
      "treatment" : "Мытая",
      "image" : "images/discount-item.png",
      "others": "Ваш выбор",
      "acidity": "Высокая",
      "stars": "1",
      "rait": "1.0",
      "description": "Свежеобжаренный кофе - описание товара, вкус, аромат",
      "review": "16",
      "discount": "yes",
      "degree": "5",
    },
    {
      "type" : "Робуста",
      "name" : "Colombia Supremo",
      "cost" : 333,
      "country" : "Уганда",
      "treatment" : "Сухая",
      "image" : "images/discount-item.png",
      "others": "Новый урожай",
      "acidity": "Низкая",
      "stars": "1",
      "rait": "1.0",
      "description": "Свежеобжаренный кофе - описание товара, вкус, аромат",
      "review": "22",
      "degree": "5",
    },
    {
      "type" : "Смесь арабик",
      "name" : "Colombia Supremo",
      "cost" : 404,
      "country" : "Уганда",
      "treatment" : "Сухая",
      "image" : "images/discount-item.png",
      "others": "Популярное",
      "acidity": "Высокая",
      "stars": "5",
      "rait": "5.0",
      "description": "Свежеобжаренный кофе - описание товара, вкус, аромат",
      "review": "19",
      "discount": "yes",
      "degree": "4",
    },
    {
      "type" : "Арабика",
      "name" : "Colombia Supremo",
      "cost" : 250,
      "country" : "Африка",
      "treatment" : "Сухая",
      "others": "Популярное",
      "image" : "images/discount-item.png",
      "acidity": "Высокая",
      "stars": "4",
      "rait": "4.0",
      "description": "Свежеобжаренный кофе - описание товара, вкус, аромат",
      "review": "18",
      "discount": "yes",
      "degree": "5",
    },
    {
      "type" : "Робуста",
      "name" : "Colombia Supremo",
      "cost" : 305,
      "country" : "Йемен",
      "treatment" : "Прочее",
      "others": "Популярное",
      "image" : "images/discount-item.png",
      "acidity": "Средняя",
      "stars": "4",
      "rait": "4.0",
      "description": "Свежеобжаренный кофе - описание товара, вкус, аромат",
      "review": "17",
      "degree": "4",
    },
    {
      "type" : "Смесь арабик",
      "name" : "Colombia Supremo",
      "cost" : 505,
      "country" : "Уганда",
      "treatment" : "Мытая",
      "others": "Новинки",
      "image" : "images/discount-item.png",
      "acidity": "Высокая",
      "stars": "3",
      "rait": "3.0",
      "description": "Свежеобжаренный кофе - описание товара, вкус, аромат",
      "review": "28",
      "discount": "yes",
      "degree": "2",
    },
    {
      "type" : "Смесь арабики и робусты",
      "name" : "Colombia Supremo",
      "cost" : 148,
      "country" : "Эфиопия",
      "treatment" : "Сухая",
      "others": "Скидки",
      "image" : "images/discount-item.png",
      "acidity": "Средняя",
      "stars": "4",
      "rait": "4.0",
      "description": "Свежеобжаренный кофе - описание товара, вкус, аромат",
      "review": "32",
      "degree": "1",
    },
    {
        "type" : "Робуста",
        "name" : "Colombia Supremo",
        "cost" : 505,
        "country" : "Азия",
        "treatment" : "Прочее",
        "others": "Сорт недели",
        "image" : "images/discount-item.png",
        "acidity": "Высокая",
        "stars": "3",
        "rait": "3.0",
        "description": "Свежеобжаренный кофе - описание товара, вкус, аромат",
        "review": "13",
        "discount": "yes",
        "degree": "5",
      },
      {
        "type" : "Смесь арабики и робусты",
        "name" : "Colombia Supremo",
        "cost" : 765,
        "country" : "Центр. Америка",
        "treatment" : "Сухая",
        "others": "Микролот",
        "image" : "images/discount-item.png",
        "acidity": "Средняя",
        "stars": "4",
        "rait": "4.0",
        "description": "Свежеобжаренный кофе - описание товара, вкус, аромат",
        "review": "12",
        "degree": "4",
      },
      {
        "type" : "Смесь арабик",
        "name" : "Colombia Supremo",
        "cost" : 467,
        "country" : "Лат. Америка",
        "treatment" : "Мытая",
        "image" : "images/discount-item.png",
        "others": "Ваш выбор",
        "acidity": "Высокая",
        "stars": "2",
        "rait": "2.0",
        "description": "Свежеобжаренный кофе - описание товара, вкус, аромат",
        "review": "16",
        "discount": "yes",
        "degree": "2",
      },
      {
        "type" : "Робуста",
        "name" : "Colombia Supremo",
        "cost" : 333,
        "country" : "Уганда",
        "treatment" : "Сухая",
        "image" : "images/discount-item.png",
        "others": "Новый урожай",
        "acidity": "Низкая",
        "stars": "4",
        "rait": "4.0",
        "description": "Свежеобжаренный кофе - описание товара, вкус, аромат",
        "review": "22",
        "degree": "1",
      },
      {
        "type" : "Смесь арабик",
        "name" : "Colombia Supremo",
        "cost" : 404,
        "country" : "Уганда",
        "treatment" : "Сухая",
        "image" : "images/discount-item.png",
        "others": "Популярное",
        "acidity": "Высокая",
        "stars": "4",
        "rait": "4.0",
        "description": "Свежеобжаренный кофе - описание товара, вкус, аромат",
        "review": "19",
        "degree": "2",
      },
      {
        "type" : "Смесь арабик",
        "name" : "Colombia Supremo",
        "cost" : 467,
        "country" : "Лат. Америка",
        "treatment" : "Мытая",
        "image" : "images/discount-item.png",
        "others": "Ваш выбор",
        "acidity": "Высокая",
        "stars": "4",
        "rait": "4.0",
        "description": "Свежеобжаренный кофе - описание товара, вкус, аромат",
        "review": "16",
        "degree": "1",
      },
      {
        "type" : "Робуста",
        "name" : "Colombia Supremo",
        "cost" : 333,
        "country" : "Уганда",
        "treatment" : "Сухая",
        "image" : "images/discount-item.png",
        "others": "Новый урожай",
        "acidity": "Низкая",
        "stars": "4",
        "rait": "3.0",
        "description": "Свежеобжаренный кофе - описание товара, вкус, аромат",
        "review": "22",
        "degree": "5"
      }   
]

outputGoods(DATA);

/////////////////////SEE MORE COFEE//////////////////////////////

$(document).ready(function(){
  $(".catalog-cofee__single-good__container-item").slice(8).hide();
  $(".catalog-cofee__see-more-goods").on("click", function(e){
    e.preventDefault();
    $(".catalog-cofee__single-good__container-item:hidden").slice(0, 8).slideDown();
    if($(".catalog-cofee__single-good__container-item:hidden").length == 0) {
      $(".catalog-cofee__see-more-goods").text("Кофе больше нет(").addClass(".catalog-cofee__see-more-goods-none");
    };
  })
});

///////////// SORT COFEE/////////////

document.querySelector('#аscending').onclick = function(){
  outputGoods(DATA);
  mySort('data-price');
}
document.querySelector('#descending').onclick = function(){
  outputGoods(DATA);
  mySortDesc('data-price');
}
document.querySelector('#rait').onclick = function(){
  outputGoods(DATA);
  mySortDesc('raiting');
};
document.querySelector('#acid').onclick = function(){
  outputGoods(DATA);
  mySort('acidity');
};

function mySortDesc(sortType){
  let nerv = document.querySelector('.catalog-cofee__goods');
  for(let i=0; i < nerv.children.length; i++){
    for(let j=i; j < nerv.children.length; j++){
      if(+nerv.children[i].getAttribute(sortType) < +nerv.children[j].getAttribute(sortType)){
        replacedNode = nerv.replaceChild(nerv.children[j], nerv.children[i]);
        insertAfter(replacedNode, nerv.children[i]);
      }
    }
  }
};

function mySort(sortType) {
  let nerv = document.querySelector('.catalog-cofee__goods');
  for(let i=0; i<nerv.children.length; i++){
    for(let j=i; j<nerv.children.length; j++){
      if(+nerv.children[i].getAttribute(sortType) > +nerv.children[j].getAttribute(sortType)){
        replacedNode = nerv.replaceChild(nerv.children[j], nerv.children[i]);
        insertAfter(replacedNode, nerv.children[i]);
      }
    }
  }
};


function insertAfter(elem, refElem){
  return refElem.parentNode.insertBefore(elem, refElem.nextSibling);
};


///////////// RESET FILTERS/////////////

$(document).ready(function(){
  $('.catalog-cofee__reset-filter--btn').on('click', function(){
       $('input[type="radio"]').prop('checked', false);
       outputGoods(DATA);
   });
 });



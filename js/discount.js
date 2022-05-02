
///////////// OUTPUT GOODS food/////////////
function outputdiscount(good) {
  document.getElementById("discountgoods").innerHTML = good.map(n => `
    <div class="catalog-discount__single-good__container-item">

    <div class="discount-good__single-good__top">
      <ul class="discount-good__single-good__top--stars">
        <li class="discount-good__single-good__top-img"><img src="images/Star-cofee.svg" alt=""></li> ${n.stars}
      </ul>
      <p class="discount-good__single-good__top-text">${n.rait}<a class="discount__container-item--rightside--link" href="#">(${n.review} отзывов)</a></p>
    </div>

    <div class="discount-good__single-good-img--container">
      <img class="discount-good__single-good-img" src="${n.image}">
      </div>

      <div class="discount-good__single-good__bottom">
    <h5 class="discount-good__single-good-title">${n.name}</h5>
    <p class="discount-good__single-good-text">${n.description}</p>
            <s class="discount-good__single-good__old-price">
            ${n.oldCost} ₴
          </s>    
      <div class="discount-good__single-good__buy">  

            <p class="discount-good__single-good__price">
            ${n.cost} ₴
          </p>
           <button class="discount-good__list-btn">В корзину</button>
      </div>
      </div>

    </div>
  `).join('');
}

const DATADISCOUNT = [
  {
    "type" : "Цикорий и корень цикория",
    "name" : "Цикорий и корень цикория",
    "oldCost" : 250,
    "cost" : 150,
    "image" : "images/catalog-food-item.png",
    "stars": "5",
    "rait": "5.0",
    "description": "Здоровое питание - описание товара, вкус, аромат",
    "review": "18",

},
    {"type" : "Смесь арабик",
    "name" : "Colombia Supremo",
    "oldCost" : 250,
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
    "type" : "Ячменные напитки",
    "name" : "Ячменные напитки",
    "oldCost" : 550,
    "cost" : 340,
    "image" : "images/catalog-food-item.png",
    "stars": "4",
    "rait": "4.0",
    "description": "Здоровое питание - описание товара, вкус, аромат",
    "review": "22",
  },
{
    "type" : "Напитки для здоровья",
    "name" : "Напитки для здоровья",
    "oldCost" : 650,
    "cost" : 550,
    "image" : "images/catalog-food-item.png",
    "stars": "4",
    "rait": "4.0",
    "description": "Здоровое питание - описание товара, вкус, аромат",
    "review": "32",
  },
  {
    "type" : "Смесь арабик",
    "name" : "Colombia Supremo",
    "oldCost" : 600,
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
    "type" : "Черный чай",
    "name" : "Черный чай 'Амброзия'",
    "oldCost" : 300,
    "cost" : 250,
    "image" : "images/catalog-black-tea.png",
    "stars": "5",
    "rait": "5.0",
    "description": "Чай - описание товара, вкус, аромат",
    "review": "18",
  },
  {
    "type" : "Зеленый чай",
    "name" : "Зеленый чай 'Амброзия'",
    "oldCost" : 400,
    "cost" : 340,
    "image" : "images/catalog-green-tea.png.png",
    "stars": "4",
    "rait": "4.0",
    "description": "Чай - описание товара, вкус, аромат",
    "review": "22",
  },
  {
    "type" : "Арабика",
    "name" : "Colombia Supremo",
    "oldCost" : 350,
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
    "type" : "Молочный улунг",
    "name" : "Молочный улунг 'Амброзия'",
    "oldCost" : 850,
    "cost" : 550,
    "image" : "images/catalog-green-tea.png.png",
    "stars": "4",
    "rait": "4.0",
    "description": "Чай - описание товара, вкус, аромат",
    "review": "32",
  },

  ]

  outputdiscount(DATADISCOUNT);

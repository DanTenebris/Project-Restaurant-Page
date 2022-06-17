import ChipaOne from './images/chipa1.jpeg'
import CoffeCup from './images/coffe1.jpg'


const menuPage = (() => {

  const _addClassMultipleElements = (_classN, _elementsArray) => {
    for (let i = 0; i < _elementsArray.length; i++) {
      _elementsArray[i].className = _classN;
    }
  };

  const _foodFactory = (name, price, description) => {
    const card = document.createElement('p');

    const _nameS = document.createElement('span');
    const _priceS = document.createElement('span');

    _nameS.classList.add('food-name');
    _priceS.classList.add('food-price');

    _nameS.textContent = name;
    _priceS.textContent = price;

    card.append(_nameS, _priceS, description);
    card.classList.add('food-card');

    return { card };
  };

  const showPage = () => {

    const mainContent = document.querySelector('main');


    const mainH = document.createElement('h1');
    mainH.textContent = 'Menu';

    const divOne = document.createElement('div');
    const divTwo = document.createElement('div');

    mainContent.append(mainH, divOne, divTwo);


    const firstH = document.createElement('h2');
    firstH.textContent = 'Food';

    const foodList = document.createElement('div');

    const firstImg = document.createElement('img');
    firstImg.src = ChipaOne;

    const food1 = _foodFactory('Delectamentum Cibi Ex Frumento', '1$', 'Cibum delectamentum perfectum est diebus frigidis.');
    const food2 = _foodFactory('Mira Sphaera', '2$', 'Farina cocta de frumento cum caseo in medio.');
    const food3 = _foodFactory('Magnus Upupam', '2$', 'Cibus typicus factus est ex frumento in modum magni anuli.');
    const food4 = _foodFactory('Crocodilus croceus', '1$', 'Farina cocta ex frumento cum caseo sortibus. Crocodili formam habet. Specimen pabulum puerorum');
    const food5 = _foodFactory('Nigrum Exspiravit', '3$', 'Scelerisque velatis cocta corrumpit. Forma phantasma est.');
    const food6 = _foodFactory('Frumentum Panis', '1$', 'Specimen pro illis qui non obliviscuntur.');
    const food7 = _foodFactory('Bomb Scelerisque', '2$', 'Scelerisque cornbread impleta.');

    foodList.append(firstImg, food1.card, food2.card, food3.card, food4.card, food5.card, food6.card, food7.card);
    foodList.classList.add('food-list');

    divOne.append(firstH, foodList);



    const secondH = document.createElement('h2');
    secondH.textContent = 'Drinks';

    const drinkList = document.createElement('div');

    const secondImg = new Image();
    secondImg.src = CoffeCup;

    const drink1 = _foodFactory('Delectamentum Cibi Ex Frumento', '1$', 'Cibum delectamentum perfectum est diebus frigidis.');
    const drink2 = _foodFactory('Mira Sphaera', '2$', 'Farina cocta de frumento cum caseo in medio.');
    const drink3 = _foodFactory('Magnus Upupam', '2$', 'Cibus typicus factus est ex frumento in modum magni anuli.');
    const drink4 = _foodFactory('Crocodilus croceus', '1$', 'Farina cocta ex frumento cum caseo sortibus. Crocodili formam habet. Specimen pabulum puerorum');
    const drink5 = _foodFactory('Nigrum Exspiravit', '3$', 'Scelerisque velatis cocta corrumpit. Forma phantasma est.');
    const drink6 = _foodFactory('Frumentum Panis', '1$', 'Specimen pro illis qui non obliviscuntur.');
    const drink7 = _foodFactory('Bomb Scelerisque', '2$', 'Scelerisque cornbread impleta.');

    drinkList.append(secondImg, drink1.card, drink2.card, drink3.card, drink4.card, drink5.card, drink6.card, drink7.card);
    drinkList.classList.add('food-list');

    divTwo.append(secondH, drinkList);




    _addClassMultipleElements('imgP', [firstImg, secondImg]);
    secondImg.className += ' second';
  };

  return { showPage };
})();

export { menuPage };
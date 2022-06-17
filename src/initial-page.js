import ChipaFour from './images/chipa4.jpg'
import ChipaFive from './images/chipa5.jpg'
import ChipaSeven from './images/chipa7.jpg'


const initialPage = (() => {

  const _addClassMultipleElements = (_classN, _elementsArray) => {
    for (let i = 0; i < _elementsArray.length; i++) {
      _elementsArray[i].className = _classN;
    }
  };

  const showPage = () => {

    const mainContent = document.querySelector('main');


    const mainH = document.createElement('h1');
    mainH.textContent = 'Cur color meus diversus est?';

    const divOne = document.createElement('div');
    const divTwo = document.createElement('div');
    const divThree = document.createElement('div');

    mainContent.append(mainH, divOne, divTwo, divThree);


    const firstImg = document.createElement('img');
    firstImg.src = ChipaFive;

    const firstP = document.createElement('p');
    firstP.textContent = 'Mater eius Elf obscura est, sed pellis eius alba erat. Poteratne fieri quod ipse elf non erat tenebrosus? Nesciebat quomodo corpora Dryadum tenebrarum in cursu vitae suae mutarent. An fieri potest ut nati sint cum pelle alba, quae in adultis crescentibus obscurior vertitur?';

    divOne.append(firstImg, firstP);


    const secondImg = new Image();
    secondImg.src = ChipaFour;

    const secondP = document.createElement('p');
    secondP.textContent = 'Ut Darcia, mater Vandalieu, leniter risit, verba eius dubia discussit. Intellexit se natum esse mixtum sanguine, parentibus diversorum generum natum.';

    divTwo.append(secondImg, secondP);


    const thirdImg = document.createElement('img');
    thirdImg.src = ChipaSeven;

    const thirdP = document.createElement('p');
    thirdP.textContent = 'Postquam Vandalieu aetatem quinque mensium attigit, Darcia eum in spelunca relinquens per horas ad tempus exire coepit et cibum e silva colligere.';

    divThree.append(thirdImg, thirdP);

    _addClassMultipleElements('imgP', [firstImg, secondImg, thirdImg]);
    secondImg.className += ' second';
  };


  return {showPage};
})();

export { initialPage };
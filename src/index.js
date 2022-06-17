import { headerPage } from './header-page';
import { initialPage } from './initial-page';
import { menuPage } from './menu-page';
import { contactPage } from './contact-page';
import './reset2.css';
import './style.css';

const displayController = (() => {
  const _root = document.documentElement;

  const _mainContent = document.querySelector('main');
  const _mainPageBtn = document.querySelector('.btn.main');
  const _menuBtn = document.querySelector('.btn.menu');
  const _contactBtn = document.querySelector('.btn.contact');

  const _changeRootClass = (newClass) => {
    _root.className = newClass;
  };

  const _toggleBtnClass = (btn) => {
    if (btn !== _mainPageBtn) {
      _mainPageBtn.classList.remove('active');
    } else {
      _mainPageBtn.classList.add('active');
    }

    if (btn !== _menuBtn) {
      _menuBtn.classList.remove('active');
    } else {
      _menuBtn.classList.add('active');
    }

    if (btn !== _contactBtn) {
      _contactBtn.classList.remove('active');
    } else {
      _contactBtn.classList.add('active');
    }
  };

  const _chargeListeners = () => {
    const imgElements = document.querySelectorAll('.imgP');
    for (let imgEl of imgElements) {
      imgEl.addEventListener('click', () => {
        imgEl.classList.toggle('expand');
      });
    }
  }

  const showMainPage = () => {
    if (_root.className !== 'main') {
      while (_mainContent.firstChild) {
        _mainContent.removeChild(_mainContent.lastChild);
      }
      initialPage.showPage();
      _toggleBtnClass(_mainPageBtn);
      _chargeListeners();
      _changeRootClass('main');
    }
  };

  const showMenu = () => {
    if (_root.className !== 'menu') {
      while (_mainContent.firstChild) {
        _mainContent.removeChild(_mainContent.lastChild);
      }
      menuPage.showPage();
      _toggleBtnClass(_menuBtn);
      _chargeListeners();
      _changeRootClass('menu');
    }
  };

  const showContact = () => {
    if (_root.className !== 'contact') {
      while (_mainContent.firstChild) {
        _mainContent.removeChild(_mainContent.lastChild);
      }
      contactPage.showPage();
      _toggleBtnClass(_contactBtn);
      _chargeListeners();
      _changeRootClass('contact');
    }
  };

  return { showMenu, showMainPage, showContact };
})();

const logo = document.querySelector('header>p');
const mainPageBtn = document.querySelector('.btn.main');
const menuBtn = document.querySelector('.btn.menu');
const contactBtn = document.querySelector('.btn.contact');





headerPage;
displayController.showMainPage();

logo.addEventListener('click', displayController.showMainPage);

mainPageBtn.addEventListener('click', displayController.showMainPage);

menuBtn.addEventListener('click', displayController.showMenu);

contactBtn.addEventListener('click', displayController.showContact);

console.log('HelloMoto');
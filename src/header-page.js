const headerPage = (()=>{

  const bodyContainer = document.querySelector('body');

  const _addElementAttributes = (_attributeN, _attributeContent = "", _elementsArray) => {
    for (let i = 0; i < _elementsArray.length; i++) {
      _elementsArray[i].setAttribute(_attributeN, _attributeContent);
    }
  };

  const header = document.createElement('header');
  bodyContainer.appendChild(header);

  const headerName = document.createElement('p');
  headerName.textContent = 'Aunt Noe';

  const buttons = document.createElement('div');
  buttons.classList.add('buttons');

  const mainPageBtn = document.createElement('button');
  const menuBtn = document.createElement('button');
  const contactBtn = document.createElement('button');
  mainPageBtn.textContent = 'Main Page';
  menuBtn.textContent = 'Menu';
  contactBtn.textContent = 'Contacts';

  header.append(headerName, buttons);
  buttons.append(mainPageBtn, menuBtn, contactBtn)

  _addElementAttributes('type', 'button', [mainPageBtn, menuBtn, contactBtn]);
  mainPageBtn.classList.add('btn', 'main');
  menuBtn.classList.add('btn', 'menu');
  contactBtn.classList.add('btn', 'contact');


  const mainContent = document.createElement('main');
  bodyContainer.append(mainContent);
})();

export { headerPage };
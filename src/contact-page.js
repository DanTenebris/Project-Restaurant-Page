import CardOutline from './icons/card-account-details-outline.svg'


const contactPage = (() => {

  const _createContactItem = (contactName, contactData) =>{
    const contactItem = document.createElement('p');
    const nameSpan = document.createElement('span');
    const dataSpan = document.createElement('span');
    contactItem.append(nameSpan, dataSpan);

    nameSpan.textContent = contactName;
    dataSpan.textContent = contactData;
    
    dataSpan.classList.add('contact-data');
    contactItem.classList.add('contact-item');

    return contactItem;
  };

  const showPage = () => {

    const mainContent = document.querySelector('main');


    const mainH = document.createElement('h1');
    mainH.textContent = 'Contacts';

    const divOne = document.createElement('div');

    mainContent.append(mainH, divOne);


    const firstImg = document.createElement('img');
    firstImg.src = CardOutline;
    const emptyDiv = document.createElement('div');
    emptyDiv.classList.add('empty-div');

    const firstP = document.createElement('p');
    firstP.textContent = 'Get in touch with our team to see how we can help you.';

    const telephone = _createContactItem('Telephone', '+555-999-111');
    const eMail = _createContactItem('E-mail', 'aunt-noe@mymail.com');
    const address = _createContactItem('Address', '2 km 69, Department of Cordillera, Eusebio Ayala Route - 1ro de Marzo City.');


    divOne.append(firstImg, emptyDiv, firstP, telephone, eMail, address);

    firstImg.classList.add('imgContact');
    divOne.classList.add('contact-card');
  };

  return {showPage};
})();

export { contactPage };
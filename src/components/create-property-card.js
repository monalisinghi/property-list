/*
* This function will take following 2 @params and create li element to be added to the #results or #saved ul elements on the page
*
* @param property - an object to create li element
* @param btnType - type of button to be added to the li element (Add / Remove)
* property object sample
*    {
*      price: '$526,500',
*      agency: {
*        brandingColors: {
*          primary: '#000000'
*        },
*        logo:
*          'https://i2.au.reastatic.net/170x32/3015ba9710c7e3ddc2ac30f45fd7906df5b04e442a7f6948f75a6029b8b871e2/main.gif'
*      },
*      id: '4',
*      mainImage:
*        'https://i2.au.reastatic.net/640x480/5e84d96722dda3ea2a084d6935677f64872d1d760562d530c3cabfcb7bcda9c2/main.jpg'
*    }
*/

export default function createPropertyCard(property, btnType) {
  if (property) { // check if property has some data
    const cardWrp = document.createElement('li');
    const cardHeader = document.createElement('div');
    const cardHeaderImg = document.createElement('img');
    const cardBody = document.createElement('div');
    const cardBodyImg = document.createElement('img');
    const cardFooter = document.createElement('div');
    const cardBtn = document.createElement('button');

    // Creates header div element
    cardHeader.classList.add('card-header');
    cardHeader.setAttribute('style', `background: ${property.agency.brandingColors.primary}`);
    cardHeaderImg.classList.add('branding-image');
    cardHeaderImg.setAttribute('src', `${property.agency.logo}`);
    cardHeader.appendChild(cardHeaderImg);

    // Creates body div element
    cardBody.classList.add('image');
    cardBodyImg.setAttribute('src', `${property.mainImage}`);
    cardBody.appendChild(cardBodyImg);

    // Creates footer div element
    cardFooter.classList.add('card-footer');
    cardFooter.textContent = `Price: ${property.price}`;

    // Creates button element and added button label
    cardBtn.textContent = btnType === 'add' ? 'Add' : 'Remove';
    cardBtn.classList.add('action');

    // Add data-id attribute on the li element
    cardWrp.setAttribute('data-id', `${property.id}`);

    // Append child elements created above
    cardWrp.appendChild(cardHeader);
    cardWrp.appendChild(cardBody);
    cardWrp.appendChild(cardFooter);
    cardWrp.appendChild(cardBtn);

    return cardWrp;
  }
}

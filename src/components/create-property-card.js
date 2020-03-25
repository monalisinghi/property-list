export default function createPropertyCard(property, btnType) {
  if (property) {
    const cardWrp = document.createElement('li');
    const cardHeader = document.createElement('div');
    const cardHeaderImg = document.createElement('img');
    const cardBody = document.createElement('div');
    const cardBodyImg = document.createElement('img');
    const cardFooter = document.createElement('div');
    const cardBtn = document.createElement('button');

    // Header
    cardHeader.classList.add('card-header');
    cardHeader.setAttribute('style', `background: ${property.agency.brandingColors.primary}`);
    cardHeaderImg.classList.add('branding-image');
    cardHeaderImg.setAttribute('src', `${property.agency.logo}`);
    cardHeader.appendChild(cardHeaderImg);

    // Body
    cardBody.classList.add('image');
    cardBodyImg.setAttribute('src', `${property.mainImage}`);
    cardBody.appendChild(cardBodyImg);

    // Footer
    cardFooter.classList.add('card-footer');
    cardFooter.textContent = `Price: ${property.price}`;

    // Button
    cardBtn.textContent = btnType === 'add' ? 'Add' : 'Remove';
    cardBtn.classList.add('action');

    cardWrp.setAttribute('data-id', `${property.id}`);
    cardWrp.appendChild(cardHeader);
    cardWrp.appendChild(cardBody);
    cardWrp.appendChild(cardFooter);
    cardWrp.appendChild(cardBtn);

    return cardWrp;
  }
}

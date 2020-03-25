import createPropertyCard from './create-property-card';
import clearProperties from './clear-properties';

/*
* This function will take following @param and append li elements to #result / #saved ul element
*
* @param propData - source array to create property cards from
*/

export default function fetchProperties(propData) {
  clearProperties('#results'); // clears children li elements
  clearProperties('#saved'); // clears children li elements

  if (propData.results.length > 0) {
    // Generate results cards (li)
    propData.results.map((el) => {
      document.querySelector('#results').appendChild(createPropertyCard(el, 'add'));
    });
  }
  if (propData.saved.length > 0) {
    // Generate saved cards (li)
    propData.saved.map((el) => {
      document.querySelector('#saved').appendChild(createPropertyCard(el));
    });
  }
}

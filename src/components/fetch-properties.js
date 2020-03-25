import createPropertyCard from './create-property-card';
import clearProperties from './clear-properties';

export default function fetchProperties(propData) {
  clearProperties('#results');
  clearProperties('#saved');
  if (propData.results.length > 0) {
    // Generate results cards
    propData.results.map((el) => {
      document.querySelector('#results').appendChild(createPropertyCard(el, 'add'));
    });
  }
  if (propData.saved.length > 0) {
    // Generate saved cards
    propData.saved.map((el) => {
      document.querySelector('#saved').appendChild(createPropertyCard(el));
    });
  }
}

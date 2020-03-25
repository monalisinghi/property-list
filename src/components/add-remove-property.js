import fetchProperties from './fetch-properties';
import addProperty from './add-property';
import removeProperty from './remove-property';

/*
* This function will take following 3 @params and call addProperty and removeProperty functions
* also update the global data to maintain current state of the application
*
* @param propId - property id to be added /removed from source array
* @param actionType - determines if data should be added from data.results and removed from data.saved array or vice-verse
* @param data - global data object which keeps track of application state
*/

export default function addRemoveProperty(propId, actionType, data) {
  if (actionType === 'Add') {
    addProperty(data.results, data.saved, propId);
    removeProperty(data.results, propId);
  } else {
    addProperty(data.saved, data.results, propId);
    removeProperty(data.saved, propId);
  }
  fetchProperties(data);
}
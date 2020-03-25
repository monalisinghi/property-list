import fetchProperties from './fetch-properties';
import addProperty from './add-property';
import removeProperty from './remove-property';
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

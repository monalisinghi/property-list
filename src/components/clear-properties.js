/*
* This function will take @param and clear the children from the parent (id) element
*
* @param id - html element in DOM to remove children from
*/
export default function clearProperties(id) {
  if (document.querySelector(id).children) {
    document.querySelector(id).innerHTML = '';
  }
}

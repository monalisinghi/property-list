export default function clearProperties(id) {
  if (document.querySelector(id).children) {
    document.querySelector(id).innerHTML = '';
  }
}

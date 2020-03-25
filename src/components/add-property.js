export default function addProperty(source, target, toFind) {
  const findInSource = source.filter((el) => el.id === toFind);
  target.push(findInSource[0]);
  return target;
}

/*
* This function will take following 3 @params and push data to target array when toFind id is equal to el.id
*
* @param source - source array to find property data from
* @param target - target array to push (add) property data to
* @param toFind - property id to find in source array
*/

export default function addProperty(source, target, toFind) {
  const findInSource = source.filter((el) => el.id === toFind);
  target.push(findInSource[0]);
  return target;
}

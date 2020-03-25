/*
* This function will take following 2 @params and remove (splice) data from source array when toRemove id is equal to el.id
*
* @param source - source array to remove property data from
* @param toRemove - property id to find in source array
*/

export default function removeProperty(source, toRemove) {
  source.splice(
    source.findIndex((el) => el.id === toRemove),
    1
  );
  return source;
}

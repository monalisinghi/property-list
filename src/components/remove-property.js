export default function removeProperty(source, toRemove) {
  source.splice(
    source.findIndex((el) => el.id === toRemove),
    1
  );
  return source;
}

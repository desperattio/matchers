export default function sortCharactersByHealth(heroes) {
  return heroes.sort((a, b) => a.health - b.health).reverse();
}

export const getCharacters = async() => {
  const res = await fetch('http://futuramaapi.herokuapp.com/api/v2/characters');
  const json = await res.json();
  const characters = await json.map(character => {
    return character
  })
  return characters;
}
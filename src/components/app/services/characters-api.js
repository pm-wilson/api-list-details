export const getCharacters = async() => {
  const res = await fetch('https://rickandmortyapi.com/api/character/');
  const json = await res.json();
  const characterNames = await json.results.map(character => {
    return character;
  });
  return characterNames;
};

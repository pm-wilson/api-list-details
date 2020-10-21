export async function getDetails(id) {
  const res = await fetch(`https://rickandmortyapi.com/api/character/${id}`);
  const details = await res.json();

  return details;
}

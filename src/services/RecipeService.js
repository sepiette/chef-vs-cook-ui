export function getAllRecipes() {
  let headers = {
    'Access-Control-Allow-Origin': '*',
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  };
  return fetch(`/api/recipes`, { method: 'GET', headers: { ...headers } })
    .then(response => { return response.json() });
}


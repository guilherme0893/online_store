export async function getCategories() {
  try {
    const request = fetch('https://api.mercadolibre.com/sites/MLB/categories')
      .then((result) => result.json())
      .then((data) => data);
    return request;
  } catch (error) {
    console.error(error); // alterar para page notFound depois
  }
}

export async function getProductsFromCategoryAndQuery(categoryId, query) {
  try {
    return fetch(` https://api.mercadolibre.com/sites/MLB/search?category=${categoryId}&q=${query}`)
      .then((result) => result.json())
      .then((data) => data);
  } catch (error) {
    console.error(error); // alterar para page not found depois
  }
}

export async function getProductDetails(id) {
  const request = await fetch(`https://api.mercadolibre.com/items/${id}`);
  const result = await request.json();
  const returnedDetails = result;
  return returnedDetails;
}

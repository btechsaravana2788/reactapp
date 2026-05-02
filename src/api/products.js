const PRODUCTS_URL = 'https://dummyjson.com/products?limit=100';

export async function fetchAllProducts() {
  const response = await fetch(PRODUCTS_URL);
  if (!response.ok) {
    throw new Error('Could not fetch products');
  }
  return response.json();
}

export async function fetchProductById(id) {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  if (!response.ok) {
    throw new Error('Could not fetch product details');
  }
  return response.json();
}

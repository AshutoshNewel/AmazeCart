export async function fetchCategories() {
    const response = await fetch('https://dummyjson.com/products/categories');
    if (!response.ok) {
      throw new Error('Failed to fetch categories');
    }
    return response.json();
  }

  export async function fetchProducts({
    limit = 10,
    skip = 0,
    category = '',
    sort = '',
    search = '',
  }: {
    limit?: number;
    skip?: number;
    category?: string;
    sort?: string;
    search?: string;
  }) {
    let url = `https://dummyjson.com/products`;
    if (search) {
      url = `https://dummyjson.com/products/search?q=${search}&limit=${limit}&skip=${skip}`;
    } else if (category) {
      url = `https://dummyjson.com/products/category/${category}?limit=${limit}&skip=${skip}`;
    } else {
        url = `${url}?limit=${limit}&skip=${skip}`;
    }
    if (sort) {
      url += `&sort=${sort}`;
    }
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Failed to fetch products');
    }
    const data = await response.json();
    return data.products;
  }
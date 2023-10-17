const fetchProduct = async (query: string) => {
    const response = await fetch(`https://versa.onrender.com/products${query}`);
    const data = await response.json();
    return data;
}

export default fetchProduct;
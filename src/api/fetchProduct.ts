const fetchProduct = async (query: string) => {
    const response = await fetch(`https://versa-api.vercel.app/products${query}`);
    const data = await response.json();
    return data;
}

export default fetchProduct;
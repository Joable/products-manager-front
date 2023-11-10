export async function getProducts(){
    const response = await fetch('/products');
    const body = await response.json();

    return body;
};

export async function getProductsById(id){
    const response = await fetch(`/products/${id}`);
    const body = await response.json();

    return body;
};
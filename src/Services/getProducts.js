export async function getProducts(){
    const response = await fetch('/products');
    const body = await response.json();

    return body
}
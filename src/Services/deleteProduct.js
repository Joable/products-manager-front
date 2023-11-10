export async function deleteProduct(id) {
    await fetch(`products/${id}`,{
        method: 'DELETE'
    });
}
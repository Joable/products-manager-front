export async function editProduct(id, changes){
    await fetch(`/products/${id}`,{
        method: 'PUT',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(changes)
    });
}
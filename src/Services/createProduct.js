export async function createProduct(newProduct){
    await fetch('/products',{
        method:'POST',
        headers:{
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newProduct)
    })
}
import fs from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url';
async function updateProduct(id, productDTO) {
    const pathToProduct = join(dirname(fileURLToPath(import.meta.url)), "..", "data", "products.json");
    if (!existsSync(pathToProduct)) {
        throw new Error("No files to update")
    }
    const contentFiles = await fs.readFile(pathToProduct, 'utf8');

    const products = JSON.parse(contentFiles);
    const indexOfProductToUpdate = products.findIndex(product => product.id === id)
    if (indexOfProductToUpdate < 0) {
        throw new Error("Product not found")
    }
    const productUpdated = {
        id: id,
        ...productDTO
    }
    products.splice(indexOfProductToUpdate, 1, productUpdated);


    await fs.writeFile(pathToProduct.toString(), JSON.stringify(products))

    return productUpdated

}

export default updateProduct;
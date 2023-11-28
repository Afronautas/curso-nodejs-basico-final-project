import fs from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url';
import { v4 as uuidv4 } from 'uuid';
async function createProduct(productDTO) {
    const pathToProduct = join(dirname(fileURLToPath(import.meta.url)), "..", "data", "products.json");
    const newUUidForProduct = uuidv4();

    if (!existsSync(pathToProduct)) {
        const newProduct = [
            {
                id: newUUidForProduct,
                ...productDTO
            }
        ]
        await fs.writeFile(pathToProduct, JSON.stringify(newProduct))
        return newProduct
    }
    const contentFiles = await fs.readFile(pathToProduct, 'utf8');

    const products = JSON.parse(contentFiles);

    products.push(
        {
            id: newUUidForProduct,
            ...productDTO

        }
    )

    await fs.writeFile(pathToProduct.toString(), JSON.stringify(products))

    return products

}

export default createProduct;
import fs from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
async function listProduct() {

    const pathToProduct = join(dirname(fileURLToPath(import.meta.url)), "..", "data", "products.json");

    const contentFiles = await fs.readFile(pathToProduct, 'utf8');

    const products = JSON.parse(contentFiles);

    return products;

}

export default listProduct;
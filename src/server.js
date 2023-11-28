import express from 'express';
import productsRoute from './routes/products.routes.js';

const app = express();
app.use(express.json())

app.use("/products", productsRoute)

app.listen(3001, () => {
    console.log('Server is running on port 3000');
})
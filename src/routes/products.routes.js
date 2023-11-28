import { Router } from "express";
import createProduct from "./../services/add.product.service.js";
import listProduct from "../services/list.product.service.js";
import updateProduct from "../services/update.product.service.js";
const productsRoute = Router();

productsRoute.post("/", async (req, res) => {
    try {

        const {
            name,
            description,
            price
        } = req.body

        const product = await createProduct({
            name,
            description,
            price
        })

        res.status(201).json(product)

    } catch (e) {
        console.log(e)
        res.status(400).json({
            error: e.message
        })
    }

})



productsRoute.get("/", async (req, res) => {
    try {

        const product = await listProduct()

        res.status(201).json(product)

    } catch (e) {
        console.log(e)
        res.status(400).json({
            error: e.message
        })
    }

})


productsRoute.patch("/:id", async (req, res) => {
    try {

        const {
            name,
            description,
            price
        } = req.body

        const {
            id
        } = req.params
        const product = await updateProduct(id, {
            name,
            description,
            price
        })

        res.status(201).json(product)

    } catch (e) {
        console.log(e)
        res.status(400).json({
            error: e.message
        })
    }

})

export default productsRoute
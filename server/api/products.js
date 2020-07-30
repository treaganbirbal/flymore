const router = require("express").Router();
const { Product } = require("../db/models");
module.exports = router;

router.post("/", async (req, res, next) => {
  try {
    const newProduct = await Product.create(req.body);
    if (newProduct) {
      res.status(200).json(newProduct);
    } else {
      res.sendStatus(500);
    }
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req, res, next) => {
  try {
    const allProducts = await Product.findAll();
    if (allProducts) {
      res.status(200).json(allProducts);
    } else {
      res.sendStatus(500);
    }
  } catch (error) {
    next(error);
  }
});

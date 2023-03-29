import { Request, Response } from "express";
import { products } from "../database";

export const deleteProductById = (req: Request, res: Response) => {
  const id = req.params.id;
  const productIndex = products.findIndex((product) => {
    return product.id === id;
  });
  if (productIndex >= 0) {
    products.splice(productIndex, 1);
  }
  res.status(200).send("Produto apagado com sucesso");
};
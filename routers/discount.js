import express from 'express';
var discountRouter = express.Router();
import {getDiscounts,createDiscounts} from "../controllers/discount";
discountRouter.get("/",getDiscounts);
discountRouter.post("/create",createDiscounts);

export default discountRouter;

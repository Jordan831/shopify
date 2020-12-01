import express from 'express';
var checkRouter=express.Router();
import {getCheckout} from "../controllers/checkout";
checkRouter.get("/",getCheckout);

export default checkRouter;
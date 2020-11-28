import express from 'express';
import dotenv from 'dotenv';
import discountRouter from './routers/discount';
dotenv.config({path:'./config/config.env'});
const app = express();
app.use(discountRouter);

app.listen(process.env.PORT);
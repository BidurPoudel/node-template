import express from 'express'
import 'dotenv/config';
import { port } from './config/index.js';

const app = express()




app.listen(port, ()=>{
    console.log(`Server started at PORT: ${port }`);
    
})

import express from 'express'
import 'dotenv/config';
import { port } from './config/index.js';
import mainRoute from './routes/index.js';

const app = express()



app.use('/api', mainRoute)
app.listen(port, ()=>{
    console.log(`Server started at PORT: ${port }`);
    
})

import express from 'express'

const v1Routes = express.Router();

v1Routes.get('/v1', (req, res)=>{
    console.log('hi'); 
    return res.json({mes: 'hello'})
})

export default v1Routes;
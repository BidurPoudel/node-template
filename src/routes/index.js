import express from 'express'
import v1Routes from './v1/index.js'

const mainRoute = express.Router({mergeParams: true});

mainRoute.use('/v1', v1Routes)

export default mainRoute
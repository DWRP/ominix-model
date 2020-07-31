import express from 'express'
import ServerController from './src/controllers/ServerController'


const routes = express.Router()

routes.get('/', ServerController.index)

routes.get('/status', ServerController.status)

export default routes
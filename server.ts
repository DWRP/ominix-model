import express from 'express'
import cors from 'cors'

import routes from './routes'

import utils from './src/utils/main'

utils.loadRoutes()

const app = express()

app.use(cors())

app.use(express.json())
app.use(routes)

app.use(express.static('public'))

app.listen(8080)
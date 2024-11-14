//const express = require('express')
import express from 'express'
import logger from './middlewares/logger.js'
import welcome from './controllers/welcome.js'
import routeNotFounded from './controllers/routeNotFounded.js'
import errorHandler from './middlewares/errorHandler.js'
import { PORT, HOST, ENVIRONMENT } from './config.js'
import cors from 'cors'
import agendaRouter from './routers/agendaRouter.js'
import eventoRouter from './routers/eventoRouter.js'

const app = express()

app.use(logger)
app.use(cors())
// middleware que converte o request body json para objeto
app.use(express.json())

app.get('/', welcome)
app.use('/agenda', agendaRouter)
app.use('/evento', eventoRouter)
app.use('*', routeNotFounded)

app.use(errorHandler)

app.listen(PORT, () => {
  console.log(`Servidor rodando no ambiente ${ENVIRONMENT} em ${ENVIRONMENT == 'production' ? HOST : HOST+':'+PORT}`)
})
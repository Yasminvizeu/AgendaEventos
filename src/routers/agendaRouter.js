import express from 'express'
import createAgenda from '../controllers/agenda/createAgenda.js'
import agendaList from '../controllers/agenda/agendaList.js'
import agendaById from '../controllers/agenda/agendaById.js'
import editAgenda from '../controllers/agenda/editAgenda.js'
import deleteAgenda from '../controllers/agenda/deleteAgenda.js'

const router = express.Router()

router.post('/', createAgenda)
router.get('/list', agendaList)
router.get('/:id', agendaById)
router.put('/:id', editAgenda)
router.delete('/:id', deleteAgenda)

export default router
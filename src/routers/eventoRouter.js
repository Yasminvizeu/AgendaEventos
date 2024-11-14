import express from 'express'
import eventoList from '../controllers/evento/eventoList.js'
import createEvento from '../controllers/evento/createEvento.js'
import editEvento from '../controllers/evento/editEvento.js'
import deleteEvento from '../controllers/evento/deleteEvento.js'

const router = express.Router()

router.get('/', eventoList)
router.post('/', createEvento)
router.put('/', editEvento)
router.delete('/', deleteEvento)

export default router
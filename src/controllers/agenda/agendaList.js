import { getAll } from '../../models/agendaModel.js'

const agendaList = async (req, res) => {

    const agenda = await getAll()
    res.json(agenda)
}

export default agendaList
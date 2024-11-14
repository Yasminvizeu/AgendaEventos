import { getAll } from '../../models/agendaModel.js'

const eventoList = async (req, res) => {

    const agenda = await getAll()
    res.json(evento)
}

export default eventoList
import { getAll } from '../../models/eventoModel.js'

const eventoList = async (req, res) => {

    const evento = await getAll()
    res.json(evento)
}

export default eventoList
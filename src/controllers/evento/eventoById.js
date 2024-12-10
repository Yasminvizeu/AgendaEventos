import { getById } from "../../models/agendaModel.js"

const eventoById = async (req, res) => {
    const {id}  = req.params
    const evento =  await getById(+id)

    if(agenda)
        return res.json({
            message: "evento get by id", 
            evento
        })
    else
        return res.status(404).json({
            error: "evento não encontrado"
        })

}

export default eventoById
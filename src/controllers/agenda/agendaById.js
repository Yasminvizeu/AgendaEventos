import { getById } from "../../models/agendaModel.js"

const agendaById = async (req, res) => {
    const {id}  = req.params
    const agenda =  await getById(+id)

    if(agenda)
        return res.json({
            message: "agenda get by id", 
            user
        })
    else
        return res.status(404).json({
            error: "Agenda não encontrada"
        })

}

export default agendaById
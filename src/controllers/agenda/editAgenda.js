import { update } from "../../models/agendaModel.js"

const editAgenda = async (req, res) => {
    const {id} = req.params
    const agenda = req.body
    
    agenda.id = +id

    const result = await update(agenda)

    if(!result)
        return res.status(401).json({
            error: "Erro ao criar agenda"
        })

    return res.json({
        success: "Agenda atualizado com sucesso!",
        user: result
    })
}

export default editAgenda
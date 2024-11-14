import { update } from "../../models/agendaModel.js"

const editEvento = async (req, res) => {
    const {id} = req.params
    const evento = req.body
    
    evento.id = +id

    const result = await update(evento)

    if(!result)
        return res.status(401).json({
            error: "Erro ao criar evento"
        })

    return res.json({
        success: "evento atualizado com sucesso!",
        user: result
    })
}

export default editEvento
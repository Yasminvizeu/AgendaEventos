import { remove } from "../../models/agendaModel.js"

const deleteEvento = async (req, res, next) => {
    try {
        const {id}  = req.params
        const evento =  await remove(+id)

        return res.json({
            message: "Evento removido com sucesso!", 
            agenda
        })
    } catch (error) {
        console.log(error)
        if(error?.code === 'P2025')
            return res.status(404).json({
                error: "Evento não encontrada"
            })
        next(error)
    }
}
export default deleteEvento
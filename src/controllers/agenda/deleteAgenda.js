import { remove } from "../../models/agendaModel.js"

const deleteAgenda = async (req, res, next) => {
    try {
        const {id}  = req.params
        const agenda =  await remove(+id)

        return res.json({
            message: "Agenda removido com sucesso!", 
            agenda
        })
    } catch (error) {
        console.log(error)
        if(error?.code === 'P2025')
            return res.status(404).json({
                error: "Agenda não encontrada"
            })
        next(error)
    }
}
export default deleteAgenda
import { remove } from "../../models/eventoModel.js"

const deleteEvento = async (req, res, next) => {
    try {
        const {id}  = req.params
        const evento =  await remove(+id)

        return res.json({
            message: "Evento removido com sucesso!", 
            evento
        })
    } catch (error) {
        console.log(error)
        if(error?.code === 'P2025')
            return res.status(404).json({
                error: "Evento não encontrado"
            })
        next(error)
    }
}
export default deleteEvento
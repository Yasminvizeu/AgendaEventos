import { create, validateEventoToCreate } from "../../models/eventoModel.js"

const createEvento = async (req, res, next) => {
   try{
        const evento = req.body
        const eventValidated = validateEventoToCreate(evento)

        if(eventValidated?.error){
            return res.status(400).json({
                    error: "Erro ao criar evento, verifique os dados!",
                    fieldErrors: eventValidated.error.flatten().fieldErrors
            })
        }

        const result = await create(eventValidated.data) 

        if(!result)
            return res.status(500).json({
                error: "Erro ao criar evento"
            })

        return res.json({
            success: "Evento criado com sucesso!",
            user: result
        })
    } catch(error) {
        console.log(error)
        if(error?.code === 'P2002')
            return res.status(400).json({
                error: "Erro ao criar evento, verifique os dados!",
                fieldErrors: { id: ['id já cadastrado']}
            })
        next(error)
    }
}

export default createEvento
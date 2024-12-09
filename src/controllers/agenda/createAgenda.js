import { create, validateAgendaToCreate } from "../../models/agendaModel.js"
import { v4 as uuid } from 'uuid'
import bcrypt from 'bcrypt'

const createAgenda = async (req, res, next) => {
   try{
        const agenda = req.body
        const agendaValidated = validateAgendaToCreate(agenda)

        if(agendaValidated?.error){
            return res.status(400).json({
                    error: "Erro ao criar agenda, verifique os dados!",
                    fieldErrors: userValidated.error.flatten().fieldErrors
            })
        }
        const result = await create(agendaValidated.data) 

        if(!result)
            return res.status(500).json({
                error: "Erro ao criar usuário"
            })

        return res.json({
            success: "Agenda criada com sucesso!",
            user: result
        })
    } catch(error) {
        console.log(error)
        if(error?.code === 'P2002')
            return res.status(400).json({
                error: "Erro ao criar usuário, verifique os dados!",
                fieldErrors: { id: ['id já cadastrado']}
            })
        next(error)
    }
}

export default createAgenda
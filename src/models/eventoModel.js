import { PrismaClient } from '@prisma/client'
import { z } from 'zod'

const prisma = new PrismaClient()

const eventoSchema = z.object({
    id: z.number().int().optional(),  
    agendaId: z.number().int(),      
    titulo: z.string()
      .min(3, "O título do evento deve ter pelo menos 3 caracteres")
      .max(100, "O título do evento não pode ultrapassar 100 caracteres"),  
    descricao: z.string()
      .min(5, "A descrição do evento deve ter pelo menos 5 caracteres")
      .max(250, "A descrição do evento não pode ultrapassar 250 caracteres"), 
      dataInicio: z.string().datetime(),
      dataFim: z.string().datetime()     
  });

export const validateEvento = (evento) => {
    return eventoSchema.safeParse(evento)
}

export const validateEventoToCreate = (evento) => {
    const partialEventoSchema = eventoSchema.partial({
        id: true
    })
    return partialEventoSchema.safeParse(evento)
}

export const getAll = async () => {
    const eventos = await prisma.eventos.findMany({
        select: {
            id:true,
            agendaId:true,
            titulo:true,
            descricao:true,
            dataInicio:true,
            dataFim:true
        }
    })
    return eventos
}

export const getById = async (id) => {
    const evento = await prisma.eventos.findUnique({
        where: {
            id
        },
        select: {
            agendaId:true,
            titulo:true,
            descricao:true,
            dataInicio:true,
            dataFim:true
        }
    })
    
    return evento
}

export const create = async (evento) => {
    const result = await prisma.eventos.create({
        data: evento,
        select: {
            id:true,
            agendaId:true,
            titulo:true,
            descricao:true,
            dataInicio:true,
            dataFim:true
        }
    })

    return result
}

export const remove = async (id) => {
    const evento = await prisma.eventos.delete({
        where: {
           id 
        },
        select: {
            id:true,
            agendaId:true,
            titulo:true,
            descricao:true,
            dataInicio:true,
            dataFim:true
        }
    })

    return evento
}

export const update = async (evento) => {
    const result = await prisma.eventos.update({
        where: {
            id: evento.id
        },
        data: evento,
        select: {
            id:true,
            agendaId:true,
            titulo:true,
            descricao:true,
            dataInicio:true,
            dataFim:true
        }
    })
    return result
}



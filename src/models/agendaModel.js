import { PrismaClient } from '@prisma/client'
import { z } from 'zod'

const prisma = new PrismaClient()

const agendaSchema = z.object({
    id: z.number().int().optional(),  // 'id' é gerado automaticamente, então é opcional
    titulo: z.string()
      .min(3, "O título da agenda deve ter pelo menos 3 caracteres")
      .max(100, "O título da agenda não pode ultrapassar 100 caracteres"), // Valida o título
    cor: z.string()
      .max(10, "A cor não pode ultrapassar 10 caracteres")
      .optional(), // 'cor' é opcional
    descricao: z.string()
      .min(5, "A descrição da agenda deve ter pelo menos 5 caracteres")
      .max(250, "A descrição da agenda não pode ultrapassar 250 caracteres"), // Valida a descrição
  });
  

export const validateAgenda= (agenda) => {
    return agendaSchema.safeParse(agenda)
}

export const validateAgendaToCreate = (agenda) => {
    const partialAgendaSchema = agendaSchema.partial({
        id: true
    })
    return partialAgendaSchema.safeParse(agenda)
}


export const getAll = async () => {
    const users = await prisma.agendas.findMany({
        select: {
            id: true,
            titulo: true,
            cor: true,
            descricao:true,
            eventos:true
        }
    })
    return users
}

export const getById = async (id) => {
    const user = await prisma.agendas.findUnique({
        where: {
           id 
        },
        select: {
            id: true,
            titulo: true,
            cor: true,
            descricao:true,
            eventos:true
        }
    })
    return user
}


export const create = async (agenda) => {
    const result = await prisma.agendas.create({
        data: agenda,
        select: {
            id: true,
            titulo: true,
            cor: true,
            descricao:true,
            eventos:true
        }
    })
    return result
}

export const remove = async (id) => {
    const agenda = await prisma.agendas.delete({
        where: {
           id 
        },
        select: {
            id: true,
            titulo: true,
            cor: true,
            descricao:true,
            eventos:true
        }
    })
    return agenda
}

export const update = async (agenda) => {
    const result = await prisma.agendas.update({
        where: {
            id: agenda.id
        },
        data: agenda,
        select: {
            id: true,
            titulo: true,
            cor: true,
            descricao:true,
            eventos:true
        }
    })
    return result
}



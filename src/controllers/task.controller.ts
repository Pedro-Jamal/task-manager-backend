/*import {Request, Response} from "express";
export class TaskController{
    async create(request: Request, response: Response){
        return response.json({
            message: "Criar terefa"
        });
    }
}*/

//substituicao da resposta fixa por um uma criacao real usando o prisma

import {Request, Response} from "express";
import {PrismaClient} from "@prisma/client";

const prisma = new PrismaClient();

export class TaskController{

    //Criar tarefa
    async create(request: Request, response: Response){
        try{
            const {title, description} = request.body;
            const task = await prisma.task.create({
                data: {
                    title,
                    description,
                    userId: 1
            }
        });
        return response.status(201).json(task);
    
    } catch (error){
        return response.status(500).json({
            messagege: "Erro ao criar a tarefa."
        });
        }
    }

    //Listar tarefas
    async list(request: Request, response: Response){
        const tasks = await prisma.task.findMany();
        return response.json(tasks);
    }

    //buscar tarefa
    async show(request: Request, response: Response){
        try{
            const {id} = request.params;

            const task = await prisma.task.findUnique({
                where: {
                    id: Number(id)
        }
    });

    if(!task){
        return response.status(404).json({
            message: "Tarefa nao encontrada."
        });
    }

    return response.json(task);
    
    }catch (error){
        return response.status(500).json({
            messagege: "Erro interno."
            });
        }
    }

    //atualizar tarefa
    async update (request: Request, response: Response) {
        const {id} = request.params;
        const {title, description, complete} = request.body;
        try{
            const task = await prisma.task.update({
            
                where:{
                    id: Number(id)
                },
                data:{
                    title,
                    description,
                    complete
            }
        });
        return response.json(task);
    
    }catch (error){
        return response.status(500).json({
            messagege: "Erro interno"
        });
        }
    }   


    //apagar tarefa
    async delete(request: Request, response: Response){
        try{
            const {id} = request.params;
            await prisma.task.delete({
                where: {
                    id: Number(id)
            }
        });
        return response.status(204).send();
    
    }catch (error){
        return response.status(404).json({
            message: "Tarefa nao encontrada"
        });
        }
    }
}


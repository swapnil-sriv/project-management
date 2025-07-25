import { Request,Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getTasks = async (
    req:Request,
    res:Response
): Promise<void> => {
    const {projectId} = req.query;
    try{
        const tasks = await prisma.task.findMany({
            where: {
                projectId: Number(projectId),
            },
            include: {
                author: true,
                assignee: true,
                comments: true,
                attachments: true,
            }
        })
        res.json(tasks);
    }
    catch(err:any){
        res.status(500).json({message: `Error retreiving tasks: ${err.message}`});
    }
}

export const createTask = async (
    req:Request,
    res:Response
): Promise<void> => {
    const {
        title,
        description,
        status,
        priority,
        tags,
        startDate,
        dueDate,
        points, 
        projectId,
        authorUserId,
        assignedUserId,
    } = req.body;
    try{
        const newTask = await prisma.task.create({
            data:{
                title,
        description,
        status,
        priority,
        tags,
        startDate,
        dueDate,
        points, 
        projectId,
        authorUserId,
        assignedUserId,
            },
        });
        res.status(201).json(newTask);
    }
    catch(err:any){
        res.status(500).json({message: `Error creating task: ${err.message}`});
    }
}

export const updateTaskStatus = async (
    req:Request,
    res:Response
): Promise<void> => {
    const {taskId} = req.params;
    const {status} = req.body;
    try{
        const updateTask = await prisma.task.update({
            where: {
                id: Number(taskId),
            },
            data: {
                status: status,
            }
        })
        res.json(updateTask);
    }
    catch(err:any){
        res.status(500).json({message: `Error updating task: ${err.message}`});
    }
}
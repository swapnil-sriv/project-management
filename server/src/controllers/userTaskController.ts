import { Request,Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getUserTasks = async (
    req:Request,
    res:Response
): Promise<void> => {
    const {userId} = req.query;
    try{
        const userTasks = await prisma.task.findMany({
            where: {
                OR: [
                    {authorUserId: Number(userId)},
                    {assignedUserId: Number(userId)}
                ]
            },
            include: {
                author: true,
                assignee: true,
                comments: true,
                attachments: true,
            }
        })
        res.json(userTasks);
    }
    catch(err:any){
        res.status(500).json({message: `Error retreiving user's tasks: ${err.message}`});
    }
}
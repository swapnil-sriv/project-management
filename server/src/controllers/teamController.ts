import { Request,Response } from "express";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const getTeams = async (
    req:Request,
    res:Response
): Promise<void> => {
    try{
    
        const teams = await prisma.team.findMany();

            const teamWithUserNames = await Promise.all(
                teams.map(async (team: any) => {
                    const productOwner = await prisma.user.findUnique({
                        where: {
                            userId: team.productOwnerUserId!,
                        },
                        select: {username: true},
                    })
                    const projectManager = await prisma.user.findUnique({
                        where: {
                            userId: team.projectManagerUserId!,
                        },
                        select: {username: true},
                    });
                    
                    return {...team, productOwnerUsername: productOwner?.username, projectManagerUsername: projectManager?.username};
                })

            );
        
        res.json(teamWithUserNames);
    }
    catch(err:any){
        res.status(500).json({message: `Error retreiving Teams: ${err.message}`});
    }
}


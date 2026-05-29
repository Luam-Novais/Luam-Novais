import { prisma } from "@/src/config/prisma";

export default async function GET(){
    return await prisma.project.findMany()
}
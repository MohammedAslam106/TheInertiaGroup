import { DataBase } from "@/helper/CRUD";
import { NextRequest } from "next/server";

export async function POST(request:Request){
    try {
        const body=await request.json()
        const db=new DataBase('job-db')
        const result=db.create('purchase',body)
        return Response.json(result)
    } catch (error:any) {
        console.log(error.message)
        return Response.json({error:error.message})
    }
}

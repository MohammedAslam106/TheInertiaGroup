import { DataBase } from "@/helper/CRUD" 

export async function GET(request:Request){
    try {
        const db=new DataBase('job-db')
        const result=db.readProducts('products')
        return Response.json(result)
    } catch (error:any) {
        return Response.json(error.message)
    }
}
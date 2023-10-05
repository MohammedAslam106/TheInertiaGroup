import { DataBase } from "@/helper/CRUD" 

export async function GET(request:Request,params:{params:{id:string}}){
    try {
        const db=new DataBase('job-db')
        const result=db.readProducts('products',Number(params.params.id))
        return Response.json(result)
    } catch (error:any) {
        return Response.json(error.message)
    }
}